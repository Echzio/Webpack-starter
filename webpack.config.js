//для путей
const path = require('path');

const conf = {
    // вход
    entry: './src/index.js',
    // выход
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'awesome.js',
        // относительная ссылка на итоговый файл
        publicPath: 'dist/',
    }
};

// экспорт
module.exports = conf;