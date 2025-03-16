// Label.tsx
import React from "react";
import styled from "styled-components";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.label<{
  disabled?: boolean;
  bgColor?: string;
  fontSize?: string;
}>`
  display: inline-block;
  padding: 5px 10px;
  background-color: ${(props) =>
    props.disabled ? "#ccc" : props.bgColor || "transparent"};
  color: ${(props) => (props.disabled ? "#666" : "black")};
  font-size: ${(props) => props.fontSize || "16px"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
`;

const Label: React.FC<LabelProps> = ({
  text,
  disabled = false,
  bgColor,
  fontSize,
}) => {
  return (
    <StyledLabel disabled={disabled} bgColor={bgColor} fontSize={fontSize}>
      {text}
    </StyledLabel>
  );
};

export default Label;
