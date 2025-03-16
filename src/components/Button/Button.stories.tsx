// Button.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button from "./Button";
import { ButtonProps } from "./Button.types";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    bgColor: { control: "color" },
    children: { control: "text" },
    disabled: { control: "boolean" },
  },
} as Meta<typeof Button>;

const Template: StoryFn<ButtonProps> = (args: ButtonProps) => (
  <Button {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Click Me",
  disabled: false,
  bgColor: "blue",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled Button",
  disabled: true,
  bgColor: "blue",
};
