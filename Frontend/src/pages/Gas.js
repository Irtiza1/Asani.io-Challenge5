// import { Helmet } from 'react-helmet-async';
// // @mui
// import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// // components
// import Iconify from '../components/iconify';
// import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../sections/@dashboard/blog';
// // mock
// // import POSTS from '../_mock/blog';

// // ----------------------------------------------------------------------

// // const SORT_OPTIONS = [
// //   { value: 'latest', label: 'Latest' },
// //   { value: 'popular', label: 'Popular' },
// //   { value: 'oldest', label: 'Oldest' },
// // ];

// // ----------------------------------------------------------------------

// export default function BlogPage() {
//   return (
//     <>
//       {/* <Helmet> */}
//         <title> Gas | Asani.io</title>
//       {/* </Helmet> */}

//       {/* <Container>
//         <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
//           <Typography variant="h4" gutterBottom>
//             Gas
//           </Typography>
//           <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
//             New Post
//           </Button>
//         </Stack>

//         <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
//           <BlogPostsSearch posts={POSTS} />
//           <BlogPostsSort options={SORT_OPTIONS} />
//         </Stack>

//         <Grid container spacing={3}>
//           {POSTS.map((post, index) => (
//             <BlogPostCard key={post.id} post={post} index={index} />
//           ))}
//         </Grid>
//       </Container> */}
//     </>
//   );
// }

import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import { useNotification } from '../utils/Notifcation';
import {
  AppWidgetSummary,
  AppWebsiteVisits,
  AppCurrentVisits,
} from '../sections/@dashboard/app';

export default function GasDashboardPage() {
  const theme = useTheme();

  // State for dynamic data
  const [gasPressure, setGasPressure] = useState([]);
  const [dailyConsumption, setDailyConsumption] = useState(0);

  // Threshold values
  const PRESSURE_THRESHOLD = 125; // PSI
  const CONSUMPTION_THRESHOLD = 300; // Cubic meters
  const { notification, setNotification, updateNotification } = useNotification();
  // Function to generate dynamic data
  const generateData = () => {
    const pressureData = Array.from({ length: 7 }, () => Math.floor(Math.random() * 20) + 110); // Random PSI between 110-130
    const consumption = Math.floor(Math.random() * 100) + 200; // Random consumption between 200-300 cubic meters

    // Check for alerts
    if (pressureData.some((pressure) => pressure > PRESSURE_THRESHOLD)) {
      updateNotification('Gas Update', 'Gas pressure has exceeded the safe threshold!', 'gas');
    }
    if (consumption > CONSUMPTION_THRESHOLD) {
      updateNotification('Gas Update', 'Daily gas consumption has surpassed the threshold!', 'gas');
    }

    // Update state
    setGasPressure(pressureData);
    setDailyConsumption(consumption);
  };

  // Generate data on component mount
  useEffect(() => {
    generateData();
  }, []);

  return (
    <>
      <Helmet>
        <title> Gas Dashboard | Asani.io </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Gas Usage Dashboard
        </Typography>

        <Grid container spacing={3}>
          {/* Gas Pressure Widget */}
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary 
              title="Gas Pressure (PSI)" 
              total={75} 
              icon={'mdi:gas-cylinder'} 
            />
          </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary 
            title="Daily Gas Consumption (m³)" 
            total={23} 
            color="info" 
            icon={'mdi:chart-box-outline'} 
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary 
              title="Gas Pressure (PSI)" 
              total={75} 
              icon={'mdi:gas-cylinder'} 
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary 
              title="Gas Pressure (PSI)" 
              total={75} 
              icon={'mdi:gas-cylinder'} 
            />
          </Grid>
        {/* <Grid item xs={12}>
          <AppWebsiteVisits
            title="Your Goal Tracking"
            subheader="Goal: Reduce by 20% this year"
            chartLabels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
            chartData={[
              {
                name: 'Actual Consumption',
                type: 'line',
                data: [245, 230, 220, 210, 200, 195, 190, 180, 170, 165, 160, 150],
              },
              {
                name: 'Target Consumption',
                type: 'line',
                data: [245, 240, 235, 230, 225, 220, 215, 210, 205, 200, 195, 190],
              },
            ]}
          />
        </Grid> */}


        <Grid item xs={12}>
          <Typography variant="h6" color="error">
            ⚠️ Alert: High gas consumption detected at 8:00 PM!
          </Typography>
        </Grid>


        <Grid item xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Gas Pressure (PSI) over 24 Hours"
            subheader="Pressure fluctuation throughout the day"
            chartLabels={[
              '12 AM', '2 AM', '4 AM', '6 AM', '8 AM', '10 AM', '12 PM', 
              '2 PM', '4 PM', '6 PM', '8 PM', '10 PM'
            ]}
            chartData={[
              {
                name: 'Pressure (PSI)',
                type: 'line',
                fill: 'solid',
                data: [72, 75, 78, 70, 68, 65, 62, 60, 58, 55, 52, 50],
              },
            ]}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Gas Consumption (m³)"
            chartData={[
              { label: 'Heating (m³)', value: 60 },
              { label: 'Cooking (m³)', value: 25 },
              { label: 'Water Heating (m³)', value: 15 },
            ]}
            chartColors={[
              theme.palette.primary.main,
              theme.palette.info.main,
              theme.palette.warning.main,
            ]}
          />
        </Grid>
        </Grid>
      </Container>
    </>
  );
}
