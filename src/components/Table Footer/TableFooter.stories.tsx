// TableFooter.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import TableFooter from "./TableFooter";
import { TableFooterProps } from "./TableFooter.types";

export default {
  title: "Components/TableFooter",
  component: TableFooter,
  argTypes: {
    children: { control: "text" },
    bgColor: { control: "color" },
    disabled: { control: "boolean" },
  },
} as Meta<typeof TableFooter>;

const Template: StoryFn<TableFooterProps> = (args: TableFooterProps) => (
  <table>
    <TableFooter {...args}>
      <tr>
        <td colSpan={3}>Total: $150</td>
      </tr>
    </TableFooter>
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
