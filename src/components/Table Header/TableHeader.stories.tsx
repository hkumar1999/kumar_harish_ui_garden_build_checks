// TableHeader.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import TableHeader from "./TableHeader";
import { TableHeaderProps } from "./TableHeader.types";

export default {
  title: "Components/TableHeader",
  component: TableHeader,
  argTypes: {
    headers: { control: "object" }, // ✅ FIXED: Use 'object' instead of 'array'
    bgColor: { control: "color" },
    disabled: { control: "boolean" },
  },
} as Meta<typeof TableHeader>;

const Template: StoryFn<TableHeaderProps> = (args: TableHeaderProps) => (
  <table>
    <TableHeader {...args} />
  </table>
);

export const Default = Template.bind({});
Default.args = {
  headers: ["Name", "Age", "Location"],
  disabled: false,
  bgColor: "#007bff",
};

export const Disabled = Template.bind({});
Disabled.args = {
  headers: ["Name", "Age", "Location"],
  disabled: true,
  bgColor: "#007bff",
};
