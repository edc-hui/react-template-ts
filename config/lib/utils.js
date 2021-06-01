const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {isDevelopment, isProduction} = require('./env');
const {THEME} = require('./constants')

/**
 * 获取处理样式的Loaders
 * @param cssLoaderOptions  css-loader 的options
 * @param otherLoader sass or less
 * @returns {[*, {loader: string, options: *}, {loader: string, options: {postcssOptions: {plugins: [string]}}}]}
 */
const getStyleLoaders = (cssLoaderOptions, otherLoader = '') => {
    const loaders = [
        isProduction ? MiniCssExtractPlugin.loader : require.resolve('style-loader'),
        {
            loader: require.resolve('css-loader'),
            options: cssLoaderOptions
        },
        {
            loader: require.resolve('postcss-loader'),
        }
    ];
    switch (otherLoader) {
        case "sass":
            // loaders.push(require.resolve('fast-sass-loader'))
            loaders.push(require.resolve('sass-loader'))
            loaders.push({
                loader: require.resolve('@alifd/next-theme-loader'),
                options: {
                    theme:THEME,
                    base: '@alifd/next',
                }
            })
            loaders.push({
                loader: require.resolve('sass-resources-loader'),
                options: {
                    resources: [path.join(__dirname, '../../src/scss/_variables.scss')]
                }
            })
            break;
        default:
            break;
    }
    return loaders;
}

/**
 * 获取babel-loader
 * @returns {{loader: string, options: {cacheCompression: boolean, presets: [string, string], plugins, cacheDirectory: boolean}}}
 */
const getBabelLoaders = () => {
    const plugins = [
        [
            require.resolve('@babel/plugin-transform-runtime'),
            {
                corejs: {
                    version: 3,
                    proposals: true
                }
            }
        ],
        require.resolve('@babel/plugin-syntax-dynamic-import'),
        [
            'import',
            {
                libraryName: '@alifd/next',
                style: true
            }
        ]
    ];
    if (isDevelopment) {
        plugins.push(require.resolve('react-refresh/babel'))
    }
    const loader = {
        loader: require.resolve('babel-loader'),
        options: {
            presets: [
                require.resolve('@babel/preset-env'),
                require.resolve('@babel/preset-react'),
                require.resolve('@babel/preset-typescript'),
            ],
            plugins,
            cacheDirectory: true,
            cacheCompression: false
        },
    };
    return loader;
}

module.exports = {
    getStyleLoaders,
    getBabelLoaders,
}
