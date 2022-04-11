import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import React, { useState } from 'react'
import { Image, Button, Container, useColorMode } from 'theme-ui'
import { BMWUITheme } from '../theme/theme'

const CustomContainer = styled.div<{ theme: BMWUITheme }>`
  max-width: 768px;
  color: ${(props) => props.theme?.colors?.primary};
  font-family: ${(props) => props.theme?.fonts?.heading};
  margin-top: 5vh;
`

const Card = styled.div<{ theme: BMWUITheme }>`
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    width: 100%;
    max-width: container;
    margin-left: auto;
    margin-right: auto;
    max-width: 768px;
    color: ${(props) => props.theme?.colors?.primary};
    font-family: ${(props) => props.theme?.fonts?.heading};

    h1 {
      text-align: center
    }
}
`
const CustomCard = styled(Card)`
  h1 {
    margin-top: 20vh;
  }
`
const CarBox = styled.div<{ theme: BMWUITheme }>`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  padding: 16px;
  border: 1px solid lightgray;
  margin-top: 2vh;

  h1 {
    font-family: ${(props) => props.theme?.fonts?.heading};
  }
`

function CarShop() {
  const [boughtCar, setBoughtCar] = useState(false)
  const [colorMode, setColorMode] = useColorMode()
  const theme = useTheme()

  const handleBuyCar = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setBoughtCar(true)
  }

  const handleColorMode = () => {
    setColorMode(colorMode === 'default' ? 'dark' : 'default')
  }

  return (
    <>
      <CustomContainer theme={theme} as={Container}>
        <Button onClick={handleColorMode}>Change theme</Button>
        {boughtCar ? (
          <CustomCard theme={theme}>
            <h1>You've bought a car. Congratulations Stevie Wonder</h1>
          </CustomCard>
        ) : (
          <CarBox theme={theme}>
            <h1>BMW X1</h1>
            <Image src="/bmw-x1.jpeg" alt="BMW X1" />
            <div>
              <Button onClick={handleBuyCar}>Buy</Button>
            </div>
          </CarBox>
        )}
      </CustomContainer>
    </>
  )
}

export default CarShop
