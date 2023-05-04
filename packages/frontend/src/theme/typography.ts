import { theme as chakraTheme } from '@chakra-ui/react'

// Yep, Talking about fonts, we are so greedy 😁
const fonts = {
  ...chakraTheme.fonts,
  body: `Poppins,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  heading: `"Montserrat",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
}

const fontWeights = {
  normal: 300,
  medium: 500,
  bold: 700,
  extraBold: 900,
}

const fontSizes = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '18px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '28px',
  '4xl': '36px',
  '5xl': '48px',
  '6xl': '64px',
}

export const Typography = { fonts, fontWeights, fontSizes }
