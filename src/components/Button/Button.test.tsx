// Button.tests.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  test("renders the button and is visible", () => {
    render(<Button>Test Button</Button>);
    const buttonElement = screen.getByText(/Test Button/i);
    expect(buttonElement).toBeVisible();
  });

  test("applies disabled styling correctly", () => {
    render(
      <Button disabled bgColor="blue">
        Disabled Button
      </Button>,
    );
    const buttonElement = screen.getByText(/Disabled Button/i);
    // Expect background color to be grey (#ccc) when disabled
    expect(buttonElement).toHaveStyle("background-color: #ccc");
    // Expect cursor to indicate the button is not clickable
    expect(buttonElement).toHaveStyle("cursor: not-allowed");
  });
});
