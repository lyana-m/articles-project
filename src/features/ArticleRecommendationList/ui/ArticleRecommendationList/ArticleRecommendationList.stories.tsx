import type { Meta, StoryObj } from '@storybook/react';

import ArticleRecommendationList from './ArticleRecommendationList';

const meta: Meta<typeof ArticleRecommendationList> = {
  title: 'pages/ArticleRecommendationList',
  component: ArticleRecommendationList,
};

export default meta;
type Story = StoryObj<typeof ArticleRecommendationList>;

export const Default: Story = {};
