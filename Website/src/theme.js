import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Fira Sans',
      'sans-serif', // Fallback font
    ].join(','),
    h1: {
      fontWeight: 700,
      fontSize: '3rem', // Default
      '@media (max-width:600px)': {
        fontSize: '1.5rem', // Small screens
      },
      '@media (min-width:600px)': {
        fontSize: '2.5rem', // Medium screens
      },
      '@media (min-width:900px)': {
        fontSize: '3rem', // Large screens
      },
      '@media (min-width:1200px)': {
        fontSize: '4rem', // Extra large screens
      },
    },
    h5: {
      fontWeight: 400,
      // Default font size
      fontSize: '1.5rem',
      // Responsive breakpoints
      '@media (max-width:600px)': { // xs: small screens
        fontSize: '1rem',
      },
      '@media (min-width:600px)': { // sm: medium screens
        fontSize: '1.2rem',
      },
      '@media (min-width:900px)': { // md: large screens
        fontSize: '1.4rem',
      },
      '@media (min-width:1200px)': { // lg: larger screens
        fontSize: '1.5rem',
      },
      // Add more breakpoints if needed
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
