import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: 'feature/LoginForm',
  component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
  decorators: [StoreDecorator({ login: { username: 'flflf', password: '123' } })],
};

export const Error: Story = {
  decorators: [StoreDecorator({ login: { username: 'flflf', password: '123', error: 'Error message' } })],
};

export const Loading: Story = {
  decorators: [StoreDecorator({ login: { isLoading: true } })],
};
