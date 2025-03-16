// Card.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Card from "./Card";
import { CardProps } from "./Card.types";

// Import default image for testing
import defaultImage from "../../assets/images/myImage.jpg"; // Import image from assets folder

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    bgColor: { control: "color" },
    disabled: { control: "boolean" },
    imgSrc: { control: "text" }, // Allows changing image path in Storybook
  },
} as Meta<typeof Card>;

const Template: StoryFn<CardProps> = (args: CardProps) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "This is a card component",
  disabled: false,
  bgColor: "white",
  imgSrc: defaultImage, //  Uses imported image
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled Card",
  disabled: true,
  bgColor: "white",
  imgSrc: defaultImage,
};
