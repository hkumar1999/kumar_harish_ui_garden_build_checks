// Button.tsx
import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

// Styled component that adapts based on props
const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.disabled ? "#ccc" : props.bgColor || "blue"};
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition:
    background-color 0.3s ease,
    opacity 0.3s ease;

  &:hover {
    /* Only change hover color if not disabled */
    background-color: ${(props) =>
      props.disabled ? "#ccc" : props.bgColor ? props.bgColor : "darkblue"};
  }
`;

const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  bgColor,
  ...rest
}) => {
  return (
    <StyledButton disabled={disabled} bgColor={bgColor} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
