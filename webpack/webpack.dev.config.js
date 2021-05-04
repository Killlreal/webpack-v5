const { merge } = require('webpack-merge');
const common = require('./webpack.common.config.js');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-cheap-source-map',
    target: 'web',
    module: {
        rules: [
            {
                test: /\.pug$/,
                oneOf: [
                    // this applies to <template lang="pug"> in Vue components
                    {
                        resourceQuery: /^\?vue/,
                        use: ["pug-plain-loader"],
                    },
                    // this applies to pug imports inside JavaScript
                    {
                        use: ["pug-loader"]
                    }
                ],
            },
        ]
    },
    devServer: {
        contentBase: common.externals.paths.src,
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
});
