import type { Meta, StoryObj } from '@storybook/react';

import Skeleton from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'shared/Skeleton',
  component: Skeleton,
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {};

export const Round: Story = {
  args: {
    width: 200,
    height: 200,
    borderRadius: '50%',
  },
};
