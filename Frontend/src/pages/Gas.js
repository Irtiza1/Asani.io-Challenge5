

// import { useState, useEffect } from 'react';
// import { Helmet } from 'react-helmet-async';
// import { useTheme } from '@mui/material/styles';
// import { Grid, Container, Typography } from '@mui/material';
// import { useNotification } from '../utils/Notifcation';
// import {
//   AppWidgetSummary,
//   AppWebsiteVisits,
//   AppCurrentVisits,
// } from '../sections/@dashboard/app';

// export default function GasDashboardPage() {
//   const theme = useTheme();

//   // State for dynamic data
//   const [gasPressure, setGasPressure] = useState([]);
//   const [dailyConsumption, setDailyConsumption] = useState(0);

//   // Threshold values
//   const PRESSURE_THRESHOLD = 125; // PSI
//   const CONSUMPTION_THRESHOLD = 300; // Cubic meters
//   const { notification, setNotification, updateNotification } = useNotification();
//   // Function to generate dynamic data
//   const generateData = () => {
//     const pressureData = Array.from({ length: 7 }, () => Math.floor(Math.random() * 20) + 110); // Random PSI between 110-130
//     const consumption = Math.floor(Math.random() * 100) + 200; // Random consumption between 200-300 cubic meters

//     // Check for alerts
//     if (pressureData.some((pressure) => pressure > PRESSURE_THRESHOLD)) {
//       updateNotification('Gas Update', 'Gas pressure has exceeded the safe threshold!', 'gas');
//     }
//     if (consumption > CONSUMPTION_THRESHOLD) {
//       updateNotification('Gas Update', 'Daily gas consumption has surpassed the threshold!', 'gas');
//     }

//     // Update state
//     setGasPressure(pressureData);
//     setDailyConsumption(consumption);
//   };

//   // Generate data on component mount
//   useEffect(() => {
//     generateData();
//   }, []);

//   return (
//     <>
//       <Helmet>
//         <title> Gas Dashboard | Sahulat.io </title>
//       </Helmet>

//       <Container maxWidth="xl">
//         <Typography variant="h4" sx={{ mb: 5 }}>
//           Gas Usage Dashboard
//         </Typography>

//         <Grid container spacing={3}>
//           {/* Gas Pressure Widget */}
//           <Grid item xs={12} sm={6} md={3}>
//             <AppWidgetSummary 
//               title="Gas Pressure (PSI)" 
//               total={75} 
//               icon={'mdi:gas-cylinder'} 
//             />
//           </Grid>

//         <Grid item xs={12} sm={6} md={3}>
//           <AppWidgetSummary 
//             title="Daily Gas Consumption (m³)" 
//             total={23} 
//             color="info" 
//             icon={'mdi:chart-box-outline'} 
//           />
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//             <AppWidgetSummary 
//               title="Gas Pressure (PSI)" 
//               total={75} 
//               icon={'mdi:gas-cylinder'} 
//             />
//           </Grid>
//           <Grid item xs={12} sm={6} md={3}>
//             <AppWidgetSummary 
//               title="Gas Pressure (PSI)" 
//               total={75} 
//               icon={'mdi:gas-cylinder'} 
//             />
//           </Grid>
//         {/* <Grid item xs={12}>
//           <AppWebsiteVisits
//             title="Your Goal Tracking"
//             subheader="Goal: Reduce by 20% this year"
//             chartLabels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
//             chartData={[
//               {
//                 name: 'Actual Consumption',
//                 type: 'line',
//                 data: [245, 230, 220, 210, 200, 195, 190, 180, 170, 165, 160, 150],
//               },
//               {
//                 name: 'Target Consumption',
//                 type: 'line',
//                 data: [245, 240, 235, 230, 225, 220, 215, 210, 205, 200, 195, 190],
//               },
//             ]}
//           />
//         </Grid> */}


//         <Grid item xs={12}>
//           <Typography variant="h6" color="error">
//             ⚠️ Alert: High gas consumption detected at 8:00 PM!
//           </Typography>
//         </Grid>


//         <Grid item xs={12} md={6} lg={8}>
//           <AppWebsiteVisits
//             title="Gas Pressure (PSI) over 24 Hours"
//             subheader="Pressure fluctuation throughout the day"
//             chartLabels={[
//               '12 AM', '2 AM', '4 AM', '6 AM', '8 AM', '10 AM', '12 PM', 
//               '2 PM', '4 PM', '6 PM', '8 PM', '10 PM'
//             ]}
//             chartData={[
//               {
//                 name: 'Pressure (PSI)',
//                 type: 'line',
//                 fill: 'solid',
//                 data: [72, 75, 78, 70, 68, 65, 62, 60, 58, 55, 52, 50],
//               },
//             ]}
//           />
//         </Grid>

//         <Grid item xs={12} md={6} lg={4}>
//           <AppCurrentVisits
//             title="Gas Consumption (m³)"
//             chartData={[
//               { label: 'Heating (m³)', value: 60 },
//               { label: 'Cooking (m³)', value: 25 },
//               { label: 'Water Heating (m³)', value: 15 },
//             ]}
//             chartColors={[
//               theme.palette.primary.main,
//               theme.palette.info.main,
//               theme.palette.warning.main,
//             ]}
//           />
//         </Grid>
//         </Grid>
//       </Container>
//     </>
//   );
// }

import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import {
  AppWidgetSummary,
  AppWebsiteVisits,
  AppCurrentVisits,
} from '../sections/@dashboard/app';

