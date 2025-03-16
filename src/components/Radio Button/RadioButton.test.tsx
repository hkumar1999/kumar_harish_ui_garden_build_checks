// RadioButton.tests.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import RadioButton from "./RadioButton";

describe("RadioButton Component", () => {
  test("renders the radio button and is visible", () => {
    render(<RadioButton label="Test Radio" name="test" value="test-value" />);
    const radioElement = screen.getByLabelText(/Test Radio/i);
    expect(radioElement).toBeVisible();
  });

  test("applies disabled styling correctly", () => {
    render(
      <RadioButton
        label="Disabled Radio"
        name="test"
        value="test-value"
        disabled
      />,
    );
    const radioElement = screen.getByLabelText(/Disabled Radio/i);
    expect(radioElement).toBeDisabled();
    expect(radioElement).toHaveStyle("opacity: 0.5");
    expect(radioElement).toHaveStyle("cursor: not-allowed");
  });
});
