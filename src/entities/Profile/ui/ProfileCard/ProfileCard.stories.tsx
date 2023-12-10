import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

import ProfileCard from './ProfileCard';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import avatar from '@/shared/assets/tests/people.png';

const meta: Meta<typeof ProfileCard> = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {
  args: {
    data: {
      firstname: 'John',
      lastname: 'Doe',
      age: 48,
      city: 'San Francisco',
      currency: Currency.EUR,
      country: Country.Thailand,
      username: 'John888',
      avatar,
    },
  },
};

export const Error: Story = {
  args: {
    error: 'error',
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const Readonly: Story = {
  args: {
    readonly: true,
  },
};
