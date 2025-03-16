// TableFooter.tests.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import TableFooter from "./TableFooter";

describe("TableFooter Component", () => {
  test("renders the table footer and is visible", () => {
    render(
      <table>
        <TableFooter>
          <tr>
            <td colSpan={3}>Total: $150</td>
          </tr>
        </TableFooter>
      </table>,
    );
    const footerElement = screen.getByText(/Total: \$150/i);
    expect(footerElement).toBeVisible();
  });

  test("applies disabled styling correctly", () => {
    render(
      <table>
        <TableFooter disabled>
          <tr>
            <td colSpan={3}>Total: $150</td>
          </tr>
        </TableFooter>
      </table>,
    );
    const footerElement = screen.getByText(/Total: \$150/i);
    expect(footerElement).toHaveStyle("opacity: 0.6");
    expect(footerElement).toHaveStyle("pointer-events: none");
  });
});
