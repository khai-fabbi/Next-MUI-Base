import type { ThemeOptions } from '@mui/material'

// Custom theme: Colors
const themeColors = {
  color: {
    main: `#1652f0`,
    bg: '#fcfcfc',
    textLight: '#fff',
  },
} as const

const lightThemeOptions: ThemeOptions = {
  ...themeColors,
  typography: {
    fontFamily: ['Epilogue', 'sans-serif'].join(','),
    h1: {
      fontSize: '2.5rem',
      lineHeight: '3.75rem',
    },
    h2: {
      fontSize: '1.5625rem',
      lineHeight: '2.375rem',
    },
    h3: {
      fontSize: '1.375rem',
      lineHeight: '2rem',
    },
    h4: {
      fontSize: '1.25rem',
      lineHeight: '1.875rem',
    },
  },
  palette: {
    // primary: {
    //   main: '#1DC071',
    // },
    secondary: {
      main: '#6F49FD',
    },
    error: {
      main: '#EB5757',
    },
    background: {
      default: '#fafafa',
    },
  },
}

export default lightThemeOptions
