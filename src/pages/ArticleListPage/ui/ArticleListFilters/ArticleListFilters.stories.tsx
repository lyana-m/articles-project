import type { Meta, StoryObj } from '@storybook/react';

import ArticleListFilters from './ArticleListFilters';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

const meta: Meta<typeof ArticleListFilters> = {
  title: 'pages/ArticleListPage/ArticleListFilters',
  component: ArticleListFilters,
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ArticleListFilters>;

export const Default: Story = {};
