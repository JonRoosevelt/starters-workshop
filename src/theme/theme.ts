import type { Theme } from 'theme-ui'
import { colors, fonts } from './bmw'

interface UITheme {
    bmw: Theme
}

export const theme: UITheme = {
    bmw: {
        fonts,
        colors
    }
}
