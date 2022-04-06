/** @jsxImportSource theme-ui */

import React, { useState } from 'react'
import { Image, Button, Container, Heading, Box, Card } from 'theme-ui'

function CarShop() {
  const [boughtCar, setBoughtCar] = useState(false)

  const handleBuyCar = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setBoughtCar(true)
  }

  return (
    <Container
      sx={{
        maxWidth: 768,
        color: 'primary',
        fontFamily: 'heading',
      }}
      className="CarShopPage"
    >
      {boughtCar ? (
        <Card
          sx={{ position: 'absolute', margin: 'auto', left: '30%', top: '50%' }}
        >
          <Heading>You've bought a car. Congratulations Stevie Wonder</Heading>
        </Card>
      ) : (
        <Box p={3} sx={{ border: '1px solid lightgray', mt: '2vh' }}>
          <Heading>BMW X1</Heading>
          <Image src="/bmw-x1.jpeg" alt="BMW X1" />
          <div>
            <Button onClick={handleBuyCar}>Buy</Button>
          </div>
        </Box>
      )}
    </Container>
  )
}

export default CarShop
