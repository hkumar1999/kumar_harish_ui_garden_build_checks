// TableRow.tests.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import TableRow from "./TableRow";

describe("TableRow Component", () => {
  test("renders the table row and is visible", () => {
    render(
      <table>
        <tbody>
          <TableRow>
            <td>Test Row</td>
          </TableRow>
        </tbody>
      </table>,
    );
    const rowElement = screen.getByText(/Test Row/i);
    expect(rowElement).toBeVisible();
  });

  test("applies disabled styling correctly", () => {
    render(
      <table>
        <tbody>
          <TableRow disabled>
            <td>Disabled Row</td>
          </TableRow>
        </tbody>
      </table>,
    );
    const rowElement = screen.getByText(/Disabled Row/i);
    expect(rowElement.closest("tr")).toHaveStyle("opacity: 0.6");
    expect(rowElement.closest("tr")).toHaveStyle("pointer-events: none");
  });
});
