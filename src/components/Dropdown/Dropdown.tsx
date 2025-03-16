// Dropdown.tsx
import React from "react";
import styled from "styled-components";
import { DropdownProps } from "./Dropdown.types";

// Styled Select Dropdown (removing `options` from StyledSelect props)
const StyledSelect = styled.select<{ disabled?: boolean; bgColor?: string }>`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: ${(props) =>
    props.disabled ? "#ccc" : props.bgColor || "white"};
  color: ${(props) => (props.disabled ? "#666" : "black")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
`;

const Dropdown: React.FC<DropdownProps> = ({
  options,
  disabled = false,
  bgColor,
  onChange,
}) => {
  return (
    <StyledSelect
      disabled={disabled}
      bgColor={bgColor}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
        onChange && onChange(e.target.value)
      }
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;
