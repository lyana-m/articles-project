import type { Meta, StoryObj } from '@storybook/react';

import NotificationList from './NotificationList';

const meta: Meta<typeof NotificationList> = {
  title: 'pages/NotificationList',
  component: NotificationList,
};

export default meta;
type Story = StoryObj<typeof NotificationList>;

export const Default: Story = {};
