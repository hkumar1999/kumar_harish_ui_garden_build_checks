// TableCell.tests.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import TableCell from "./TableCell";

describe("TableCell Component", () => {
  test("renders the table cell and is visible", () => {
    render(<TableCell>Test Cell</TableCell>);
    const cellElement = screen.getByText(/Test Cell/i);
    expect(cellElement).toBeVisible();
  });

  test("applies disabled styling correctly", () => {
    render(<TableCell disabled>Disabled Cell</TableCell>);
    const cellElement = screen.getByText(/Disabled Cell/i);
    expect(cellElement).toHaveStyle("opacity: 0.6");
    expect(cellElement).toHaveStyle("pointer-events: none");
  });
});
