import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Iconify from '../components/iconify/Iconify';

const SolarCircuit = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        padding: 4,
        backgroundColor: 'background.default',
        borderRadius: 2,
        boxShadow: (theme) => `0px 8px 16px ${theme.palette.divider}`,
      }}
    >
      {/* Explicitly Set Icon Size */}
      <Iconify
        icon="mdi:crown"
        sx={{
          width: 200, // Explicit width
          height: 200, // Explicit height
          color: (theme) => theme.palette.primary.main,
          marginBottom: 3,
        }}
      />

      {/* Title */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: 'bold',
          color: 'text.primary',
          marginBottom: 1,
        }}
      >
        Premium Feature
      </Typography>

      {/* Description */}
      <Typography
        variant="body1"
        sx={{
          marginBottom: 4,
          color: 'text.secondary',
          maxWidth: 600,
        }}
      >
        Unlock this premium feature to gain exclusive insights and advanced tools 
        for managing your solar energy systems efficiently.
      </Typography>

      {/* Call-to-Action Button */}
      <Button
        variant="contained"
        size="large"
        sx={{
          textTransform: 'uppercase',
          fontWeight: 'bold',
          paddingX: 4,
          borderRadius: 25,
        }}
        onClick={() => {
          // Handle premium upgrade logic
          alert('Upgrade to Premium!');
        }}
      >
        Upgrade Now
      </Button>
    </Box>
  );
};

export default SolarCircuit;
