import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: 'ivypresto-display, serif',
    body: 'Neue Haas Grotesk Display Pro, Helvetica Neue, sans-serif, -apple-system',
  },
  colors: {
    blue: {
      50: '#e3efff',
      100: '#bbd0f9',
      200: '#90b0ef',
      300: '#6691e6',
      400: '#3c71dd',
      500: '#2258c3',
      600: '#184499',
      700: '#0f316f',
      800: '#041d45',
      900: '#000a1d',
    },
    brand: {
      50: '#ffe7e0',
      100: '#fec2b5',
      200: '#f79f87',
      300: '#f37e59',
      400: '#ee4d2a',
      500: '#d52611',
      600: '#a6120c',
      700: '#78080b',
      800: '#490208',
      900: '#1f0009',
    },
  },
  styles: {
    global: {
      '#__next': {
        height: '100%',
      },
      html: {
        height: '100%',
      },
      body: {
        height: '100%',
      },
      a: {
        color: '#0070f3',
        textDecoration: 'none',
      },
      'a:hover': {
        textDecoration: 'underline',
      },
      img: {
        maxWidth: '100%',
        display: 'block',
      },
    },
  },
})

export default theme
