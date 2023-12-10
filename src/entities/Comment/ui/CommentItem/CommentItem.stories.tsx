import type { Meta, StoryObj } from '@storybook/react';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';

import CommentItem from './CommentItem';

const meta: Meta<typeof CommentItem> = {
  title: 'entities/Comment/CommentItem',
  component: CommentItem,
  decorators: [RouterDecorator],
};

export default meta;
type Story = StoryObj<typeof CommentItem>;

export const Default: Story = {
  args: {
    comment: {
      id: '1',
      text: 'Hi there',
      user: {
        id: '2',
        username: 'admin',
        roles: ['ADMIN'],
      },
    },
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
