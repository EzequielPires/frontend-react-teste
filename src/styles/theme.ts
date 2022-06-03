import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    background: "#504563",
    backdrop: "rgba(255, 255, 255, 0.05)",
    primary: {
      "100": "#9342FF",
      "200": "#9F5BF9"
    },
    secondary: "#726789",
    gray: {
      "700": "#504563",
      "500": "#999999",
      "300": "#766e81",
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'background',
        color: '#EAE6EF'
      }
    }
  }
})