// TableRow.tsx
import React from "react";
import styled from "styled-components";
import { TableRowProps } from "./TableRow.types";

const StyledTr = styled.tr<{ disabled?: boolean; bgColor?: string }>`
  background-color: ${(props) =>
    props.disabled ? "#f0f0f0" : props.bgColor || "white"};
  color: ${(props) => (props.disabled ? "#999" : "black")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition:
    background-color 0.3s ease,
    opacity 0.3s ease;
`;

const TableRow: React.FC<TableRowProps> = ({
  children,
  disabled = false,
  bgColor,
}) => {
  return (
    <StyledTr disabled={disabled} bgColor={bgColor}>
      {children}
    </StyledTr>
  );
};

export default TableRow;
