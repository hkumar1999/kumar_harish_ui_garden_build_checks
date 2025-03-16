// Img.tests.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Img from "./Img";

describe("Img Component", () => {
  test("renders the image and is visible", () => {
    render(<Img src="https://via.placeholder.com/300" alt="Test Image" />);
    const imageElement = screen.getByAltText(/Test Image/i);
    expect(imageElement).toBeVisible();
  });

  test("applies disabled styling correctly", () => {
    render(
      <Img
        src="https://via.placeholder.com/300"
        alt="Disabled Image"
        disabled
      />,
    );
    const imageElement = screen.getByAltText(/Disabled Image/i);
    expect(imageElement).toHaveStyle("filter: grayscale(100%) opacity(0.5)");
    expect(imageElement).toHaveStyle("cursor: not-allowed");
  });
});
