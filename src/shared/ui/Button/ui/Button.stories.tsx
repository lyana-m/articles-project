import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: 'clear',
  },
};

export const ClearInverted: Story = {
  args: {
    children: 'Text',
    theme: 'clearInverted',
  },
};

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: 'outline',
  },
};

export const Background: Story = {
  args: {
    children: 'Text',
    theme: 'background',
  },
};

export const BackgroundInverted: Story = {
  args: {
    children: 'Text',
    theme: 'backgroundInverted',
  },
};

export const Square: Story = {
  args: {
    children: '>',
    theme: 'backgroundInverted',
  },
};

export const SizeM: Story = {
  args: {
    children: 'Text',
    theme: 'backgroundInverted',
    size: 'm',
  },
};

export const SizeL: Story = {
  args: {
    children: 'Text',
    theme: 'backgroundInverted',
    size: 'l',
  },
};

export const SizeXl: Story = {
  args: {
    children: 'Text',
    theme: 'backgroundInverted',
    size: 'xl',
  },
};
