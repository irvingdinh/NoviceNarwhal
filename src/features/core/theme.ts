import { createTheme } from '@shopify/restyle'

const theme = createTheme({
  colors: {},
  spacing: {}
})

export type Theme = typeof theme

export default theme
