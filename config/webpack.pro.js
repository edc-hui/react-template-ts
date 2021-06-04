/** @format */

const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const { PROJECT_PATH } = require('./lib/constants');
module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  stats: 'errors-only',
  target: 'browserslist',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].chunk.css',
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        extractComments: false, // 不生成 license.text
        terserOptions: {
          warnings: false,
          compress: {
            drop_console: true,
            drop_debugger: true,
          },
        },
      }),
    ],
  },
});
