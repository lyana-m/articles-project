import type { Meta, StoryObj } from '@storybook/react';

import ThemeButton from './ThemeButton';

const meta: Meta<typeof ThemeButton> = {
  title: 'widget/ThemeButton',
  component: ThemeButton,
};

export default meta;
type Story = StoryObj<typeof ThemeButton>;

export const Default: Story = {};
