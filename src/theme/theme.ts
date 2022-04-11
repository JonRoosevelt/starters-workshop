import type { ColorMode, Theme, TLengthStyledSystem } from 'theme-ui'
import { buttons, colors, fonts } from './bmw'
import * as CSS from 'csstype'

export interface BMWUITheme<TLength = TLengthStyledSystem>
  extends Omit<
    Theme,
    'fonts' | 'lineHeights' | 'letterSpacings' | 'shadows' | 'fontWeights'
  > {
  fonts?: {
    base?: CSS.Property.FontFamily
    body?: CSS.Property.FontFamily
    heading?: CSS.Property.FontFamily
    monospace?: CSS.Property.FontFamily
  }
  colors?: ColorMode
  modes?: {
    dark?: ColorMode
    light?: ColorMode
  }
}
interface UITheme {
  bmw: BMWUITheme
}

export const theme: UITheme = {
  bmw: {
    fonts,
    colors,
    buttons,
  },
}
