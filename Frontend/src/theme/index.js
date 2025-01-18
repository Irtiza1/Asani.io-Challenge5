import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CssBaseline, IconButton } from '@mui/material';
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
import { Sun, Moon } from 'lucide-react';
import shadows from './shadows';
import typography from './typography';
import GlobalStyles from './globalStyles';
import customShadows from './customShadows';
import componentsOverride from './overrides';
import { useDarkMode } from './darkMode';
// Define different color palettes for each route
// src/theme/palettes.js
export const getRoutePalettes = (mode) => ({
  '/dashboard/app': {
    primary: {
      // Dashboard - Professional Blue
      main: mode === 'dark' ? '#4d7cfe' : '#2563eb',
      light: mode === 'dark' ? '#6b93ff' : '#60a5fa',
      dark: mode === 'dark' ? '#3868e0' : '#1e40af',
    },
    background: {
      default: mode === 'dark' ? '#0f172a' : '#f8fafc',
      paper: mode === 'dark' ? '#1e293b' : '#ffffff',
    },
    section: {
      primary: mode === 'dark' ? '#162236' : '#f1f5f9',
      secondary: mode === 'dark' ? '#1e293b' : '#f8fafc',
    }
  },
  '/dashboard/paani': {
    primary: {
      // Water - Azure Blue
      main: mode === 'dark' ? '#0ea5e9' : '#0284c7',      // Bright blue in dark, slightly deeper in light
      light: mode === 'dark' ? '#38bdf8' : '#0ea5e9',     // Light water blue
      dark: mode === 'dark' ? '#0369a1' : '#0c4a6e',      // Deep water blue
    },
    background: {
      default: mode === 'dark' ? '#082f49' : '#f0f9ff',   // Deep water background in dark, light azure in light
      paper: mode === 'dark' ? '#164e63' : '#ffffff',
    },
    section: {
      primary: mode === 'dark' ? '#164e63' : '#e0f2fe',   // Section colors maintain water theme
      secondary: mode === 'dark' ? '#155e75' : '#f0f9ff',
    }
  },
  '/dashboard/bijli': {
    primary: {
      // Electricity - Energetic Yellow
      main: mode === 'dark' ? '#facc15' : '#eab308',      // Bright yellow in dark, gold in light
      light: mode === 'dark' ? '#fde047' : '#facc15',     // Electric yellow
      dark: mode === 'dark' ? '#ca8a04' : '#a16207',      // Deep gold
    },
    background: {
      default: mode === 'dark' ? '#1c1917' : '#fefce8',   // Dark charcoal in dark, light yellow in light
      paper: mode === 'dark' ? '#292524' : '#ffffff',
    },
    section: {
      primary: mode === 'dark' ? '#292524' : '#fef9c3',   // Section colors complement electricity theme
      secondary: mode === 'dark' ? '#1c1917' : '#fefce8',
    }
  },
  '/dashboard/gas': {
    primary: {
      // Gas - Flame Red
      main: mode === 'dark' ? '#f97316' : '#ea580c',      // Bright orange-red in dark, deep orange in light
      light: mode === 'dark' ? '#fb923c' : '#f97316',     // Flame orange
      dark: mode === 'dark' ? '#ea580c' : '#c2410c',      // Deep flame red
    },
    background: {
      default: mode === 'dark' ? '#27272a' : '#fff7ed',   // Dark background in dark, warm light in light
      paper: mode === 'dark' ? '#3f3f46' : '#ffffff',
    },
    section: {
      primary: mode === 'dark' ? '#3f3f46' : '#fed7aa',   // Section colors match flame theme
      secondary: mode === 'dark' ? '#52525b' : '#fff7ed',
    }
  }
});

// Base palette remains mostly the same but with adjusted accent colors
export const getBasePalette = (routePalette, mode) => ({
  mode,
  ...routePalette,
  secondary: {
    main: mode === 'dark' ? '#94a3b8' : '#64748b',
    light: mode === 'dark' ? '#cbd5e1' : '#94a3b8',
    dark: mode === 'dark' ? '#64748b' : '#475569',
  },
  // ... rest of base palette remains the same
  // Adding specific utility accent colors for consistent theming
  utilities: {
    water: {
      light: '#38bdf8',
      main: '#0ea5e9',
      dark: '#0369a1',
    },
    electricity: {
      light: '#fde047',
      main: '#facc15',
      dark: '#ca8a04',
    },
    gas: {
      light: '#fb923c',
      main: '#f97316',
      dark: '#ea580c',
    }
  }
});

// Dark Mode Toggle Button Component
const DarkModeToggle = ({ mode, onToggle }) => (
  <IconButton
    onClick={onToggle}
    sx={{
      position: 'fixed',
      right: 20,
      top: 20,
      bgcolor: mode === 'dark' ? 'grey.800' : 'grey.100',
      color: mode === 'dark' ? 'grey.100' : 'grey.800',
      '&:hover': {
        bgcolor: mode === 'dark' ? 'grey.700' : 'grey.200',
      },
    }}
  >
    {mode === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
  </IconButton>
);

DarkModeToggle.propTypes = {
  mode: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default function ThemeProvider({ children }) {
  const { mode } = useDarkMode();
  const location = useLocation();
  
  const themeOptions = useMemo(() => {
    const routePalettes = getRoutePalettes(mode);
    const routePalette = routePalettes[location.pathname] || routePalettes['/dashboard/app'];
    
    return {
      palette: getBasePalette(routePalette, mode),
      shape: { borderRadius: 6 },
      typography,
      shadows: shadows(),
      customShadows: customShadows(),
    };
  }, [location.pathname, mode]);

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}