import type { Meta, StoryObj } from '@storybook/react';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

import Sidebar from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'widget/Sidebar',
  component: Sidebar,
  decorators: [RouterDecorator],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  decorators: [StoreDecorator({ user: { authData: {} } })],
};

export const Unautorized: Story = {
  decorators: [StoreDecorator({ user: { } })],
};
