import type { Meta, StoryObj } from '@storybook/react';

import Overlay from './Overlay';

const meta: Meta<typeof Overlay> = {
  title: 'pages/Overlay',
  component: Overlay,
};

export default meta;
type Story = StoryObj<typeof Overlay>;

export const Default: Story = {};
