import type { Meta, StoryObj } from '@storybook/react';

import Page from './Page';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

const meta: Meta<typeof Page> = {
  title: 'widget/Page',
  component: Page,
  decorators: [RouterDecorator, StoreDecorator({ ui: { scroll: {} } })],
};

export default meta;
type Story = StoryObj<typeof Page>;

export const Default: Story = {
  args: {
    children: <div>HELLO</div>,
  },
};
