import type { Meta, StoryObj } from '@storybook/react';

import Dropdown from './Dropdown';
import { Button } from '../../Button';

const meta: Meta<typeof Dropdown> = {
  title: 'shared/Dropdown',
  component: Dropdown,
  decorators: [(Story) => <div style={{ padding: '60px' }}>{<Story />}</div>],
  args: {
    items: [{ name: 'v1' }, { name: 'v2' }, { name: 'v3' }],
    trigger: <Button>CLICK</Button>,
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

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
