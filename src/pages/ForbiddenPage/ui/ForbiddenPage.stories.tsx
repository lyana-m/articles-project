import type { Meta, StoryObj } from '@storybook/react';

import ForbiddenPage from './ForbiddenPage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';

const meta: Meta<typeof ForbiddenPage> = {
  title: 'pages/ForbiddenPage',
  component: ForbiddenPage,
  decorators: [RouterDecorator, StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ForbiddenPage>;

export const Default: Story = {};
