// basic vars
// операция с путями
const path = require('path');
const webpack = require('webpack');

// доп. плагины или модули
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// module settings
module.exports = {
    // базовый путь к проекту
    context: path.resolve(__dirname, 'src'),

    // настройка точек входа в js
    entry: {
        // основной файл приложения
        app: [
            './js/app.js',
            './scss/style.scss'
        ],
    },

    // путь для собранных файлов
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist/js/'),
        publicPath: '../'
    },

    // dev server configuration
    devServer: {
        contentBase: './app',
        port: 3333,
        compress: true
    },

    module: {
        rules: [{
            test: /\.(css|sass|scss)$/,
            include: path.resolve(__dirname, '.scss/scss'),
            use: ExtractTextPlugin.extract({
                use: 'css-loader!sass-loader',
                fallback: 'style-loader'
            }),
        }]
    },

    plugins: [
        new ExtractTextPlugin({
            filename: '../dist/css/style.css',
            allChunks: true,
        }),
    ]
};