import type { Meta, StoryObj } from '@storybook/react';

import ArticlesPage from './ArticlesPage';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';

const meta: Meta<typeof ArticlesPage> = {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,
  decorators: [RouterDecorator],
};

export default meta;
type Story = StoryObj<typeof ArticlesPage>;

export const Default: Story = {};
