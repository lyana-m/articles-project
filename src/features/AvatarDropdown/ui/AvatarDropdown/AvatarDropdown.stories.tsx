import type { Meta, StoryObj } from '@storybook/react';

import AvatarDropdown from './AvatarDropdown';

const meta: Meta<typeof AvatarDropdown> = {
  title: 'pages/AvatarDropdown',
  component: AvatarDropdown,
};

export default meta;
type Story = StoryObj<typeof AvatarDropdown>;

export const Default: Story = {};
