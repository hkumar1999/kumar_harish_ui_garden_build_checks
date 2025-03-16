// Table.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Table from "./Table";
import { TableProps } from "./Table.types";

export default {
  title: "Components/Table",
  component: Table,
  argTypes: {
    disabled: { control: "boolean" },
  },
} as Meta<typeof Table>;

const Template: StoryFn<TableProps> = (args: TableProps) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  headers: ["Name", "Age", "Location"],
  data: [
    ["Alice", "24", "New York"],
    ["Bob", "30", "Los Angeles"],
    ["Charlie", "29", "Chicago"],
  ],
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  headers: ["Name", "Age", "Location"],
  data: [
    ["Alice", "24", "New York"],
    ["Bob", "30", "Los Angeles"],
    ["Charlie", "29", "Chicago"],
  ],
  disabled: true,
};
