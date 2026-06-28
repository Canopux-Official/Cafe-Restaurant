import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2D6A4F',        // Sage green — fresh, natural, globally recognized café color
      light: '#52B788',
      dark: '#1B4332',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#E9C46A',        // Golden amber — warm highlight without the brown overload
      light: '#F4D58D',
      dark: '#C9A227',
      contrastText: '#1C1C1C',
    },
    background: {
      default: '#F7F5F2',     // Soft off-white — easy on the eyes, clean and airy
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1C1C1C',     // Near-black for strong readability
      secondary: '#5C6B73',   // Cool slate gray for supporting text
    },
    divider: '#E0DDD9',
    error: {
      main: '#D62839',
    },
    success: {
      main: '#2D6A4F',
    },
    info: {
      main: '#457B9D',
    },
  },

  shape: {
    borderRadius: 10,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: '8px',
          padding: '10px 24px',
          transition: 'all 0.2s ease',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #2D6A4F 0%, #52B788 100%)',
          boxShadow: '0 2px 8px rgba(45, 106, 79, 0.30)',
          '&:hover': {
            background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)',
            boxShadow: '0 4px 16px rgba(45, 106, 79, 0.40)',
            transform: 'translateY(-1px)',
          },
          '&:active': {
            transform: 'translateY(0)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #C9A227 0%, #E9C46A 100%)',
          boxShadow: '0 2px 8px rgba(201, 162, 39, 0.30)',
          '&:hover': {
            background: 'linear-gradient(135deg, #A07820 0%, #C9A227 100%)',
            boxShadow: '0 4px 16px rgba(201, 162, 39, 0.40)',
            transform: 'translateY(-1px)',
          },
          '&:active': {
            transform: 'translateY(0)',
          },
        },
        outlinedPrimary: {
          borderColor: '#2D6A4F',
          color: '#2D6A4F',
          '&:hover': {
            backgroundColor: 'rgba(45, 106, 79, 0.06)',
            borderColor: '#1B4332',
          },
        },
        text: {
          '&:hover': {
            backgroundColor: 'rgba(45, 106, 79, 0.06)',
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 12px rgba(28, 28, 28, 0.07)',
          border: '1px solid #E0DDD9',
          transition: 'box-shadow 0.25s ease, transform 0.25s ease',
          '&:hover': {
            boxShadow: '0 8px 32px rgba(28, 28, 28, 0.13)',
            transform: 'translateY(-3px)',
          },
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          color: '#1C1C1C',
          boxShadow: '0 1px 0 #E0DDD9',
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '6px',
          fontWeight: 600,
          fontSize: '0.78rem',
        },
        colorPrimary: {
          backgroundColor: 'rgba(45, 106, 79, 0.10)',
          color: '#1B4332',
        },
        colorSecondary: {
          backgroundColor: 'rgba(233, 196, 106, 0.20)',
          color: '#7A5C00',
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            backgroundColor: '#FFFFFF',
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#52B788',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#2D6A4F',
              borderWidth: '2px',
            },
          },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
        elevation1: {
          boxShadow: '0 2px 12px rgba(28, 28, 28, 0.07)',
        },
        elevation2: {
          boxShadow: '0 4px 20px rgba(28, 28, 28, 0.10)',
        },
        elevation3: {
          boxShadow: '0 8px 32px rgba(28, 28, 28, 0.13)',
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#E0DDD9',
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '0.95rem',
          '&.Mui-selected': {
            color: '#2D6A4F',
          },
        },
      },
    },

    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: '#2D6A4F',
          height: '3px',
          borderRadius: '3px 3px 0 0',
        },
      },
    },

    MuiBadge: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#E9C46A',
          color: '#1C1C1C',
        },
      },
    },

    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          backgroundColor: 'rgba(45, 106, 79, 0.12)',
        },
        bar: {
          borderRadius: '4px',
          backgroundColor: '#2D6A4F',
        },
      },
    },

    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          '&.Mui-checked': {
            color: '#2D6A4F',
            '& + .MuiSwitch-track': {
              backgroundColor: '#52B788',
            },
          },
        },
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#1C1C1C',
          fontSize: '0.78rem',
          borderRadius: '6px',
          padding: '6px 10px',
        },
        arrow: {
          color: '#1C1C1C',
        },
      },
    },
  },
});

export default theme;