import type { Meta, StoryObj } from '@storybook/react';

import NotificationButton from './NotificationButton';

const meta: Meta<typeof NotificationButton> = {
  title: 'pages/NotificationButton',
  component: NotificationButton,
};

export default meta;
type Story = StoryObj<typeof NotificationButton>;

export const Default: Story = {};
