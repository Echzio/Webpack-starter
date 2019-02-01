const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    index: './src/modules/index.js',
    './about/index': './src/modules/about.js',
    common: './src/modules/common.js',
    './contacts/index': './src/modules/contacts.js',
    './courses/index': './src/modules/courses.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.pug$/,
        use: [
          'html-loader',
          {
            loader: 'pug-html-loader',
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '/assets/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(woff2?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '/assets/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: './src/pug/pages/index.pug',
      filename: 'index.html',
      chunks: ['common', 'index'],
    }),
    new HtmlWebpackPlugin({
      template: './src/pug/pages/courses.pug',
      filename: './courses/index.html',
      chunks: ['common', './courses/index'],
    }),
    new HtmlWebpackPlugin({
      template: './src/pug/pages/about.pug',
      filename: './about/index.html',
      chunks: ['common', './about/index'],
    }),
    new HtmlWebpackPlugin({
      template: './src/pug/pages/contacts.pug',
      filename: './contacts/index.html',
      chunks: ['common', './contacts/index'],
    }),
    new BrowserSyncPlugin({
      files: 'dist/**/*.*',
      hostname: 'localhost',
      port: 2000,
      server: { baseDir: ['dist'] },
      reloadDelay: 50,
      injectChanges: false,
      reloadDebounce: 500,
      reloadOnRestart: true,
    }),
    new ExtractTextPlugin({ filename: '[name].css' }),
  ],
};
