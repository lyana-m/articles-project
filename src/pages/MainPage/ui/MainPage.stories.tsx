import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

import MainPage from './MainPage';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';

const meta: Meta<typeof MainPage> = {
  title: 'pages/MainPage',
  component: MainPage,
  decorators: [RouterDecorator, StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Default: Story = {};
