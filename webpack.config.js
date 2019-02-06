const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const webpack = require('webpack');

module.exports = {
    entry: {
        main: ['@babel/polyfill', './src/index.js'],
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '',
    },
    devServer: {
        overlay: true,
        hot: true,
        port: 9000,
    },
    module: {
        rules: [

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [

                    {
                        loader: 'style-loader',
                    }, {
                        loader: MiniCssExtractPlugin.loader,                      
                    }, {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,                            
                        }
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                postcssPresetEnv({
                                    state : 0,
                                    browsers: ['>1%'],
                                    autoprefixer: { grid: true }
                                })
                            ],
                            sourceMap: true,
                        }
                    }, {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader',
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}
