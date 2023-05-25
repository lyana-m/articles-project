import { ProgressPlugin, type WebpackPluginInstance, DefinePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlagin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { type BuildOptions } from './types/config';

export const buildPlagins = ({ paths, isDev, api, project }: BuildOptions): WebpackPluginInstance[] => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlagin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(api),
      __PROJECT__: JSON.stringify(project),
    }),
  ];

  if (isDev) {
    // plugins.push(
    // new DefinePlugin({
    //   __IS_DEV__: JSON.stringify(isDev),
    //   __API__: JSON.stringify(api),
    //   __PROJECT__: JSON.stringify(project)
    // })
    // );
    plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));
  }

  return plugins;
};
