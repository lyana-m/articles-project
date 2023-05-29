import { type Configuration } from 'webpack';
import { buildPlagins } from './buildPlagins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';
import { type BuildOptions } from './types/config';

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const { mode, paths, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
      publicPath: '/'
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(options),
    plugins: buildPlagins(options)
  };
};
