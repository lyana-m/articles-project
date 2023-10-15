import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

import ProfilePage from './ProfilePage';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import avatar from 'shared/assets/tests/people.png';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  decorators: [
    RouterDecorator,
    StoreDecorator({
      profile: {
        formData: {
          firstname: 'John',
          lastname: 'Doe',
          age: 48,
          city: 'San Francisco',
          currency: Currency.EUR,
          country: Country.Thailand,
          username: 'John888',
          avatar,
        },
        readonly: true,
      },
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Default: Story = {};
