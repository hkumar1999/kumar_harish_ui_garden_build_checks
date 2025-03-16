// Dropdown.tests.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Dropdown from "./Dropdown";

describe("Dropdown Component", () => {
  test("renders the dropdown and is visible", () => {
    render(<Dropdown options={["Option 1", "Option 2"]} />);
    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeVisible();
  });

  test("applies disabled styling correctly", () => {
    render(<Dropdown options={["Option 1", "Option 2"]} disabled />);
    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toHaveStyle("background-color: #ccc");
    expect(selectElement).toHaveStyle("cursor: not-allowed");
  });
});
