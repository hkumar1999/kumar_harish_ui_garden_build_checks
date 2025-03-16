// HeroImage.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import HeroImage from "./HeroImage";
import { HeroImageProps } from "./HeroImage.types";

// Import default image for testing
import myImage from "../../assets/images/myImage.jpg"; // ✅ Import image from assets folder

export default {
  title: "Components/HeroImage",
  component: HeroImage,
  argTypes: {
    src: { control: "text" },
    width: { control: "text" },
    height: { control: "text" },
    disabled: { control: "boolean" },
  },
} as Meta<typeof HeroImage>;

const Template: StoryFn<HeroImageProps> = (args: HeroImageProps) => (
  <HeroImage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  src: myImage,
  width: "100%",
  height: "300px",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: myImage,
  width: "100%",
  height: "300px",
  disabled: true,
};
