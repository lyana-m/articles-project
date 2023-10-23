import type { Meta, StoryObj } from '@storybook/react';

import Flex from './Flex';

const meta: Meta<typeof Flex> = {
  title: 'shared/Flex',
  component: Flex,
};

export default meta;
type Story = StoryObj<typeof Flex>;

const children = (
  <>
    <div style={{ background: 'red' }}>ONE</div>
    <div style={{ background: 'green' }}>TWO</div>
    <div style={{ background: 'yellow' }}>THREE</div>
    <div style={{ background: 'blue' }}>FOUR</div>
  </>
);

export const JustifyContent: Story = {
  args: {
    justifyContent: 'center',
    children,
  },
};

export const Gap: Story = {
  args: {
    gap: '8',
    children,
  },
};

export const FlexDirection: Story = {
  args: {
    flexDirection: 'column',
    children,
  },
};
