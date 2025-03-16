// Img.tsx
import React from "react";
import styled from "styled-components";
import { ImgProps } from "./Img.types";

// Import default image
import myImage from "../../assets/images/myImage.jpg"; // ✅ Import image from assets

const StyledImg = styled.img<ImgProps>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
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

const Img: React.FC<ImgProps> = ({
  src,
  alt = "Image",
  disabled = false,
  width,
  height,
}) => {
  return (
    <StyledImg
      src={src || myImage}
      alt={alt}
      disabled={disabled}
      width={width}
      height={height}
    />
  );
};

export default Img;
