import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    xl: '1440px',
  },
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Inter',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: { padding: '24px 64px' },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          background: '#F7F7F7',
          borderRadius: '10px',
          '& fieldset': {
            border: 'none',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: '145px',
          height: '56px',
          borderRadius: '28px',
          padding: '16px, 32px, 16px, 32px',
          textTransform: 'none',
          fontSize: '16px',
          fontWeight: 500,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: '#E44848',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontSize: '16px',
          fontWeight: 500,
          color: '#475467',
          '&.Mui-selected': {
            color: '#E44848',
          },
        },
      },
    },
    //
  },
});

export default theme;
