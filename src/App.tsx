import { useState } from 'react'
import { Theme, ThemeProvider } from 'theme-ui'
import CarShop from './car-shop/CarShop'
import { theme } from './theme/theme'

function App() {
  const [AppTheme, setAppTheme] = useState<Theme>(theme['bmw'])
  return (
    <ThemeProvider theme={AppTheme}>
      <CarShop />
    </ThemeProvider>
  )
}

export default App
