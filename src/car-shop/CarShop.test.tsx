import { fireEvent, render, screen } from "@testing-library/react";
import CarShop from "./CarShop";

describe("Buy car", () => {
  test("should render a car name", () => {
    render(<CarShop />);

    const carName = screen.getByText("BMW X1");
    expect(carName).toBeInTheDocument();
  });

  test("should render an image of a car", () => {
    render(<CarShop />);

    const carImage = screen.getByAltText("BMW X1");
    expect(carImage).toBeInTheDocument();
  });

  test("should render a button to buy the car", () => {
    render(<CarShop />);
    const buyButton = screen.getByRole("button", { name: "Buy" });
    expect(buyButton).toBeInTheDocument();
  });

  test("should return bought car message", () => {
    // Arrange
    render(<CarShop />);

    // Act
    const buyButton = screen.getByRole("button", { name: "Buy" });
    fireEvent.click(buyButton);

    // Assert
    const boughtCarMessage = screen.getByText(
      /You've bought a car. Congratulations Stevie Wonder/i
    );
    expect(boughtCarMessage).toBeInTheDocument();
  });
});
