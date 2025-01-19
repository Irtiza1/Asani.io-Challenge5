import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography, CircularProgress, Stack, Button } from '@mui/material';
import Iconify from '../components/iconify/Iconify';

const SolarCircuit = () => {
  return (
    <Box sx={{ px: 2.5, pb: 3, mt: -4 }}>
  <Stack alignItems="center" spacing={1} sx={{ pt: 5, borderRadius: 2, position: 'relative' }}>
    <Box sx={{ position: 'relative', width: 100, top: 0 }}>
      <Iconify icon="material-symbols:question-mark" width={100} height={100} />
    </Box>

    <Box sx={{ textAlign: 'center' }}>
      <Typography gutterBottom variant="h6">
        Confused?
      </Typography>
    </Box>

    <Button href="https://material-ui.com/store/items/minimal-dashboard/" target="_blank" variant="contained">
      Customer Support
    </Button>
  </Stack>
</Box>
  );
};

export default SolarCircuit;  