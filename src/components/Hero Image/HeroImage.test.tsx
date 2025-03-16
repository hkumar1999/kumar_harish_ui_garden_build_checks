// HeroImage.tests.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import HeroImage from "./HeroImage";

describe("HeroImage Component", () => {
  test("renders the hero image and is visible", () => {
    render(
      <HeroImage
        src="https://via.placeholder.com/800x400"
        alt="Test Hero Image"
      />,
    );
    const imageElement = screen.getByAltText(/Test Hero Image/i);
    expect(imageElement).toBeVisible();
  });

  test("applies disabled styling correctly", () => {
    render(
      <HeroImage
        src="https://via.placeholder.com/800x400"
        alt="Disabled Image"
        disabled
      />,
    );
    const imageElement = screen.getByAltText(/Disabled Image/i);
    expect(imageElement).toHaveStyle("filter: grayscale(100%) opacity(0.5)");
    expect(imageElement).toHaveStyle("cursor: not-allowed");
  });
});
