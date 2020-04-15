const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const webpack = require('webpack');
const webpackBar = require('webpackbar');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => ({
  entry: {
    main: ['@babel/polyfill', './src/index.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '',
  },
  devtool: argv.mode === 'development' ? 'source-map' : false,
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
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          argv.mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                postcssPresetEnv({
                  stage: 0,
                  autoprefixer: {
                    grid: true,
                  },
                }),
              ],
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|webp)$/,
        loader: ['url-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot||otf)$/,
        use: ['file-loader?name=./assets/fonts/[name].[ext]'],
      },
      {
        test: /\.(svg)$/,
        use: ['file-loader?name=./assets/images/[name].[ext]'],
      },
      {
        test: /\.(html)$/,
        loader: 'html-loader',
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        extractComments: false,
      }),
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 10000,
      maxSize: 250000,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      public: path.resolve(__dirname, 'public'),
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './assets/styles/[name].css',
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpackBar({ color: 'blue' }),
    new CopyPlugin([{ from: 'public/assets', to: 'assets' }]),
  ],
});
