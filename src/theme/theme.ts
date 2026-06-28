import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#4A2C2A',      // Deep espresso brown
      light: '#7A5C58',
      dark: '#2E1A18',
      contrastText: '#FFF8F0',
    },
    secondary: {
      main: '#C8943A',      // Warm caramel gold
      light: '#E8B96A',
      dark: '#9A6B1E',
      contrastText: '#1A0F00',
    },
    background: {
      default: '#FFF8F0',   // Warm cream
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2A1A14',
      secondary: '#6B4F3A',
    },
    error: {
      main: '#C62828',
    },
    success: {
      main: '#2E7D32',
    },
  },
  typography: {
    fontFamily: '"Lato", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 500,
    },
    h6: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 500,
    },
    body1: {
      lineHeight: 1.75,
    },
    body2: {
      lineHeight: 1.65,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          letterSpacing: '0.5px',
          borderRadius: '50px',
          padding: '10px 28px',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #4A2C2A 0%, #7A5C58 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #2E1A18 0%, #4A2C2A 100%)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #C8943A 0%, #E8B96A 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #9A6B1E 0%, #C8943A 100%)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 20px rgba(74, 44, 42, 0.10)',
          transition: 'box-shadow 0.3s ease, transform 0.3s ease',
          '&:hover': {
            boxShadow: '0 8px 40px rgba(74, 44, 42, 0.20)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 12px rgba(74, 44, 42, 0.15)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;
