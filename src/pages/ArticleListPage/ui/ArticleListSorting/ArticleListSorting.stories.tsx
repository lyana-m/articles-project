import type { Meta, StoryObj } from '@storybook/react';

import ArticleListSorting from './ArticleListSorting';

const meta: Meta<typeof ArticleListSorting> = {
  title: 'pages/ArticleListPage/ArticleListSorting',
  component: ArticleListSorting,
};

export default meta;
type Story = StoryObj<typeof ArticleListSorting>;

export const Default: Story = {};
