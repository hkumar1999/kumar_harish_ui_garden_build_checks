// RadioButton.tsx
import React, { useState } from "react";
import styled from "styled-components";
import { RadioButtonProps } from "./RadioButton.types";

const StyledLabel = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  color: ${(props) => (props.disabled ? "#666" : "black")};
  transition: color 0.3s ease;
`;

const StyledRadio = styled.input<{ disabled?: boolean }>`
  margin-right: 10px;
  width: 16px;
  height: 16px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  transition: opacity 0.3s ease;
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  disabled,
  onChange,
}) => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleChange = () => {
    if (!disabled) {
      setSelected(value);
      onChange?.(value);
    }
  };

  return (
    <StyledLabel disabled={disabled}>
      <StyledRadio
        type="radio"
        name={name}
        value={value}
        checked={selected === value}
        disabled={disabled}
        onChange={handleChange}
      />
      {label}
    </StyledLabel>
  );
};

export default RadioButton;
