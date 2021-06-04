/** @format */

const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require('path');
const { PROJECT_PATH } = require('./lib/constants');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  target: 'web',
  plugins: [new ReactRefreshPlugin(), new webpack.HotModuleReplacementPlugin()],
  devServer: {
    open: false,
    port: 3000,
    hotOnly: true,
    host: 'localhost',
    stats: {
      modules: false,
      asset: false,
    },
    clientLogLevel: 'silent',
    // noInfo: true,
    historyApiFallback: true,
  },
});
