import type { Meta, StoryObj } from '@storybook/react';

import Tabs from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'shared/Tabs',
  component: Tabs,
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    tabs: [
      { name: 'Tab 1', value: 'tab1' },
      { name: 'Tab 2', value: 'tab2' },
      { name: 'Tab 3', value: 'tab3' },
    ],
    onTabClick: (tab) => alert(tab),
    activeTab: 'tab2',
  },
};
