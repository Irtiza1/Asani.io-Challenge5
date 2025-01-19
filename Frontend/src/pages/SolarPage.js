import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography, CircularProgress, Stack, Button } from '@mui/material';
import Iconify from '../components/iconify/Iconify';

const SolarCircuit = () => {
  return (
    <Box sx={{ px: 4, pb: 6, mt: -2 }}> {/* Increased padding and adjusted margin */}
  <Stack
    alignItems="center"
    spacing={2}
    sx={{ pt: 8, borderRadius: 4, position: 'relative' }} // Increased padding and border radius
  >
    <Box sx={{ position: 'relative', width: 150, top: 0 }}> {/* Increased width */}
      <Iconify icon="material-symbols:question-mark" width={150} height={150} /> {/* Larger icon */}
    </Box>

    <Box sx={{ textAlign: 'center' }}>
      <Typography gutterBottom variant="h4"> {/* Increased typography variant */}
        Confused?
      </Typography>
    </Box>

    <Button
      href="https://material-ui.com/store/items/minimal-dashboard/"
      target="_blank"
      variant="contained"
      size="large" // Changed button size
      sx={{ fontSize: '1.25rem', px: 4, py: 2 }} // Larger font and padding
    >
      Customer Support
    </Button>
  </Stack>
</Box>

  );
};

export default SolarCircuit;  