import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Fira Sans',
      'sans-serif', // Fallback font
    ].join(','),
    h1: {
      fontWeight: 900,
      '@media (max-width:600px)': {
        fontSize: '3.5rem', // Small screens
      },
      '@media (min-width:600px)': {
        fontSize: '3.7rem', // Medium screens
      },
      '@media (min-width:900px)': {
        fontSize: '4rem', // Large screens
      },
      '@media (min-width:1200px)': {
        fontSize: '4.2rem', // Extra large screens
      },
    },
    h2: {
      fontWeight: 900,
      '@media (max-width:600px)': {
        fontSize: '3rem', // Small screens
      },
      '@media (min-width:600px)': {
        fontSize: '3.2rem', // Medium screens
      },
      '@media (min-width:900px)': {
        fontSize: '3.7rem', // Large screens
      },
      '@media (min-width:1200px)': {
        fontSize: '4rem', // Extra large screens
      },
    },
    h5: {
      fontWeight: 400,
      '@media (max-width:600px)': { // Small screens
        fontSize: '1.4rem',
      },
      '@media (min-width:600px)': { // Medium screens
        fontSize: '1.6rem',
      },
      '@media (min-width:900px)': { // Large screens
        fontSize: '1.6rem',
      },
      '@media (min-width:1200px)': { // Extra large screens
        fontSize: '1.8rem',
      },
    },
    h6: {
      fontWeight: 200,
      fontSize: '1rem',
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#024f58',
    },
    secondary: {
      main: '#a74325',
    },
    tertiary: {
      main: '#c59128',
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

export default theme;
