import type { Meta, StoryObj } from '@storybook/react';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';

import AppLink from './AppLink';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    to: '/',
    children: ['Ссылка'],
  },
  decorators: [RouterDecorator],
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    theme: 'secondary',
  },
};
