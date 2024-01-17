import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Fira Sans',
      'sans-serif', // Fallback font
    ].join(','),
    h1: {
      fontWeight: 900,
      fontSize: '3rem', // Default
      '@media (max-width:600px)': {
        fontSize: '2rem', // Small screens
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
    h2: {
      fontWeight: 900,
      fontSize: '2.5rem', // Large screens (1280px)
      '@media (max-width:600px)': {
        fontSize: '2rem', // Extra Small screens (less than 600px)
      },
      '@media (min-width:600px)': {
        fontSize: '2.5rem', // Medium screens (900px)
      },
      '@media (min-width:900px)': {
        fontSize: '3.7rem', // Large screens (1200px and above)
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
