import { BuildOptions } from '../types/config';

export const buildBabelLoader = ({ isDev }: BuildOptions) => {
  return {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
      {
        loader: require.resolve('babel-loader'),
        options: {
          plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean),
        },
      },
    ],
  };
};