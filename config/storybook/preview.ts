import type { Preview } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    themes: {
      default: 'light',
      list: [
        { name: 'light', class: ['app', 'light'], color: '#00aced' },
        { name: 'dark', class: ['app', 'dark'], color: '#3b5998' },
        { name: 'orane', class: ['app', 'orange'], color: '#a13030' },
      ],
    },
  },
  decorators: [StyleDecorator],
};

export default preview;
