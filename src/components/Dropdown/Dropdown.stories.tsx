// Dropdown.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Dropdown from "./Dropdown";
import { DropdownProps } from "./Dropdown.types";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    bgColor: { control: "color" },
    disabled: { control: "boolean" },
  },
} as Meta<typeof Dropdown>;

const Template: StoryFn<DropdownProps> = (args: DropdownProps) => (
  <Dropdown {...args} />
);

export const Default = Template.bind({});
Default.args = {
  options: ["Option 1", "Option 2", "Option 3"],
  disabled: false,
  bgColor: "white",
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: ["Option 1", "Option 2", "Option 3"],
  disabled: true,
  bgColor: "white",
};
