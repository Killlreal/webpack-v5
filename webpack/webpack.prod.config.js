const { merge } = require('webpack-merge');
const common = require('./webpack.common.config.js');

module.exports = merge(common, {
    mode: 'production',
    target: 'browserslist',
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
                        use: ["html-loader", "pug-html-loader"]
                    }
                ],
            },
        ]
    }
});