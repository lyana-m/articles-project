import type { Meta, StoryObj } from '@storybook/react';

import AboutPage from './AboutPage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';

const meta: Meta<typeof AboutPage> = {
  title: 'pages/AboutPage',
  component: AboutPage,
  decorators: [RouterDecorator, StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const Default: Story = {};
