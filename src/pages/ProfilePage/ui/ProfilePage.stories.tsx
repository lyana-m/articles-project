import { withRouter, reactRouterParameters } from 'storybook-addon-react-router-v6';
import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

import ProfilePage from './ProfilePage';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import avatar from '@/shared/assets/tests/people.png';

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  decorators: [
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

export const Default: Story = {
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        pathParams: { id: '1' },
      },
      routing: {
        path: '/profile/:id',
      },
    }),
  },
};
