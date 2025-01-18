// import { Helmet } from 'react-helmet-async';
// import { faker } from '@faker-js/faker';
// import { Card, Typography, Grid, Container  } from '@mui/material';
// // @mui
// import { useTheme } from '@mui/material/styles';
// // import { Grid, Container } from '@mui/material';
// // components
// import { size } from 'lodash';
// import Iconify from '../components/iconify';
// // sections
// import {
//   AppTasks,
//   AppNewsUpdate,
//   AppOrderTimeline,
//   AppCurrentVisits,
//   AppWebsiteVisits,
//   AppTrafficBySite,
//   AppWidgetSummary,
//   AppCurrentSubject,
//   AppConversionRates,
// } from '../sections/@dashboard/app';
// export default function DashboardAppPage() {
//   const theme = useTheme();

//   return (
//     <>
//       <Helmet>
//         <title> Dashboard | Minimal UI </title>
//       </Helmet>

//       <Container maxWidth="xl">
//         <Typography variant="h4" sx={{ mb: 5 }}>
//           Hi, Welcome back
//         </Typography>

//         <Grid container spacing={3}>
//           <Grid item xs={12} sm={6} md={3}>
//             <AppWidgetSummary title="Water Level" total={`10%`} icon={'ion:water-outline'} />
//           </Grid>

//           <Grid item xs={12} sm={6} md={3}>
//             <AppWidgetSummary title="Water Temperature" total={`100 °C`} color="info" icon={'fluent:temperature-24-filled'} />
//           </Grid>

//           <Grid item xs={12} sm={6} md={3}>
//             <AppWidgetSummary title="Water Purity" total={`100%`} color="warning" icon={'tabler:droplet-plus'} />
//           </Grid>

//           <Grid item xs={12} sm={6} md={3}>
//             <AppWidgetSummary title="Flow Rate" total={`55 (l/s)`} color="error" icon={'fa-solid:water'} />
//           </Grid>

//           <Grid item xs={12} md={6} lg={8}>
//             <AppWebsiteVisits
//               title="Water Consumption"
//               subheader="(+43%) than last year"
//               chartLabels={[
//                 '01/01/2003',
//                 '02/01/2003',
//                 '03/01/2003',
//                 '04/01/2003',
//                 '05/01/2003',
//                 '06/01/2003',
//                 '07/01/2003',
//                 '08/01/2003',
//                 '09/01/2003',
//                 '10/01/2003',
//                 '11/01/2003',
//               ]}
//               chartData={[
//                 {
//                   name: '2024',
//                   type: 'column',
//                   fill: 'solid',
//                   data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
//                 },
//                 {
//                   name: '2025',
//                   type: 'area',
//                   fill: 'gradient',
//                   data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
//                 },
//                 {
//                   name: 'Team C',
//                   type: 'line',
//                   fill: 'solid',
//                   data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
//                 },
//               ]}
//             />
//           </Grid>
//           <Grid item xs={12} md={6} lg={4}>
//           <Card
//               sx={{
//                 py: 5,
//                 boxShadow: 0,
//                 textAlign: 'center',
                
//               }}
//             >
//               <div style={{ textAlign: 'center' }}>
//                 <img 
//                   src="/assets/images/motor.jpeg" 
//                   alt="motor" 
//                   style={{ width: '100%', maxHeight: '300px', objectFit: 'contain' }} 
//                 />
//                 <h3 style={{ marginTop: '10px', color: '#007bff', fontSize: '20px' }}>Motor Health</h3>
//                 <p style={{ color: '#555', fontSize: '18px' }}>100%</p>

//               </div>
//             </Card>
                    
//           </Grid>


//           {/* <Grid item xs={12} md={6} lg={4}>
//             <AppOrderTimeline
//               title="Order Timeline"
//               list={[...Array(5)].map((_, index) => ({
//                 id: faker.datatype.uuid(),
//                 title: [
//                   '1983, orders, $4220',
//                   '12 Invoices have been paid',
//                   'Order #37745 from September',
//                   'New order placed #XF-2356',
//                   'New order placed #XF-2346',
//                 ][index],
//                 type: `order${index + 1}`,
//                 time: faker.date.past(),
//               }))}
//             />
//           </Grid> *//* <Grid item xs={12} md={6} lg={4}>
//             <AppOrderTimeline
//               title="Order Timeline"
//               list={[...Array(5)].map((_, index) => ({
//                 id: faker.datatype.uuid(),
//                 title: [
//                   '1983, orders, $4220',
//                   '12 Invoices have been paid',
//                   'Order #37745 from September',
//                   'New order placed #XF-2356',
//                   'New order placed #XF-2346',
//                 ][index],
//                 type: `order${index + 1}`,
//                 time: faker.date.past(),
//               }))}
//             />
//           </Grid> */}
//         </Grid>
//       </Container>
//     </>
//   );
// }

import { Helmet } from 'react-helmet-async';
import { Card, Typography, Grid, Container, Slider } from '@mui/material';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { AppWebsiteVisits, AppWidgetSummary } from '../sections/@dashboard/app';

export default function DashboardAppPage() {
  const [motorHealth, setMotorHealth] = useState(100);

  const handleMotorHealthChange = (event, newValue) => {
    setMotorHealth(newValue);
  };

  const getMotorImage = (percentage) => {
    if (percentage === 100) return '/assets/images/motor.jpeg';
    if (percentage >= 75) return '/assets/images/motor_75.jpg';
    if (percentage >= 25) return '/assets/images/motor_25.jpg';
    return '/assets/images/motor_0.jpg';
  };

  return (
    <>
      <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Water Level" total={`10%`} icon={'ion:water-outline'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Water Temperature" total={`100 °C`} color="info" icon={'fluent:temperature-24-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Water Purity" total={`100%`} color="warning" icon={'tabler:droplet-plus'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Flow Rate" total={`55 (l/s)`} color="error" icon={'fa-solid:water'} />
          </Grid>

          {/* Water Consumption Chart */}
          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Water Consumption"
              subheader="(+43%) than last year"
              chartLabels={[
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ]}
              chartData={[
                {
                  name: '2024',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: '2025',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
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
              <div style={{ textAlign: 'center' }}>
                {/* Dynamically changing image based on motor health */}
                <img
                  src={getMotorImage(motorHealth)}
                  alt="motor"
                  style={{ width: '100%', maxHeight: '300px', objectFit: 'contain' }}
                />
                <h3 style={{ marginTop: '10px', color: '#007bff', fontSize: '20px' }}>Motor Health</h3>
                <p style={{ color: '#555', fontSize: '18px' }}>{motorHealth}%</p>

                {/* Slider to adjust motor health */}
                <Slider
                  value={motorHealth}
                  onChange={handleMotorHealthChange}
                  aria-labelledby="continuous-slider"
                  valueLabelDisplay="auto"
                  step={1}
                  min={0}
                  max={100}
                />
              </div>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

/* <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Order Timeline"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  '1983, orders, $4220',
                  '12 Invoices have been paid',
                  'Order #37745 from September',
                  'New order placed #XF-2356',
                  'New order placed #XF-2346',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid> */