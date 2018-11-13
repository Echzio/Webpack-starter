// basic vars
// операция с путями
const path = require('path');
const webpack = require('webpack');

// доп. плагины или модули


// module settings
module.exports = {
    // базовый путь к проекту
    context: path.resolve(__dirname, 'src'),

    // настройка точек входа в js
    entry: {
        // основной файл приложения
        app: [
            './js/app.js'
        ],
    },

    // путь для собранных файлов
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist/js/'),
        publicPath: '../'
    },

    // dev server configuration
    devServer: {},
};