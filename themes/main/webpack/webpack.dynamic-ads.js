const Path = require('path');

module.exports = {
    entry: {
        app: Path.resolve(__dirname, '../src/scripts/dynamic-ads.js')
    },
    output: {
        path: Path.join(__dirname, '../static/static'),
        filename: 'js/dynamic-ads.js'
    },
    mode: 'production',
    optimization: {
        minimize: false
    },
    plugins: [],
    resolve: {
        alias: {
            '~': Path.resolve(__dirname, '../src')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                loader: 'babel-loader'
            }
        ]
    }
};
