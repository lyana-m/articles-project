import type { Meta, StoryObj } from '@storybook/react';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

import Navbar from './Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'widget/Navbar',
  component: Navbar,
  decorators: [RouterDecorator],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  decorators: [StoreDecorator({})],
};

export const Auth: Story = {
  decorators: [StoreDecorator({ user: { authData: {} } })],
};
