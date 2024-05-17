import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
  },
  components: {
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
    //
  },
});

export default theme;
