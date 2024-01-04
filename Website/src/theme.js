import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Fira Sans',
      'sans-serif', // Fallback font
    ].join(','),
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
