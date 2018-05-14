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
    // sassLoader: {
    //     includePaths: [path.resolve(__dirname, "./src")]
    // },
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
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: "url-loader?limit=10000&mimetype=application/font-woff" 
              },
              { 
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: "file-loader" 
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
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader", // compiles Sass to CSS
                    options: {
                    //   includePaths: [
                    //     join(dirname(module.filename), 'node_modules')
                    //   ]
                    }
                }]
            },
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/',    // where the fonts will go
                    publicPath: '../'       // override the default path
                  }
                }]
              },
        ]
    },
    resolve: {
        alias: {
            Shared: path.resolve(helpers.root(), 'src/shared/')
        }
    },
    plugins: [
        // new ExtractTextPlugin('bundle.css'),
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
