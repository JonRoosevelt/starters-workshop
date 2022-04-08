import styled from '@emotion/styled'
import React, { useState } from 'react'
import { Image, Button, Theme, Container, useColorMode } from 'theme-ui'

const CustomContainer = styled.div<{ theme: Theme }>`
  max-width: 768px;
  color: ${(props) => props.theme?.colors?.primary};
  font-family: ${(props) => props.theme?.fonts?.[1]};
  margin-top: 5vh;
`

const Card = styled.div<{ theme: Theme }>`
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    width: 100%;
    max-width: container;
    margin-left: auto;
    margin-right: auto;
    max-width: 768px;
    color: ${(props) => props.theme?.colors?.primary};
    font-family: ${(props) => props.theme?.fonts?.[1]};

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
const CarBox = styled.div<{ theme: Theme }>`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  padding: 16px;
  border: 1px solid lightgray;
  margin-top: 2vh;

  h1 {
    font-family: ${(props) => props.theme?.fonts?.[1]};
  }
`

function CarShop() {
  const [boughtCar, setBoughtCar] = useState(false)
  const [colorMode, setColorMode] = useColorMode()

  const handleBuyCar = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setBoughtCar(true)
  }

  const handleColorMode = (event: React.MouseEvent<HTMLElement>) => {
    setColorMode(colorMode === 'default' ? 'dark' : 'default')
  }

  return (
    <>
      <CustomContainer theme={colorMode} as={Container}>
        <Button onClick={handleColorMode}>Change theme</Button>
        {boughtCar ? (
          <CustomCard theme={colorMode}>
            <h1>You've bought a car. Congratulations Stevie Wonder</h1>
          </CustomCard>
        ) : (
          <CarBox theme={colorMode}>
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
