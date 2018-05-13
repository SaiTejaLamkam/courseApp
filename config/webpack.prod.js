const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('./helpers');
const webpack = require('webpack');

module.exports = webpackMerge(commonConfig, {
    // devtool: 'source-map',
    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: '[name].[chunkhash].js',
        // chunkFilename: '[id].chunk.js'
    },
    
    plugins: [
        new ExtractTextPlugin('[name].[contenthash].css'),
        new webpack.HashedModuleIdsPlugin({
            hashFunction: 'sha256',
            hashDigest: 'hex',
            hashDigestLength: 20
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: {
                drop_console: true
            },
            exclude: /\.worker\.js$/,
            output: {
                comments: false
            }
        })
    ]
});
