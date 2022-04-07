/** @jsxImportSource theme-ui */
import styled from '@emotion/styled'
import React, { useState } from 'react'
import { Image, Button, Box, useThemeUI, Theme, Container } from 'theme-ui'

const CarContainer = styled.div<{ theme: Theme }>`
  max-width: 768px;
  color: ${(props) => props.theme?.colors?.primary};
  font-family: ${(props) => props.theme?.fonts?.[1]};
`

function CarShop() {
  const [boughtCar, setBoughtCar] = useState(false)
  const { theme } = useThemeUI()
  const handleBuyCar = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setBoughtCar(true)
  }

  return (
    <CarContainer theme={theme} as={Container}>
      {boughtCar ? (
        <Box p={3} sx={{ textAlign: 'center', mt: '20vw' }}>
          <h1>You've bought a car. Congratulations Stevie Wonder</h1>
        </Box>
      ) : (
        <Box p={3} sx={{ border: '1px solid lightgray', mt: '2vh' }}>
          <h1>BMW X1</h1>
          <Image src="/bmw-x1.jpeg" alt="BMW X1" />
          <div>
            <Button onClick={handleBuyCar}>Buy</Button>
          </div>
        </Box>
      )}
    </CarContainer>
  )
}

export default CarShop
