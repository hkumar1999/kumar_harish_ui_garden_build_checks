// Card.tsx
import React from "react";
import styled from "styled-components";
import { CardProps } from "./Card.types";

// Import default image
import myImage from "../../assets/images/myImage.jpg"; //  Import image from assets

const StyledCard = styled.div<CardProps>`
  background-color: ${(props) =>
    props.disabled ? "#ccc" : props.bgColor || "white"};
  color: ${(props) => (props.disabled ? "#666" : "black")};
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: ${(props) =>
    props.disabled ? "none" : "0 4px 6px rgba(0,0,0,0.1)"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition:
    background-color 0.3s ease,
    color 0.3s ease,
    box-shadow 0.3s ease;
  max-width: 300px;
  text-align: center;
`;

const CardImage = styled.img<{ disabled?: boolean }>`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
  filter: ${(props) =>
    props.disabled
      ? "grayscale(100%) opacity(0.5)"
      : "none"}; //  Apply grayscale when disabled
  transition: filter 0.3s ease;
`;

const Card: React.FC<CardProps> = ({
  children,
  disabled = false,
  bgColor,
  imgSrc,
}) => {
  return (
    <StyledCard disabled={disabled} bgColor={bgColor}>
      <CardImage src={imgSrc || myImage} alt="Card Image" disabled={disabled} />
      {children}
    </StyledCard>
  );
};

export default Card;
