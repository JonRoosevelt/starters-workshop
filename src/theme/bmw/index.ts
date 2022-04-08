export const fonts = [
  'system-ui, sans-serif',
  '"Avenir Next", sans-serif',
  'Menlo, monospace',
]
export const colors = {
  text: '#000',
  background: '#fff',
  primary: '#000',
  secondary: '#fffacd',
  modes: {
    dark: {
      text: '#fff',
      background: '#000',
      primary: '#fffacd',
      secondary: '#000',
    },
    light: {
      text: '#000',
      background: '#fffacd',
      primary: '#fff',
      secondary: '#fffacd',
    },
  },
}

export const buttons = {
  primary: {
    color: 'background',
    bg: 'primary',
    '&:hover': {
      bg: 'text',
    },
  },
  secondary: {
    color: 'background',
    bg: 'secondary',
  },
}