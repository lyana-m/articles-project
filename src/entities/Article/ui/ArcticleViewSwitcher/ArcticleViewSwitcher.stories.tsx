import type { Meta, StoryObj } from '@storybook/react';

import ArcticleViewSwitcher from './ArcticleViewSwitcher';

const meta: Meta<typeof ArcticleViewSwitcher> = {
  title: 'entities/ArcticleViewSwitcher',
  component: ArcticleViewSwitcher,
};

export default meta;
type Story = StoryObj<typeof ArcticleViewSwitcher>;

export const Default: Story = {};
