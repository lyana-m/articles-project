import type webpack from 'webpack';
import { type BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';

export const buildLoaders = ({ isDev }: BuildOptions): webpack.RuleSetRule[] => {
  const cssLoader = buildCssLoader(isDev);
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  };
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  };
  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  };
  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  };

  return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
};
