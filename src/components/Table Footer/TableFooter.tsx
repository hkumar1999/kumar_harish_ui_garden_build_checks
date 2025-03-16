// TableFooter.tsx
import React from "react";
import styled from "styled-components";
import { TableFooterProps } from "./TableFooter.types";

const StyledTfoot = styled.tfoot<{ disabled?: boolean; bgColor?: string }>`
  background-color: ${(props) =>
    props.disabled ? "#f0f0f0" : props.bgColor || "white"};
  color: ${(props) => (props.disabled ? "#999" : "black")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition:
    background-color 0.3s ease,
    opacity 0.3s ease;
  font-weight: bold;
`;

const TableFooter: React.FC<TableFooterProps> = ({
  children,
  disabled = false,
  bgColor,
}) => {
  return (
    <StyledTfoot disabled={disabled} bgColor={bgColor}>
      {children}
    </StyledTfoot>
  );
};

export default TableFooter;
