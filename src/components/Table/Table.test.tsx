// Table.tests.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Table from "./Table";

describe("Table Component", () => {
  test("renders the table and is visible", () => {
    render(
      <Table
        headers={["Name", "Age"]}
        data={[
          ["Alice", "24"],
          ["Bob", "30"],
        ]}
      />,
    );
    const tableElement = screen.getByRole("table");
    expect(tableElement).toBeVisible();
  });

  test("applies disabled styling correctly", () => {
    render(
      <Table
        headers={["Name", "Age"]}
        data={[
          ["Alice", "24"],
          ["Bob", "30"],
        ]}
        disabled
      />,
    );
    const tableElement = screen.getByRole("table");
    expect(tableElement).toHaveStyle("opacity: 0.6");
    expect(tableElement).toHaveStyle("pointer-events: none");
  });
});
