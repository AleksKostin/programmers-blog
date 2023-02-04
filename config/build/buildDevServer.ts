import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server'

export function builDevServer(options: BuildOptions): DevServerConfiguration {
  
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
  };
};