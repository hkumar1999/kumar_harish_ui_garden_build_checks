// TableCell.tsx
import React from "react";
import styled from "styled-components";
import { TableCellProps } from "./TableCell.types";

const StyledTd = styled.td<{ disabled?: boolean; bgColor?: string }>`
  padding: 10px;
  border: 1px solid #ddd;
  background-color: ${(props) =>
    props.disabled ? "#f0f0f0" : props.bgColor || "white"};
  color: ${(props) => (props.disabled ? "#999" : "black")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition:
    background-color 0.3s ease,
    opacity 0.3s ease;
`;

const TableCell: React.FC<TableCellProps> = ({
  children,
  disabled = false,
  bgColor,
}) => {
  return (
    <StyledTd disabled={disabled} bgColor={bgColor}>
      {children}
    </StyledTd>
  );
};

export default TableCell;
