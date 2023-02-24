import type { ThemeOptions } from '@mui/material'
import { lightGreen, red } from '@mui/material/colors'

// Create a theme instance.
const lightThemeOptions: ThemeOptions = {
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#4CAF93',
    },
    secondary: {
      main: lightGreen[200],
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fafafa',
    },
  },
}

export default lightThemeOptions
