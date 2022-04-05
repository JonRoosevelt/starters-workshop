import React, { useState } from "react";

function CarShop() {
    const [boughtCar, setBoughtCar] = useState(false);

    const handleBuyCar = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        setBoughtCar(true);
    }

    return (
        <div className="CarShopPage">
            <section>
                {boughtCar
                    ? <h1>You've bought a car. Congratulations Stevie Wonder</h1>
                    : <>
                        <h1>BMW X1</h1>
                        <img src='/bmw-x1.jpeg' alt="BMW X1" />
                        <div><button onClick={handleBuyCar}>Buy</button>
                        </div>
                    </>
                }
            </section>
        </div>
    )
}

export default CarShop;