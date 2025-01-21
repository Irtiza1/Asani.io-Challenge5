
import { Helmet } from 'react-helmet-async';
import { useTheme } from '@mui/material/styles';
import { Grid, Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { AppWebsiteVisits, AppCurrentVisits, AppWidgetSummary } from '../sections/@dashboard/app';
import { useNotification } from '../utils/Notifcation';
// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();

  // Live data simulation
  const [voltage, setVoltage] = useState(100);
  const [current, setCurrent] = useState(100);
  const [energyConsumption, setEnergyConsumption] = useState(100);
  const [power, setPower] = useState(50);
  const [currentConsumption, setCurrentConsumption] = useState([]);
  const [averageConsumption, setAverageConsumption] = useState([]);
  const [applianceUsage, setApplianceUsage] = useState([
    { label: 'Air Conditioners', value: 100 },
    { label: 'Fans', value: 60 },
    { label: 'Refrigerator', value: 80 },
    { label: 'Light bulb', value: 50 },
  ]);
  const { notification, setNotification, updateNotification } = useNotification();
  // Define thresholds
  const voltageThreshold = 100;
  const currentThreshold = 100;
  const energyConsumptionThreshold = 95;
  const powerThreshold = 45;

  // Simulate data update
  useEffect(() => {
    const interval = setInterval(() => {
      // Update graph data
      setCurrentConsumption((prevData) => {
        return prevData.length === 0
          ? Array.from({ length: 100 }, () => Math.floor(Math.random() * 100))
          : prevData.map(() => Math.floor(Math.random() * 100));
      });
      setAverageConsumption((prevData) => {
        return prevData.length === 0
          ? Array.from({ length: 100 }, () => Math.floor(Math.random() * 100))
          : prevData.map(() => Math.floor(Math.random() * 100));
      });

      // Update appliance usage with small fluctuations
      setApplianceUsage((prevState) => {
        return prevState.map((item) => ({
          ...item,
          value: item.value + (Math.random() > 0.5 ? 1 : -1), // Slight fluctuation
        }));
      });

      // Update metrics with small delta (minimal change)
      setVoltage((prevVoltage) => prevVoltage + Math.floor(Math.random() * 3) - 1); // Minimal fluctuation in voltage
      setCurrent((prevCurrent) => prevCurrent + Math.floor(Math.random() * 3) - 1); // Minimal fluctuation in current
      setEnergyConsumption((prevEnergy) => prevEnergy + Math.floor(Math.random() * 5) - 2); // Minimal fluctuation in energy consumption
      setPower((prevPower) => prevPower + Math.floor(Math.random() * 3) - 1); // Minimal fluctuation in power

      // Check thresholds for notification
      if (voltage > voltageThreshold) {
        updateNotification('Bijli Update', `Voltage is too high! Current: ${voltage} V`, 'bijli');
      }
      if (current > currentThreshold) {
        updateNotification('Bijli Update',`Warning: Current is too high! Current: ${current} A`,'bijli');
      }
      if (energyConsumption > energyConsumptionThreshold) {
        updateNotification('Bijli Update',`Energy consumption is too high! Current: ${energyConsumption} units`,'bijli');
      }
      if (power > powerThreshold) {
        updateNotification('Bijli Update',`Warning: Power is too high! Current: ${power} P`,'bijli');
      }

    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [voltage, current, energyConsumption, power]);

  return (
    <>
      <Helmet>
      <title> Bijli | Sahulat.io </title>
      </Helmet>

      <Container maxWidth="xl">
        <Grid container spacing={3}>
          {/* Voltage */}
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Voltage" total={`${voltage} V`} icon={'ion:water-outline'} />
          </Grid>

          {/* Current */}
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Current" total={`${current} A`} color="info" icon={'healthicons:running-water-outline-24px'} />
          </Grid>

          {/* Energy Consumption */}
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Energy Consumption" total={`${energyConsumption} units`} color="warning" icon={'ant-design:thunderbolt-outlined'} />
          </Grid>

          {/* Power */}
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Power" total={`${power} P`} color="error" icon={'mdi:gas'} />
          </Grid>

          {/* Energy Consumption Graph */}
          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Energy Consumption"
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
                  name: 'Current Consumption (Units)',
                  type: 'area',
                  fill: 'gradient',
                  data: currentConsumption,
                },
                {
                  name: 'Average Consumption (Units)',
                  type: 'line',
                  fill: 'solid',
                  data: averageConsumption,
                },
              ]}
            />
          </Grid>

          {/* Appliance Usage Graph */}
          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Appliance Usage"
              chartData={applianceUsage}
              chartColors={[
                theme.palette.primary.main,
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
