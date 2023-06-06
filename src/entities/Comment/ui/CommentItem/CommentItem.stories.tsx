import type { Meta, StoryObj } from '@storybook/react';
// import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

import CommentItem from './CommentItem';

const meta: Meta<typeof CommentItem> = {
  title: 'entities/CommentItem',
  component: CommentItem,
};

export default meta;
type Story = StoryObj<typeof CommentItem>;

export const Default: Story = {};
