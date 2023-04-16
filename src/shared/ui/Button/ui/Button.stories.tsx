import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: 'clear',
  },
};

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: 'outline',
  },
};
