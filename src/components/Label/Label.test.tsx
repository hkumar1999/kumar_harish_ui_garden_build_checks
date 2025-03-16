// Label.tests.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Label from "./Label";

describe("Label Component", () => {
  test("renders the label and is visible", () => {
    render(<Label text="Test Label" />);
    const labelElement = screen.getByText(/Test Label/i);
    expect(labelElement).toBeVisible();
  });

  test("applies disabled styling correctly", () => {
    render(<Label text="Disabled Label" disabled />);
    const labelElement = screen.getByText(/Disabled Label/i);
    expect(labelElement).toHaveStyle("color: #666");
    expect(labelElement).toHaveStyle("cursor: not-allowed");
  });
});
