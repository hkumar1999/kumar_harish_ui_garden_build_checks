// TableRow.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import TableRow from "./TableRow";
import { TableRowProps } from "./TableRow.types";

export default {
  title: "Components/TableRow",
  component: TableRow,
  argTypes: {
    children: { control: "text" },
    bgColor: { control: "color" },
    disabled: { control: "boolean" },
  },
} as Meta<typeof TableRow>;

const Template: StoryFn<TableRowProps> = (args: TableRowProps) => (
  <table>
    <tbody>
      <TableRow {...args}>
        <td>Row Data 1</td>
        <td>Row Data 2</td>
        <td>Row Data 3</td>
      </TableRow>
    </tbody>
  </table>
);

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  bgColor: "white",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  bgColor: "white",
};
