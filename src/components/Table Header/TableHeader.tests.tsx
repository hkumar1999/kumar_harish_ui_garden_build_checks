// TableHeader.tests.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import TableHeader from "./TableHeader";

describe("TableHeader Component", () => {
  test("renders the table header and is visible", () => {
    render(
      <table>
        <TableHeader headers={["Name", "Age", "Location"]} />
      </table>,
    );
    const headerElement = screen.getByText(/Name/i);
    expect(headerElement).toBeVisible();
  });

  test("applies disabled styling correctly", () => {
    render(
      <table>
        <TableHeader headers={["Name", "Age", "Location"]} disabled />
      </table>,
    );
    const headerElement = screen.getByText(/Name/i);
    expect(headerElement.closest("thead")).toHaveStyle("opacity: 0.6");
    expect(headerElement.closest("thead")).toHaveStyle("pointer-events: none");
  });
});