export default function ResourceDashboard() {
  const theme = useTheme();
  const [gasFlow, setGasFlow] = useState(100);
  const [gasLeakage, setGasLeakage] = useState(50);
  // State for dynamic data
  const [waterLevel, setWaterLevel] = useState([]);
  const [waterUsage, setWaterUsage] = useState([]);
  const [energyConsumption, setEnergyConsumption] = useState([]);
  const [gasUsage, setGasUsage] = useState([]);

  // Simulate live data generation
  const generateData = () => {
    setWaterLevel((prev) => [...prev.slice(-23), Math.random() * 100]); // Water level 0-100%
    setWaterUsage((prev) => [...prev.slice(-23), Math.random() * 200]); // Water usage 0-200 L
    setEnergyConsumption((prev) => [...prev.slice(-23), Math.random() * 50]); // Energy usage 0-50 kWh
    setGasUsage((prev) => [...prev.slice(-23), Math.random() * 300]); // Gas usage 0-300 cubic meters
  };

  // Update data every 2 seconds
  useEffect(() => {
    const interval = setInterval(generateData, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Helmet>
        <title> Resource Dashboard | Live Monitoring </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Resource Usage Dashboard
        </Typography>

        <Grid container spacing={3}>
          {/* Water Level Widget */}
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary 
              title="Gas Pressure (PSI)" 
              total={75} 
              icon={'mdi:gas-cylinder'} 
            />
          </Grid>

          {/* Water Usage Widget */}
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary 
              title="Water Usage (L)" 
              total={waterUsage[waterUsage.length - 1]?.toFixed(2)} 
              icon={'mdi:water'} 
            />
          </Grid>

          {/* Energy Consumption Widget */}
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary 
              title="Energy Consumption (kWh)" 
              total={energyConsumption[energyConsumption.length - 1]?.toFixed(2)} 
              color="warning" 
              icon={'mdi:flash'} 
            />
          </Grid>

          {/* Gas Usage Widget */}
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary 
              title="Gas Usage (m³)" 
              total={gasUsage[gasUsage.length - 1]?.toFixed(2)} 
              color="error" 
              icon={'mdi:gas-cylinder'} 
            />
          </Grid>

          {/* Graphs */}
          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Bachat"
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
              chartData={[
                {
                  name: 'Bijli',
                  type: 'line',
                  fill: 'solid',
                  data: [
                    44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 38, 48, 60, 52, 43, 51, 43, 60, 53,
                    45, 44, 38, 48, 51, 47, 56, 45, 41, 47, 56, 52, 43, 51, 48, 43, 54, 42, 50, 47,
                    48, 52, 49, 46, 48, 44, 52, 47, 48, 55, 45, 49, 53, 50, 51, 44, 51, 49, 55, 47,
                    42, 45, 50, 43, 46, 48, 53, 51, 44, 52, 49, 48, 52, 43, 54, 47, 55, 50, 46, 42,
                    50, 47, 53, 50, 46, 55, 44, 51, 45, 52, 49, 51, 44, 47, 55, 46, 49, 50, 48, 45,
                  ],
                },
                {
                  name: 'Paani',
                  type: 'area',
                  fill: 'gradient',
                  data: [
                    30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 40, 41, 44, 50, 45, 43, 48, 52, 51,
                    45, 40, 35, 42, 50, 47, 42, 43, 47, 46, 49, 48, 45, 51, 46, 47, 50, 46, 52, 48,
                    44, 46, 49, 47, 48, 46, 51, 44, 50, 47, 52, 50, 45, 42, 45, 47, 46, 42, 45, 43,
                    50, 48, 42, 44, 47, 51, 50, 49, 47, 45, 42, 44, 51, 50, 46, 47, 45, 50, 48, 43,
                    47, 45, 44, 48, 50, 49, 51, 45, 46, 47, 45, 49, 51, 48, 46, 45, 49, 50, 47, 48,
                  ],
                },
              ]}
          />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Resource Usage Breakdown"
              chartData={[
                { label: 'Water (L)', value: waterUsage[waterUsage.length - 1] },
                { label: 'Energy (kWh)', value: energyConsumption[energyConsumption.length - 1] },
                { label: 'Gas (m³)', value: gasUsage[gasUsage.length - 1] },
              ]}
              chartColors={[
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

/*
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
              chartData={[
                {
                  name: 'Bijli',
                  type: 'line',
                  fill: 'solid',
                  data: [
                    44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 38, 48, 60, 52, 43, 51, 43, 60, 53,
                    45, 44, 38, 48, 51, 47, 56, 45, 41, 47, 56, 52, 43, 51, 48, 43, 54, 42, 50, 47,
                    48, 52, 49, 46, 48, 44, 52, 47, 48, 55, 45, 49, 53, 50, 51, 44, 51, 49, 55, 47,
                    42, 45, 50, 43, 46, 48, 53, 51, 44, 52, 49, 48, 52, 43, 54, 47, 55, 50, 46, 42,
                    50, 47, 53, 50, 46, 55, 44, 51, 45, 52, 49, 51, 44, 47, 55, 46, 49, 50, 48, 45,
                  ],
                },
                {
                  name: 'Paani',
                  type: 'area',
                  fill: 'gradient',
                  data: [
                    30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 40, 41, 44, 50, 45, 43, 48, 52, 51,
                    45, 40, 35, 42, 50, 47, 42, 43, 47, 46, 49, 48, 45, 51, 46, 47, 50, 46, 52, 48,
                    44, 46, 49, 47, 48, 46, 51, 44, 50, 47, 52, 50, 45, 42, 45, 47, 46, 42, 45, 43,
                    50, 48, 42, 44, 47, 51, 50, 49, 47, 45, 42, 44, 51, 50, 46, 47, 45, 50, 48, 43,
                    47, 45, 44, 48, 50, 49, 51, 45, 46, 47, 45, 49, 51, 48, 46, 45, 49, 50, 47, 48,
                  ],
                },
              ]}
*/