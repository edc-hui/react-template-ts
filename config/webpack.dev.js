const {merge} = require('webpack-merge');
const webpack = require('webpack')
const common = require('./webpack.common')
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require('path')
const {PROJECT_PATH} = require('./lib/constants')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    target: 'web',
    plugins: [
        new ReactRefreshPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        open: true,
        port: 3000,
        hotOnly: true,
        host: 'localhost',
        contentBase: path.join(PROJECT_PATH, './public'),
        stats: 'errors-only',
        clientLogLevel: 'silent',
        noInfo: true
    }
})