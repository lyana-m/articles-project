import type { Meta, StoryObj } from '@storybook/react';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';
import avatar from 'shared/assets/tests/people.png';

import CommentList from './CommentList';

const meta: Meta<typeof CommentList> = {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  decorators: [RouterDecorator]
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Default: Story = {
  args: {
    comments: [
      {
        id: '1',
        text: 'Hi there',
        user: {
          id: '2',
          username: 'admin',
        },
      },
      {
        id: '3',
        text: 'Lorem Ipsum',
        user: {
          id: '4',
          username: 'kukusik',
          avatar,
        },
      },
    ]
  }
};

export const NoComments: Story = {
  args: {
    comments: []
  }
};

export const Loading: Story = {
  args: {
    isLoading: true,
  }
};
