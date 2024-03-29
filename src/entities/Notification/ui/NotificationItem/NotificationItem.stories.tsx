import type { Meta, StoryObj } from '@storybook/react';

import NotificationItem from './NotificationItem';

const meta: Meta<typeof NotificationItem> = {
  title: 'pages/NotificationItem',
  component: NotificationItem,
};

export default meta;
type Story = StoryObj<typeof NotificationItem>;

export const Default: Story = {};
