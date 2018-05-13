const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const helpers = require('./helpers');

module.exports = {
    entry: {
        vendor: './src/vendor.js',
        app: './src/app.module.js',
        styles: "./src/styles.scss"
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/[name].[hash].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader?minimize",
                })
            },
            {
                test: /\.worker\.js$/,
                use: { loader: 'worker-loader' }
            },
            {
                test: /\.js$/,
                exclude: /node_modules|\.worker\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                        plugins: ['transform-object-rest-spread']
                    }
                }
            }
        ]
    },
    resolve: {
        alias: {
            Shared: path.resolve(helpers.root(), 'src/shared/')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        }),
        new webpack.EnvironmentPlugin({
            // BUCKET: JSON.stringify(process.env.BUCKET),
            // ACCESSKEYID: JSON.stringify(process.env.ACCESSKEYID),
            // SECRETACCESSKEY: JSON.stringify(process.env.SECRETACCESSKEY),
            // REGION: JSON.stringify(process.env.REGION)
        })
    ]
};
