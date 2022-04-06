import { ThemeProvider } from '@emotion/react'
import CarShop from './car-shop/CarShop'
import { theme } from './theme/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CarShop />
    </ThemeProvider>
  )
}

export default App
