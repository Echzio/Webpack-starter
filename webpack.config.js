//для путей
const path = require('path');
//const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    // вход
    entry: ['@babel/polyfill', './src/index.js'],
    // выход
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'awesome.js',
        // относительная ссылка на итоговый файл
        publicPath: '/dist/',
    },
    devServer: {
        // для показа ошибки вне консоли
        overlay: true,
        hot: true,       
        port: 9000
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: MiniCssExtractPlugin.loader
                }, {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        plugins: [
                            autoprefixer({
                                browsers: ['ie >= 8', 'last 4 version']
                            })
                        ],
                        sourceMap: true
                    }
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './css/style.css',
        })
    ]
}