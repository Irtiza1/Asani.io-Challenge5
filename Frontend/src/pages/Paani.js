

import { Helmet } from 'react-helmet-async';
import { Card, Typography, Grid, Container, Slider } from '@mui/material';
import { useState, useEffect } from 'react';
import { AppWebsiteVisits, AppWidgetSummary } from '../sections/@dashboard/app';
import { useNotification } from '../utils/Notifcation';

export default function DashboardAppPage() {
  const [motorHealth, setMotorHealth] = useState(100);
  const [waterLevel, setWaterLevel] = useState(10);
  const [waterTemperature, setWaterTemperature] = useState(25);
  const [waterPurity, setWaterPurity] = useState(90);
  const [flowRate, setFlowRate] = useState(30);
  const [alerts, setAlerts] = useState([]); // Array to hold alert messages
  const { notification, setNotification, updateNotification } = useNotification();
  const handleMotorHealthChange = (event, newValue) => {
    setMotorHealth(newValue);
  };

  const getMotorImage = (percentage) => {
    if (percentage === 100) return '/assets/images/motor.jpeg';
    if (percentage >= 75) return '/assets/images/motor_75.jpg';
    if (percentage >= 25) return '/assets/images/motor_25.jpg';
    return '/assets/images/motor_0.jpg';
  };

  // Simulate live updates
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

    if (waterLevel < 20) updateNotification('Water Update', 'Water usage increased by 10%', 'paani');
    if (waterLevel > 80) newAlerts.push('Warning: Water level is too high!');
    if (waterTemperature > 70) newAlerts.push('Alert: Water temperature is dangerously high!');
    if (waterPurity < 50) newAlerts.push('Alert: Water purity is below acceptable levels!');
    if (flowRate < 10) newAlerts.push('Warning: Flow rate is too low!');
    if (flowRate > 80) newAlerts.push('Alert: Flow rate is too high!');

    setAlerts(newAlerts); // Update the alerts state
  }, [waterLevel, waterTemperature, waterPurity, flowRate]);

  return (
    <>
      <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        {/* Alerts Section */}
        {alerts.length > 0 && (
          <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#fff3cd', borderRadius: '5px', color: '#856404' }}>
            {/* <Typography variant="h6">Alerts:</Typography> */}
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


// import { Helmet } from 'react-helmet-async';
// import { Card, Typography, Grid, Container, Slider, Button, Alert } from '@mui/material';
// import { useState, useEffect } from 'react';
// import { useTheme } from '@mui/material/styles';
// import { AppWebsiteVisits, AppWidgetSummary } from '../sections/@dashboard/app';

// export default function DashboardAppPage() {
//   const [motorHealth, setMotorHealth] = useState(100);
//   const [waterLevel, setWaterLevel] = useState(10); // Simulating water level changes
//   const [alert, setAlert] = useState(false);

//   const handleMotorHealthChange = (event, newValue) => {
//     setMotorHealth(newValue);
//   };

//   const getMotorImage = (percentage) => {
//     if (percentage === 100) return '/assets/images/motor.jpeg';
//     if (percentage >= 75) return '/assets/images/motor_75.jpg';
//     if (percentage >= 25) return '/assets/images/motor_25.jpg';
//     return '/assets/images/motor_0.jpg';
//   };

//   // Simulating real-time updates (e.g., for water level)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const randomChange = Math.random() > 0.5 ? 1 : -1; // Random up/down fluctuation
//       setWaterLevel((prev) => Math.max(0, Math.min(100, prev + randomChange)));
//     }, 3000); // Update every 3 seconds
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (waterLevel < 10) {
//       setAlert(true);
//     } else {
//       setAlert(false);
//     }
//   }, [waterLevel]);

//   return (
//     <>
//       <Helmet>
//         <title> Dashboard | Minimal UI </title>
//       </Helmet>

//       <Container maxWidth="xl">
//         <Typography variant="h4" sx={{ mb: 5 }}>
//           Hi, Welcome back
//         </Typography>

//         {alert && <Alert severity="warning">Warning: Water Level is critically low!</Alert>}

//         <Grid container spacing={3}>
//           <Grid item xs={12} sm={6} md={3}>
//             <AppWidgetSummary title="Water Level" total={`${waterLevel}%`} icon={'ion:water-outline'} />
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

//           {/* Water Consumption Chart */}
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
//               onClick={() => alert('Interactivity Placeholder: Graph clicked!')}
//             />
//           </Grid>

//           {/* Motor Health Card */}
//           <Grid item xs={12} md={6} lg={4}>
//             <Card
//               sx={{
//                 py: 5,
//                 boxShadow: 0,
//                 textAlign: 'center',
//               }}
//             >
//               <div style={{ textAlign: 'center' }}>
//                 {/* Dynamically changing image based on motor health */}
//                 <img
//                   src={getMotorImage(motorHealth)}
//                   alt="motor"
//                   style={{ width: '100%', maxHeight: '300px', objectFit: 'contain' }}
//                 />
//                 <h3 style={{ marginTop: '10px', color: '#007bff', fontSize: '20px' }}>Motor Health</h3>
//                 <p style={{ color: '#555', fontSize: '18px' }}>{motorHealth}%</p>

//                 {/* Slider to adjust motor health */}
//                 <Slider
//                   value={motorHealth}
//                   onChange={handleMotorHealthChange}
//                   aria-labelledby="continuous-slider"
//                   valueLabelDisplay="auto"
//                   step={1}
//                   min={0}
//                   max={100}
//                 />

//                 {/* Reset Button */}
//                 <Button
//                   variant="outlined"
//                   sx={{ mt: 2 }}
//                   onClick={() => setMotorHealth(100)}
//                 >
//                   Reset Motor Health
//                 </Button>
//               </div>
//             </Card>
//           </Grid>
//         </Grid>
//       </Container>
//     </>
//   );
// }


// code 2
// import { Helmet } from 'react-helmet-async';
// import { Card, Typography, Grid, Container, Slider } from '@mui/material';
// import { useState, useEffect } from 'react';
// import { AppWebsiteVisits, AppWidgetSummary } from '../sections/@dashboard/app';

// export default function DashboardAppPage() {
//   const [motorHealth, setMotorHealth] = useState(100);
//   const [waterTemperature, setWaterTemperature] = useState(100); // Initial value
//   const [waterPurity, setWaterPurity] = useState(100); // Initial value
//   const [flowRate, setFlowRate] = useState(55); // Initial value

//   const handleMotorHealthChange = (event, newValue) => {
//     setMotorHealth(newValue);
//   };

//   const getMotorImage = (percentage) => {
//     if (percentage === 100) return '/assets/images/motor.jpeg';
//     if (percentage >= 75) return '/assets/images/motor_75.jpg';
//     if (percentage >= 25) return '/assets/images/motor_25.jpg';
//     return '/assets/images/motor_0.jpg';
//   };

//   useEffect(() => {
//     // Function to simulate live updates
//     const updateLiveValues = () => {
//       setWaterTemperature((prev) => Math.min(Math.max(prev + (Math.random() * 2 - 1), 90), 110)); // Range 90-110 °C
//       setWaterPurity((prev) => Math.min(Math.max(prev + (Math.random() * 2 - 1), 90), 100)); // Range 90-100%
//       setFlowRate((prev) => Math.min(Math.max(prev + (Math.random() * 5 - 2.5), 50), 60)); // Range 50-60 l/s
//     };

//     // Set interval to update values every second
//     const interval = setInterval(updateLiveValues, 1000);

//     return () => clearInterval(interval); // Cleanup on component unmount
//   }, []);

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
//             <AppWidgetSummary
//               title="Water Temperature"
//               total={`${waterTemperature.toFixed(1)} °C`} // Live temperature update
//               color="info"
//               icon={'fluent:temperature-24-filled'}
//             />
//           </Grid>

//           <Grid item xs={12} sm={6} md={3}>
//             <AppWidgetSummary
//               title="Water Purity"
//               total={`${waterPurity.toFixed(1)}%`} // Live purity update
//               color="warning"
//               icon={'tabler:droplet-plus'}
//             />
//           </Grid>

//           <Grid item xs={12} sm={6} md={3}>
//             <AppWidgetSummary
//               title="Flow Rate"
//               total={`${flowRate.toFixed(1)} (l/s)`} // Live flow rate update
//               color="error"
//               icon={'fa-solid:water'}
//             />
//           </Grid>

//           {/* Water Consumption Chart */}
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

//           {/* Motor Health Card */}
//           <Grid item xs={12} md={6} lg={4}>
//             <Card
//               sx={{
//                 py: 5,
//                 boxShadow: 0,
//                 textAlign: 'center',
//               }}
//             >
//               <div style={{ textAlign: 'center' }}>
//                 {/* Dynamically changing image based on motor health */}
//                 <img
//                   src={getMotorImage(motorHealth)}
//                   alt="motor"
//                   style={{ width: '100%', maxHeight: '300px', objectFit: 'contain' }}
//                 />
//                 <h3 style={{ marginTop: '10px', color: '#007bff', fontSize: '20px' }}>Motor Health</h3>
//                 <p style={{ color: '#555', fontSize: '18px' }}>{motorHealth}%</p>

//                 {/* Slider to adjust motor health */}
//                 <Slider
//                   value={motorHealth}
//                   onChange={handleMotorHealthChange}
//                   aria-labelledby="continuous-slider"
//                   valueLabelDisplay="auto"
//                   step={1}
//                   min={0}
//                   max={100}
//                 />
//               </div>
//             </Card>
//           </Grid>
//         </Grid>
//       </Container>
//     </>
//   );
// }

// code 3
// import { Helmet } from 'react-helmet-async';
// import { Card, Typography, Grid, Container, Slider } from '@mui/material';
// import { useState, useEffect } from 'react';
// import { AppWebsiteVisits, AppWidgetSummary } from '../sections/@dashboard/app';

// export default function DashboardAppPage() {
//   const [motorHealth, setMotorHealth] = useState(100);
//   const [waterLevel, setWaterLevel] = useState(10);
//   const [waterTemperature, setWaterTemperature] = useState(25);
//   const [waterPurity, setWaterPurity] = useState(90);
//   const [flowRate, setFlowRate] = useState(30);

//   const handleMotorHealthChange = (event, newValue) => {
//     setMotorHealth(newValue);
//   };

//   const getMotorImage = (percentage) => {
//     if (percentage === 100) return '/assets/images/motor.jpeg';
//     if (percentage >= 75) return '/assets/images/motor_75.jpg';
//     if (percentage >= 25) return '/assets/images/motor_25.jpg';
//     return '/assets/images/motor_0.jpg';
//   };

//   // Simulate live updates
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setWaterLevel((prev) => Math.max(0, Math.min(100, prev + (Math.random() * 2 - 1) * 5)));
//       setWaterTemperature((prev) => Math.max(0, Math.min(100, prev + (Math.random() * 2 - 1) * 2)));
//       setWaterPurity((prev) => Math.max(0, Math.min(100, prev + (Math.random() * 2 - 1) * 2)));
//       setFlowRate((prev) => Math.max(0, Math.min(100, prev + (Math.random() * 2 - 1) * 3)));
//     }, 1000); // Update every second

//     return () => clearInterval(interval);
//   }, []);

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
//             <AppWidgetSummary title="Water Level" total={`${waterLevel.toFixed(0)}%`} icon={'ion:water-outline'} />
//           </Grid>

//           <Grid item xs={12} sm={6} md={3}>
//             <AppWidgetSummary
//               title="Water Temperature"
//               total={`${waterTemperature.toFixed(1)} °C`}
//               color="info"
//               icon={'fluent:temperature-24-filled'}
//             />
//           </Grid>

//           <Grid item xs={12} sm={6} md={3}>
//             <AppWidgetSummary
//               title="Water Purity"
//               total={`${waterPurity.toFixed(0)}%`}
//               color="warning"
//               icon={'tabler:droplet-plus'}
//             />
//           </Grid>

//           <Grid item xs={12} sm={6} md={3}>
//             <AppWidgetSummary
//               title="Flow Rate"
//               total={`${flowRate.toFixed(1)} (l/s)`}
//               color="error"
//               icon={'fa-solid:water'}
//             />
//           </Grid>

//           {/* Water Consumption Chart */}
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

//           {/* Motor Health Card */}
//           <Grid item xs={12} md={6} lg={4}>
//             <Card
//               sx={{
//                 py: 5,
//                 boxShadow: 0,
//                 textAlign: 'center',
//               }}
//             >
//               <div style={{ textAlign: 'center' }}>
//                 {/* Dynamically changing image based on motor health */}
//                 <img
//                   src={getMotorImage(motorHealth)}
//                   alt="motor"
//                   style={{ width: '100%', maxHeight: '300px', objectFit: 'contain' }}
//                 />
//                 <h3 style={{ marginTop: '10px', color: '#007bff', fontSize: '20px' }}>Motor Health</h3>
//                 <p style={{ color: '#555', fontSize: '18px' }}>{motorHealth}%</p>

//                 {/* Slider to adjust motor health */}
//                 <Slider
//                   value={motorHealth}
//                   onChange={handleMotorHealthChange}
//                   aria-labelledby="continuous-slider"
//                   valueLabelDisplay="auto"
//                   step={1}
//                   min={0}
//                   max={100}
//                 />
//               </div>
//             </Card>
//           </Grid>
//         </Grid>
//       </Container>
//     </>
//   );
// }
