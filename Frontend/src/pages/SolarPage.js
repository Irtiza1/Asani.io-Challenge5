import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography, CircularProgress } from '@mui/material';

const useStyles = makeStyles({
  circuitContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '20px',
  },
  component: {
    position: 'relative',
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pv: {
    backgroundColor: 'yellow',
  },
  load: {
    backgroundColor: 'blue',
  },
  grid: {
    backgroundColor: 'purple',
  },
  battery: {
    backgroundColor: 'green',
  },
  arrow: {
    position: 'absolute',
    width: 0,
    height: 0,
    borderLeft: '20px solid transparent',
    borderRight: '20px solid transparent',
    borderTop: '20px solid black',
  },
  pvToLoad: {
    top: 40,
    left: 80,
    transform: 'rotate(45deg)',
  },
  // Add other arrow styles similarly
});

const SolarCircuit = () => {
  const classes = useStyles();
    const [energyFlow, setEnergyFlow] = useState({
      pvToLoad: false,
      pvToGrid: false,
      pvToBattery: false,
      gridToLoad: false,
      batteryToLoad: false,
    });
  
    // Simulate energy flow changes (replace with actual data source)
    useEffect(() => {
      const intervalId = setInterval(() => {
        const newFlow = { ...energyFlow };
        // Randomly change energy flow directions
        newFlow.pvToLoad = Math.random() > 0.5;
        newFlow.pvToGrid = Math.random() > 0.7;
        newFlow.pvToBattery = Math.random() > 0.6;
        newFlow.gridToLoad = Math.random() > 0.8;
        newFlow.batteryToLoad = Math.random() > 0.4;
        setEnergyFlow(newFlow);
      }, 2000); // Update every 2 seconds
  
      return () => clearInterval(intervalId);
    }, []);
  

  return (
    <Box className={classes.circuitContainer}>
      <Box className={classes.component}>
        <Box className={`${classes.circle} ${classes.pv}`}>
          <Typography variant="h6">PV</Typography>
        </Box>
        {energyFlow.pvToLoad && <Box className={`${classes.arrow} ${classes.pvToLoad}`} />}
        {energyFlow.pvToGrid && <Box className={`${classes.arrow} ${classes.pvToGrid}`} />}
        {energyFlow.pvToBattery && <Box className={`${classes.arrow} ${classes.pvToBattery}`} />}
      </Box>

      {/* Other components with similar structure */}

    </Box>
  );
};

export default SolarCircuit;  