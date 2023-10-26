import type { Meta, StoryObj } from '@storybook/react';

import EditableProfileCard from './EditableProfileCard';

const meta: Meta<typeof EditableProfileCard> = {
  title: 'pages/EditableProfileCard',
  component: EditableProfileCard,
};

export default meta;
type Story = StoryObj<typeof EditableProfileCard>;

export const Default: Story = {};
