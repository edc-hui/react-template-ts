const {merge} = require('webpack-merge');
const path = require('path')
const common = require('./webpack.common')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const {PROJECT_PATH} = require('./lib/constants')
module.exports = merge(common, {
    mode: 'production',
    devtool: false,
    stats: 'errors-only',
    target: 'browserslist',
    plugins: [
        new MiniCssExtractPlugin({
            filename:'css/[name].[contenthash:8].css',
            chunkFilename:'css/[name].[contenthash:8].chunk.css',
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(PROJECT_PATH, 'public'),
                    to: path.join(PROJECT_PATH, 'dist'),
                    globOptions: {
                        ignore: ["**/index.html"]
                    },
                }
            ]
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [
            `...`,
            new CssMinimizerPlugin(),
        ]
    }
})