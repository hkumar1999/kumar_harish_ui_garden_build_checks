// Text.tests.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Text from "./Text";

describe("Text Component", () => {
  test("renders the text and is visible", () => {
    render(<Text content="Test Text" />);
    const textElement = screen.getByText(/Test Text/i);
    expect(textElement).toBeVisible();
  });

  test("applies disabled styling correctly", () => {
    render(<Text content="Disabled Text" disabled />);
    const textElement = screen.getByText(/Disabled Text/i);
    expect(textElement).toHaveStyle("opacity: 0.6");
    expect(textElement).toHaveStyle("pointer-events: none");
  });
});
