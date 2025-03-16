// Table.tsx
import React from "react";
import styled from "styled-components";
import { TableProps } from "./Table.types";

const StyledTable = styled.table<{ disabled?: boolean }>`
  width: 100%;
  border-collapse: collapse;
  background-color: ${(props) => (props.disabled ? "#f0f0f0" : "white")};
  color: ${(props) => (props.disabled ? "#999" : "black")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition:
    background-color 0.3s ease,
    opacity 0.3s ease;
`;

const StyledTh = styled.th`
  background: #007bff;
  color: white;
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
`;

const StyledTd = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const Table: React.FC<TableProps> = ({ headers, data, disabled = false }) => {
  return (
    <StyledTable disabled={disabled}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <StyledTh key={index}>{header}</StyledTh>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <StyledTd key={cellIndex}>{cell}</StyledTd>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
