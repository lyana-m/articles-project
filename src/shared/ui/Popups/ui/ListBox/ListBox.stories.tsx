import type { Meta, StoryObj } from '@storybook/react';

import ListBox from './ListBox';

const meta: Meta<typeof ListBox> = {
  title: 'shared/ListBox',
  component: ListBox,
  decorators: [(Story) => <div style={{ padding: '60px' }}>{<Story />}</div>],
  args: {
    options: [
      { value: 'v1', label: 'value1' },
      { value: 'v2', label: 'value2' },
      { value: 'v3', label: 'value3' },
    ],
    defaultValue: 'Select...',
    onChange: (v) => alert(v),
  }
};

export default meta;
type Story = StoryObj<typeof ListBox>;

export const BottomLeft: Story = {
  args: {
    position: 'bottom-left'
  },
};

export const BottomRight: Story = {
  args: {
    position: 'bottom-right'
  },
};

export const TopLeft: Story = {
  args: {
    position: 'top-left'
  },
};

export const TopRight: Story = {
  args: {
    position: 'top-right'
  },
};
