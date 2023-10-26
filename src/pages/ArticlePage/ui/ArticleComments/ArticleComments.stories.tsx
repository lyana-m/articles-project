import type { Meta, StoryObj } from '@storybook/react';

import ArticleComments from './ArticleComments';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

const meta: Meta<typeof ArticleComments> = {
  title: 'pages/ArticlePage/ArticleComments',
  component: ArticleComments,
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ArticleComments>;

export const Default: Story = {};
