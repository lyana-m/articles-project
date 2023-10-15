import type { Meta, StoryObj } from '@storybook/react';

import ArticleListFilters from './ArticleListFilters';

const meta: Meta<typeof ArticleListFilters> = {
  title: 'pages/ArticleListFilters',
  component: ArticleListFilters,
};

export default meta;
type Story = StoryObj<typeof ArticleListFilters>;

export const Default: Story = {};
