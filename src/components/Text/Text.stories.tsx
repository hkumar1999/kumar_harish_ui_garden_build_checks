// Text.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Text from "./Text";
import { TextProps } from "./Text.types";

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {
    content: { control: "text" },
    fontSize: { control: "text" },
    color: { control: "color" },
    disabled: { control: "boolean" },
  },
} as Meta<typeof Text>;

const Template: StoryFn<TextProps> = (args: TextProps) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: "This is a text component",
  disabled: false,
  fontSize: "16px",
  color: "black",
};

export const Disabled = Template.bind({});
Disabled.args = {
  content: "This text is disabled",
  disabled: true,
  fontSize: "16px",
  color: "black",
};
