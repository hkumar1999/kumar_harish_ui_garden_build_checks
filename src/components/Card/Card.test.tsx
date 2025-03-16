// Card.tests.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card";

// Import test image
import testImage from "../../assets/images/myImage.jpg"; //  Import image from assets folder

describe("Card Component", () => {
  test("renders the card and is visible", () => {
    render(<Card>Test Card</Card>);
    const cardElement = screen.getByText(/Test Card/i);
    expect(cardElement).toBeVisible();
  });

  test("renders with an image if imgSrc is provided", () => {
    render(<Card imgSrc={testImage}>Test Card</Card>);
    const imgElement = screen.getByRole("img");
    expect(imgElement).toBeVisible();
  });

  test("applies disabled styling correctly", () => {
    render(<Card disabled>Disabled Card</Card>);
    const cardElement = screen.getByText(/Disabled Card/i);
    expect(cardElement).toHaveStyle("background-color: #ccc");
    expect(cardElement).toHaveStyle("cursor: not-allowed");
  });
});
