import type { Meta, StoryObj } from '@storybook/react';

import ListBox from './ListBox';

const meta: Meta<typeof ListBox> = {
  title: 'shared/ListBox',
  component: ListBox,
};

export default meta;
type Story = StoryObj<typeof ListBox>;

export const Default: Story = {
  args: {
    options: [
      { value: 'v1', label: 'value1' },
      { value: 'v2', label: 'value2' },
      { value: 'v3', label: 'value3' },
    ],
    defaultValue: 'Select...',
    onChange: (v) => alert(v)
  },
};
