import { ProgressPlugin, type WebpackPluginInstance, DefinePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlagin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import { type BuildOptions } from './types/config';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

export const buildPlagins = ({ paths, isDev, api, project }: BuildOptions): WebpackPluginInstance[] => {
  const plugins: WebpackPluginInstance[] = [
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
    new CopyPlugin({
      patterns: [{ from: paths.locales, to: paths.buildLocales }],
    }),
  ];

  if (isDev) {
    plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));
    plugins.push(new ReactRefreshWebpackPlugin({ overlay: false }));
    plugins.push(
      new CircularDependencyPlugin({ exclude: /node_modules/, failOnError: true }) as unknown as WebpackPluginInstance
    );
    plugins.push(
      new ForkTsCheckerWebpackPlugin({
        typescript: {
          diagnosticOptions: {
            semantic: true,
            syntactic: true,
          },
          mode: 'write-references',
        },
      })
    );
  }

  return plugins;
};
