import type { Meta, StoryObj } from '@storybook/react';

import ArticleRecommendationList from './ArticleRecommendationList';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

const meta: Meta<typeof ArticleRecommendationList> = {
  title: 'feature/ArticleRecommendationList',
  component: ArticleRecommendationList,
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ArticleRecommendationList>;

export const Default: Story = {};
