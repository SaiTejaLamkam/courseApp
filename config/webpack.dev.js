const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('./helpers');
const webpack = require('webpack');

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',
    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.NamedChunksPlugin(),
        new webpack.NamedModulesPlugin()
    ],
    devServer: {
        contentBase: helpers.root('dist'),
        historyApiFallback: true,
        stats: 'minimal'
    }
});
