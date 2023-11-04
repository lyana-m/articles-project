import { BuildOptions } from '../types/config';

interface BuildBabelLoaderOptions extends BuildOptions {
  isTSX?: boolean;
}

export const buildBabelLoader = ({ isDev, isTSX }: BuildBabelLoaderOptions) => {
  return {
    test: isTSX ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: [
            isDev && require.resolve('react-refresh/babel'),
            ['@babel/plugin-transform-typescript', { isTSX }],
            '@babel/plugin-transform-runtime',
          ].filter(Boolean),
        },
      },
    ],
  };
};
