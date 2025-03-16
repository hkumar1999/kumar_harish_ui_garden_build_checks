// RadioButton.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import RadioButton from "./RadioButton";
import { RadioButtonProps } from "./RadioButton.types";

export default {
  title: "Components/RadioButton",
  component: RadioButton,
  argTypes: {
    label: { control: "text" },
    name: { control: "text" },
    value: { control: "text" },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
} as Meta<typeof RadioButton>;

const Template: StoryFn<RadioButtonProps> = (args: RadioButtonProps) => (
  <RadioButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Option 1",
  name: "radio-group",
  value: "option1",
  checked: false,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled Option",
  name: "radio-group",
  value: "option2",
  checked: false,
  disabled: true,
};
