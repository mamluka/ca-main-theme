const Path = require('path');
const Webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');
const WriteAssetsWebpackPlugin = require('write-assets-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-eval-source-map',
    cache: false,
    optimization: {
        minimize: false
    },
    plugins: [
        new Webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new MiniCssExtractPlugin({
            filename: 'css/all.css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js)$/,
                include: Path.resolve(__dirname, '../src'),
                enforce: 'pre',
                loader: 'eslint-loader',
                options: {
                    emitWarning: true,
                }
            },
            {
                test: /\.(js)$/,
                include: Path.resolve(__dirname, '../src'),
                loader: 'babel-loader'
            },
            {
                test: /\.(s?css)|(sass)$/i,
                use: ['style-loader', 'css-loader?sourceMap=true', 'sass-loader']
            }
        ]
    }
});
