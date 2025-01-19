import { Helmet } from 'react-helmet-async';
import { Card, Typography, Grid, Container, Slider } from '@mui/material';
import { useState, useEffect } from 'react';
import { AppWebsiteVisits, AppWidgetSummary } from '../sections/@dashboard/app';
import { useNotification } from '../utils/Notifcation';
import Iconify from '../components/iconify';

export default function DashboardAppPage() {
  const [motorHealth, setMotorHealth] = useState(100);
  const [waterLevel, setWaterLevel] = useState(35);
  const [waterTemperature, setWaterTemperature] = useState(25);
  const [waterPurity, setWaterPurity] = useState(90);
  const [flowRate, setFlowRate] = useState(30);
  const [alerts, setAlerts] = useState([]);
  
  // For chart data (removed 2024 data)
  const [chartData, setChartData] = useState([
    {
      name: 'Current Consumption',
      type: 'area',
      fill: 'gradient',
      data: [
        44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 38, 48, 60, 52, 43, 51, 43, 60, 53,
        45, 44, 38, 48, 51, 47, 56, 45, 41, 47, 56, 52, 43, 51, 48, 43, 54, 42, 50, 47,
        48, 52, 49, 46, 48, 44, 52, 47, 48, 55, 45, 49, 53, 50, 51, 44, 51, 49, 55, 47,
        42, 45, 50, 43, 46, 48, 53, 51, 44, 52, 49, 48, 52, 43, 54, 47, 55, 50, 46, 42,
        50, 47, 53, 50, 46, 55, 44, 51, 45, 52, 49, 51, 44, 47, 55, 46, 49, 50, 48, 45,
      ],
    },
    {
      name: 'Average Consumption',
      type: 'line',
      fill: 'solid',
      data: [
        30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 40, 41, 44, 50, 45, 43, 48, 52, 51,
        45, 40, 35, 42, 50, 47, 42, 43, 47, 46, 49, 48, 45, 51, 46, 47, 50, 46, 52, 48,
        44, 46, 49, 47, 48, 46, 51, 44, 50, 47, 52, 50, 45, 42, 45, 47, 46, 42, 45, 43,
        50, 48, 42, 44, 47, 51, 50, 49, 47, 45, 42, 44, 51, 50, 46, 47, 45, 50, 48, 43,
        47, 45, 44, 48, 50, 49, 51, 45, 46, 47, 45, 49, 51, 48, 46, 45, 49, 50, 47, 48,
      ],
    },
  ]);
  const { notification, setNotification, updateNotification } = useNotification();
  const handleMotorHealthChange = (event, newValue) => {
    setMotorHealth(newValue);
  };

  const getMotorImage = (percentage) => {
    // if (percentage > 75) return '/assets/images/Motor1.png';
    // if (percentage > 25 && percentage <=75) return '/assets/images/Motor1.jpg';
    return '/assets/images/Motor1.png';
  };

  // Simulate live updates for other data
  useEffect(() => {
    const interval = setInterval(() => {
      setWaterLevel((prev) => Math.max(0, Math.min(100, prev + (Math.random() * 2 - 1) * 2)));
      setWaterTemperature((prev) => Math.max(0, Math.min(100, prev + (Math.random() * 2 - 1) * 2)));
      setWaterPurity((prev) => Math.max(0, Math.min(100, prev + (Math.random() * 2 - 1) * 2)));
      setFlowRate((prev) => Math.max(0, Math.min(100, prev + (Math.random() * 2 - 1) * 3)));
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  // Monitor levels and trigger alerts
  useEffect(() => {
    const newAlerts = [];

    if (waterLevel < 35) updateNotification('Water Update', 'Water usage increased by 10%', 'paani');
    if (waterLevel > 80) newAlerts.push('Warning: Water level is too high!');
    if (waterTemperature > 70) newAlerts.push('Alert: Water temperature is dangerously high!');
    if (waterPurity < 50) newAlerts.push('Alert: Water purity is below acceptable levels!');
    if (flowRate < 10) updateNotification('Warning: Flow rate is too low!');
    if (flowRate > 80) newAlerts.push('Alert: Flow rate is too high!');

    setAlerts(newAlerts); // Update the alerts state
  }, [waterLevel, waterTemperature, waterPurity, flowRate]);

  // Simulate live updates for the chart data
  useEffect(() => {
    const updateChartData = () => {
      setChartData((prevData) => {
        const updatedData = [...prevData];
        updatedData[0].data.push(Math.floor(Math.random() * 100)); // Simulate random data for 2025
        updatedData[1].data.push(Math.floor(Math.random() * 100)); // Simulate random data for Team C

        // Keep only the last 10 data points
        updatedData.forEach((data) => {
          if (data.data.length > 10) {
            data.data.shift();
          }
        });

        return updatedData;
      });
    };

    const chartInterval = setInterval(updateChartData, 3000); // Update every 3 seconds

    return () => clearInterval(chartInterval);
  }, []);

  return (
    <>
      <Helmet>
      <title> Paani Dashboard | Sahulat.io </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Water Consumption Dashboard
        </Typography>

        {/* Alerts Section */}
        {alerts.length > 0 && (
          <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#fff3cd', borderRadius: '5px', color: '#856404' }}>
            <ul>
              {alerts.map((alert, index) => (
                <li key={index} style={{ fontSize: '16px' }}>
                  {alert}
                </li>
              ))}
            </ul>
          </div>
        )}

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Water Level" total={`${waterLevel.toFixed(0)}%`} icon={'ion:water-outline'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Water Temperature"
              total={`${waterTemperature.toFixed(1)} °C`}
              color="info"
              icon={'fluent:temperature-24-filled'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Water Purity"
              total={`${waterPurity.toFixed(0)}%`}
              color="warning"
              icon={'tabler:droplet-plus'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Flow Rate"
              total={`${flowRate.toFixed(1)} (l/s)`}
              color="error"
              icon={'fa-solid:water'}
            />
          </Grid>

          {/* Water Consumption Chart */}
          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Water Consumption"
              subheader="(+43%) than last year"
              chartLabels={[
                '11/01/2024', '11/02/2024', '11/03/2024', '11/04/2024', '11/05/2024', '11/06/2024', '11/07/2024', '11/08/2024', '11/09/2024', '11/10/2024',
                '11/11/2024', '11/12/2024', '11/13/2024', '11/14/2024', '11/15/2024', '11/16/2024', '11/17/2024', '11/18/2024', '11/19/2024', '11/20/2024',
                '11/21/2024', '11/22/2024', '11/23/2024', '11/24/2024', '11/25/2024', '11/26/2024', '11/27/2024', '11/28/2024', '11/29/2024', '11/30/2024',
                '12/01/2024', '12/02/2024', '12/03/2024', '12/04/2024', '12/05/2024', '12/06/2024', '12/07/2024', '12/08/2024', '12/09/2024', '12/10/2024',
                '12/11/2024', '12/12/2024', '12/13/2024', '12/14/2024', '12/15/2024', '12/16/2024', '12/17/2024', '12/18/2024', '12/19/2024', '12/20/2024',
                '12/21/2024', '12/22/2024', '12/23/2024', '12/24/2024', '12/25/2024', '12/26/2024', '12/27/2024', '12/28/2024', '12/29/2024', '12/30/2024',
                '12/31/2024', '01/01/2025', '01/02/2025', '01/03/2025', '01/04/2025', '01/05/2025', '01/06/2025', '01/07/2025', '01/08/2025', '01/09/2025',
                '01/10/2025', '01/11/2025', '01/12/2025', '01/13/2025', '01/14/2025', '01/15/2025', '01/16/2025', '01/17/2025', '01/18/2025', '01/19/2025',
                '01/20/2025', '01/21/2025', '01/22/2025', '01/23/2025', '01/24/2025', '01/25/2025', '01/26/2025', '01/27/2025', '01/28/2025', '01/29/2025',
                '01/30/2025', '01/31/2025', '02/01/2025', '02/02/2025', '02/03/2025', '02/04/2025', '02/05/2025', '02/06/2025', '02/07/2025', '02/08/2025'
              ]}
              chartData={chartData}
            />
          </Grid>

          {/* Motor Health Card */}
          <Grid item xs={12} md={6} lg={4}>
  <Card
    sx={{
      py: 5,
      boxShadow: 0,
      textAlign: 'center',
    }}
  >
      
        {/* <Iconify icon={'ion:switch'} width={40} height={40} /> */}
          <div style={{ textAlign: 'center' }}>
            <img
              src={getMotorImage(motorHealth)}
              alt="motor"
              style={{ width: '100%', maxHeight: '300px', objectFit: 'contain' }}
            />
            <h3 style={{ marginTop: '10px', color: '#007bff', fontSize: '20px' }}>Motor Health</h3>
            <p style={{ color: '#555', fontSize: '18px' }}>{motorHealth}%</p>
          </div>
        </Card>
      </Grid>

        </Grid>
      </Container>
    </>
  );
}
