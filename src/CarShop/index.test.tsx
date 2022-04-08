import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from 'theme-ui'
import * as themeUi from 'theme-ui'
import CarShop from '.'
import { theme } from '../theme/theme'

jest.mock('theme-ui', () => ({
  __esModule: true,
  // @ts-ignore
  ...jest.requireActual('theme-ui'),
}))

const renderCarShop = () =>
  render(
    <ThemeProvider theme={theme.bmw}>
      <CarShop />
    </ThemeProvider>
  )
describe('Buy car', () => {
  beforeEach(() => {
    renderCarShop()
  })
  test('should render a car name', () => {
    const carName = screen.getByText('BMW X1')
    expect(carName).toBeInTheDocument()
  })

  test('should render an image of a car', () => {
    const carImage = screen.getByAltText('BMW X1')
    expect(carImage).toBeInTheDocument()
  })

  test('should render a button to buy the car', () => {
    const buyButton = screen.getByRole('button', { name: 'Buy' })
    expect(buyButton).toBeInTheDocument()
  })

  test('should return bought car message', () => {
    const buyButton = screen.getByRole('button', { name: 'Buy' })
    fireEvent.click(buyButton)

    // Assert
    const boughtCarMessage = screen.getByText(
      /You've bought a car. Congratulations Stevie Wonder/i
    )
    expect(boughtCarMessage).toBeInTheDocument()
  })
})
describe('Theme', () => {
  beforeEach(() => {
    jest
      .spyOn(themeUi, 'useColorMode')
      .mockImplementation(() => ['default', jest.fn(() => 'dark')])
    renderCarShop()
  })
  test('should render change theme button', () => {
    const themeChangeButton = screen.getByRole('button', {
      name: /Change theme/i,
    })
    expect(themeChangeButton).toBeInTheDocument()
  })
  test('button should change color theme', () => {
    const themeChangeButton = screen.getByRole('button', {
      name: /Change theme/i,
    })
    fireEvent.click(themeChangeButton)
    expect(themeUi.useColorMode).toHaveBeenCalled()
  })
})
