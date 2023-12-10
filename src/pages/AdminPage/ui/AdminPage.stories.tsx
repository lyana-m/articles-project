import type { Meta, StoryObj } from '@storybook/react';

import AdminPage from './AdminPage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';

const meta: Meta<typeof AdminPage> = {
  title: 'pages/AdminPage',
  component: AdminPage,
  decorators: [RouterDecorator, StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof AdminPage>;

export const Default: Story = {};
