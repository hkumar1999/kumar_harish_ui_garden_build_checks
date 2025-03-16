// HeroImage.tsx
import React from "react";
import styled from "styled-components";
import { HeroImageProps } from "./HeroImage.types";

// Import default image
import myImage from "../../assets/images/myImage.jpg"; // ✅ Import image from assets

const StyledHeroImage = styled.img<HeroImageProps>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "300px"};
  object-fit: cover;
  filter: ${(props) =>
    props.disabled
      ? "grayscale(100%) opacity(0.5)"
      : "none"}; // ✅ Apply grayscale when disabled
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition:
    filter 0.3s ease,
    opacity 0.3s ease;
`;

const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt = "Hero Image",
  disabled = false,
  width,
  height,
}) => {
  return (
    <StyledHeroImage
      src={src || myImage}
      alt={alt}
      disabled={disabled}
      width={width}
      height={height}
    />
  );
};

export default HeroImage;
