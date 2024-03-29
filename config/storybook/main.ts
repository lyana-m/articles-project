import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import { DefinePlugin } from 'webpack';
import { buildCssLoader } from '../../config/build/loaders/buildCssLoader';

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-css-modules',
    'storybook-addon-themes',
    'storybook-addon-mock',
    'storybook-addon-react-router-v6',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  features: { storyStoreV7: false },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    // config.module.rules.push({
    //   test: /\.scss$/,
    //   use: ['style-loader', 'css-loader', 'sass-loader'],
    //   include: path.resolve(__dirname, '../'),
    // });

    if (config.resolve) {
      config.resolve.extensions?.push('.tsx', '.ts');
      config.resolve.modules = [path.resolve(__dirname, '..', '..', 'src'), 'node_modules', 'public'];

      if (config.resolve.alias) {
        config.resolve.alias = {
          ...config.resolve.alias,
          '@': path.resolve(__dirname, '..', '..', 'src'),
        };
      }
    }

    config.module?.rules?.push(buildCssLoader(true));

    const rule = config.module?.rules?.find((rule) => {
      if (typeof rule !== 'string' && rule.test instanceof RegExp) {
        return rule.test.test('.svg');
      }
      return false;
    });

    if (rule && typeof rule !== 'string') {
      rule.exclude = /\.svg$/;
    }

    config.module?.rules?.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.plugins?.push(
      new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('https://testapi.com'),
        __PROJECT__: JSON.stringify('storybook')
      })
    );

    // Return the altered config
    return config;
  },
};
export default config;
