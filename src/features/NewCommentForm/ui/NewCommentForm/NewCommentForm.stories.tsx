import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

import NewCommentForm from './NewCommentForm';

const meta: Meta<typeof NewCommentForm> = {
  title: 'feature/NewCommentForm',
  component: NewCommentForm,
};

export default meta;
type Story = StoryObj<typeof NewCommentForm>;

export const Default: Story = {
  decorators: [StoreDecorator({})]
};
