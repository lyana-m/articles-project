import type { Meta, StoryObj } from '@storybook/react';

import Avatar from './Avatar';
import Image from '../../../assets/tests/people.png';

const meta: Meta<typeof Avatar> = {
  title: 'shared/Avatar',
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: Image,
  }
};

export const Size: Story = {
  args: {
    src: Image,
    size: 200,
  }
};
