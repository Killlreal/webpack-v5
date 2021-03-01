const { merge } = require('webpack-merge');
const common = require('./webpack.common.config.js');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    target: 'web',
    devServer: {
        // contentBase: common.externals.paths.dist,
        historyApiFallback: true,
        open: true,
        compress: true,
        // hot: true,
        port: 8080,
        overlay: {
            warnings: false,
            errors: true
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
});
