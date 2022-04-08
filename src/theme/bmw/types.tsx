export interface ColorMode {
  text: string
  background: string
  primary: string
}

export interface BMWTheme {
  modes: {
    dark: ColorMode
    light: ColorMode
  }
}
