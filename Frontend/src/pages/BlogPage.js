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


import { Helmet } from 'react-helmet-async';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import {
  AppWidgetSummary,
  AppWebsiteVisits,
  AppCurrentVisits,
} from '../sections/@dashboard/app';

export default function GasDashboardPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Gas Dashboard | Sustainability Platform </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Gas Usage Dashboard
        </Typography>

        <Grid container spacing={3}>
          {/* Gas Pressure Widget */}
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Average Gas Pressure"
              total={120} // Dummy pressure in PSI
              icon={'mdi:gas-cylinder'}
            />
          </Grid>

          {/* Gas Consumption Widget */}
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Daily Gas Consumption"
              total={245} // Dummy consumption in cubic meters
              color="info"
              icon={'mdi:chart-bar'}
            />
          </Grid>

          {/* Gas Pressure Chart */}
          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Gas Pressure Over Time"
              subheader="(Measured in PSI)"
              chartLabels={['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00']}
              chartData={[
                {
                  name: 'Gas Pressure',
                  type: 'line',
                  fill: 'solid',
                  data: [118, 120, 115, 123, 119, 117, 121],
                },
              ]}
            />
          </Grid>

          {/* Gas Consumption Chart */}
          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Gas Consumption by Appliance"
              chartData={[
                { label: 'Heating', value: 120 },
                { label: 'Cooking', value: 80 },
                { label: 'Water Heating', value: 45 },
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
