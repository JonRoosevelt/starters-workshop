import type { Theme } from 'theme-ui'
import { buttons, colors, fonts } from './bmw'

interface UITheme {
  bmw: Theme
}

export const theme: UITheme = {
  bmw: {
    fonts,
    colors,
    buttons,
  },
}
