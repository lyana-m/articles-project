import type { Meta, StoryObj } from '@storybook/react';

import EditableProfileCard from './EditableProfileCard';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

const meta: Meta<typeof EditableProfileCard> = {
  title: 'feature/EditableProfileCard',
  component: EditableProfileCard,
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof EditableProfileCard>;

export const Default: Story = {};
