// TableCell.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import TableCell from "./TableCell";
import { TableCellProps } from "./TableCell.types";

export default {
  title: "Components/TableCell",
  component: TableCell,
  argTypes: {
    children: { control: "text" },
    bgColor: { control: "color" },
    disabled: { control: "boolean" },
  },
} as Meta<typeof TableCell>;

const Template: StoryFn<TableCellProps> = (args: TableCellProps) => (
  <TableCell {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Default Cell",
  disabled: false,
  bgColor: "white",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled Cell",
  disabled: true,
  bgColor: "white",
};
