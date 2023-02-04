import webpack from 'webpack';
import path from "path";
import { buildLoader } from './buildLoader';
import { buildPlugins } from './buildPlugins';
import { buildResolves } from './buildResolves';
import { BuildOptions } from './types/config';
import { builDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { paths, mode, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoader(options),
    },
    resolve: buildResolves(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? builDevServer(options) : undefined,
  };
};