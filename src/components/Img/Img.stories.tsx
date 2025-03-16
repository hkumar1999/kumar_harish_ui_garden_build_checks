// Img.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Img from "./Img";
import { ImgProps } from "./Img.types";

// Import default image for testing
import myImage from "../../assets/images/myImage.jpg"; // ✅ Import image from assets folder

export default {
  title: "Components/Img",
  component: Img,
  argTypes: {
    src: { control: "text" },
    width: { control: "text" },
    height: { control: "text" },
    disabled: { control: "boolean" },
  },
} as Meta<typeof Img>;

const Template: StoryFn<ImgProps> = (args: ImgProps) => <Img {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: myImage,
  width: "300px",
  height: "200px",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: myImage,
  width: "300px",
  height: "200px",
  disabled: true,
};
