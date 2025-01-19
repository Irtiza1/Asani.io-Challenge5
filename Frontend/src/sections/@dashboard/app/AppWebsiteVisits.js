import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';
import { useState, useMemo } from 'react';
// @mui
import { Card, CardHeader, Box, Select, MenuItem, FormControl } from '@mui/material';
// components
import { useChart } from '../../../components/chart';

// ----------------------------------------------------------------------

AppWebsiteVisits.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartData: PropTypes.array.isRequired,
  chartLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function AppWebsiteVisits({ title, subheader, chartLabels, chartData, ...other }) {
  const [timeFilter, setTimeFilter] = useState('all');

  const filteredData = useMemo(() => {
    const today = new Date();
    const timestamps = chartLabels.map(label => new Date(label).getTime());
    
    // Calculate cutoff dates outside switch
    const oneWeekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    const oneMonthAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
    const oneYearAgo = new Date(today.getTime() - 365 * 24 * 60 * 60 * 1000);
    
    let filteredIndexes = [];
    
    switch (timeFilter) {
      case 'week':
        filteredIndexes = timestamps.map((timestamp, index) => 
          timestamp >= oneWeekAgo ? index : -1).filter(index => index !== -1);
        break;
      case 'month':
        filteredIndexes = timestamps.map((timestamp, index) => 
          timestamp >= oneMonthAgo ? index : -1).filter(index => index !== -1);
        break;
      case 'year':
        filteredIndexes = timestamps.map((timestamp, index) => 
          timestamp >= oneYearAgo ? index : -1).filter(index => index !== -1);
        break;
      default:
        filteredIndexes = timestamps.map((_, index) => index);
        break;
    }

    const filteredLabels = filteredIndexes.map(index => chartLabels[index]);
    const filteredChartData = chartData.map(series => ({
      ...series,
      data: filteredIndexes.map(index => series.data[index])
    }));

    return {
      labels: filteredLabels,
      data: filteredChartData
    };
  }, [timeFilter, chartLabels, chartData]);

  const chartOptions = useChart({
    plotOptions: { bar: { columnWidth: '16%' } },
    fill: { type: chartData.map((i) => i.fill) },
    labels: filteredData.labels,
    xaxis: { type: 'datetime' },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)} Gallons`;
          }
          return y;
        },
      },
    },
  });

  return (
    <Card {...other}>
      <CardHeader 
        title={title} 
        subheader={subheader}
        action={
          <FormControl sx={{ minWidth: 120, mr: 1 }}>
            <Select
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
              size="small"
              sx={{ height: 32 }}
            >
              <MenuItem value="all">All Time</MenuItem>
              <MenuItem value="week">Last Week</MenuItem>
              <MenuItem value="month">Last Month</MenuItem>
              <MenuItem value="year">Last Year</MenuItem>
            </Select>
          </FormControl>
        }
      />

      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart 
          type="line" 
          series={filteredData.data} 
          options={chartOptions} 
          height={364} 
        />
      </Box>
    </Card>
  );
}
