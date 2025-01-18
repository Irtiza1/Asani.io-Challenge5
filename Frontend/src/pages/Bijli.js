import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet>

      <Container maxWidth="xl">

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Voltage" total={`${100} V`} icon={'ion:water-outline'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Current" total={`${100} A`} color="info" icon={'healthicons:running-water-outline-24px'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Energy Consumption" total={`${100} units`} color="warning" icon={'ant-design:thunderbolt-outlined'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Power" total={`${50} P`} color="error" icon={'mdi:gas'} />
          </Grid>

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
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Appliance Usage"
              chartData={[
                { label: 'Air Conditioners', value: 100 },
                { label: 'Fans', value: 60 },
                { label: 'Refrigrator', value: 80 },
                { label: 'Light bulb', value: 50 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="Conversion Rates"
              subheader="(+43%) than last year"
              chartData={[
                { label: 'Italy', value: 400 },
                { label: 'Japan', value: 430 },
                { label: 'China', value: 448 },
                { label: 'Canada', value: 470 },
                { label: 'France', value: 540 },
                { label: 'Germany', value: 580 },
                { label: 'South Korea', value: 690 },
                { label: 'Netherlands', value: 1100 },
                { label: 'United States', value: 1200 },
                { label: 'United Kingdom', value: 1380 },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject
              title="Current Subject"
              chartLabels={['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math']}
              chartData={[
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ]}
              chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title="News Update"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: faker.name.jobTitle(),
                description: faker.name.jobTitle(),
                image: `/assets/images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
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
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite
              title="Traffic by Site"
              list={[
                {
                  name: 'FaceBook',
                  value: 323234,
                  icon: <Iconify icon={'eva:facebook-fill'} color="#1877F2" width={32} />,
                },
                {
                  name: 'Google',
                  value: 341212,
                  icon: <Iconify icon={'eva:google-fill'} color="#DF3E30" width={32} />,
                },
                {
                  name: 'Linkedin',
                  value: 411213,
                  icon: <Iconify icon={'eva:linkedin-fill'} color="#006097" width={32} />,
                },
                {
                  name: 'Twitter',
                  value: 443232,
                  icon: <Iconify icon={'eva:twitter-fill'} color="#1C9CEA" width={32} />,
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title="Tasks"
              list={[
                { id: '1', label: 'Create FireStone Logo' },
                { id: '2', label: 'Add SCSS and JS files if required' },
                { id: '3', label: 'Stakeholder Meeting' },
                { id: '4', label: 'Scoping & Estimations' },
                { id: '5', label: 'Sprint Showcase' },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
