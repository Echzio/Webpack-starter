// basic vars
// операция с путями
const path = require('path');
const webpack = require('webpack');

// доп. плагины или модули
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
        contentBase: './app'
    },

    module: {
        rules: [{
            // если webpack находит scss документы, то
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                use: [{
                        loader: 'css-loader',
                        option: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        option: {
                            sourceMap: true
                        }
                    }
                ],
                fallback: 'style-loader',
            })
        }],

    },

    plugins: [
        new ExtractTextPlugin(
            './css/style.css'
        ),
    ],
}