import type { Meta, StoryObj } from '@storybook/react';

import NotFound from './NotFound';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

const meta: Meta<typeof NotFound> = {
  title: 'pages/NotFound',
  component: NotFound,
  decorators: [RouterDecorator, StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof NotFound>;

export const Default: Story = {};
