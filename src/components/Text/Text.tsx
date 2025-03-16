// Text.tsx
import React from "react";
import styled from "styled-components";
import { TextProps } from "./Text.types";

const StyledText = styled.p<{
  disabled?: boolean;
  fontSize?: string;
  color?: string;
}>`
  font-size: ${(props) => props.fontSize || "16px"};
  color: ${(props) => (props.disabled ? "#999" : props.color || "black")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition:
    color 0.3s ease,
    opacity 0.3s ease;
`;

const Text: React.FC<TextProps> = ({
  content,
  disabled = false,
  fontSize,
  color,
}) => {
  return (
    <StyledText disabled={disabled} fontSize={fontSize} color={color}>
      {content}
    </StyledText>
  );
};

export default Text;
