// TableHeader.tsx
import React from "react";
import styled from "styled-components";
import { TableHeaderProps } from "./TableHeader.types";

const StyledThead = styled.thead<{ disabled?: boolean; bgColor?: string }>`
  background-color: ${(props) =>
    props.disabled ? "#f0f0f0" : props.bgColor || "#007bff"};
  color: ${(props) => (props.disabled ? "#999" : "white")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition:
    background-color 0.3s ease,
    opacity 0.3s ease;
`;

const StyledTh = styled.th`
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
`;

const TableHeader: React.FC<TableHeaderProps> = ({
  headers,
  disabled = false,
  bgColor,
}) => {
  return (
    <StyledThead disabled={disabled} bgColor={bgColor}>
      <tr>
        {headers.map((header, index) => (
          <StyledTh key={index}>{header}</StyledTh>
        ))}
      </tr>
    </StyledThead>
  );
};

export default TableHeader;
