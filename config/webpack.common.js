const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const {getStyleLoaders, getBabelLoaders} = require('./lib/utils');
const {PROJECT_PATH, THEME} = require('./lib/constants');
const {devDependencies} = require('../package.json');
const ThemePlugin = require('@alifd/next-theme-webpack-plugin');

module.exports = {
    entry: path.join(PROJECT_PATH, 'src/index.tsx'),
    output: {
        filename: "js/[name].[contenthash:8].js",
        path: path.join(PROJECT_PATH, 'dist'),
        clean: true,
        assetModuleFilename: "images/[name].[contenthash:8].[ext]",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif|bmp)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024
                    }
                }
            },
            {
                test: /\.svg$/,
                type: "asset/inline"
            },
            {
                test: /\.txt$/,
                type: "asset/source"
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2?)$/,
                type: 'asset/resource',
            },
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: getBabelLoaders()
            },
            {
                test: /\.css$/,
                exclude: /\.module\.css$/,
                use: getStyleLoaders({
                    importLoaders: 1
                })
            },
            {
                test: /\.module\.css$/,
                use: getStyleLoaders({
                    modules: true,
                    importLoaders: 1
                })
            },
            {
                test: /\.scss$/,
                exclude: /\.module\.scss$/,
                use: getStyleLoaders({
                    importLoaders: 4
                }, 'sass'),
            },
            {
                test: /\.module\.scss$/,
                use: getStyleLoaders({
                    modules: true,
                    importLoaders: 4
                }, 'sass')
            },
        ]
    },
    plugins: [
        new WebpackBar({
            name: `webpack v${devDependencies.webpack.replace('^', '')}`,
        }),
        new HtmlWebpackPlugin({
            template: path.join(PROJECT_PATH, 'public/index.html'),
            filename: "index.html",
            publicPath: '/'
        }),
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                configFile: path.join(PROJECT_PATH, 'tsconfig.json')
            }
        }),
        new ThemePlugin({
            theme:THEME,
            libraryName: '@alifd/next',
            prependNormalizeCSS: true,
        })
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            '@': path.join(PROJECT_PATH, 'src')
        }
    }
}