/**
 * Created by abaddon on 01.09.2018.
 */
const { PATHS } = require('./constants');
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
// Плагины
let plugins = [];
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
plugins.push(
  new CleanWebpackPlugin('dist', {
    root: process.cwd()
  }),
  new MiniCssExtractPlugin({
    filename: 'css/style.css',
  }),
  new webpack.ProvidePlugin({
    '$': 'jquery',
    'jQuery': "jquery",
    'window.jQuery': 'jquery',
    'window.$': 'jquery',
    'SvgEvery': 'svg4everybody',
  })
);
fs.readdirSync(PATHS.src).forEach(file => {
  if (file.indexOf('.pug') !== -1) {
    plugins.push(new HtmlWebpackPlugin({
      inject: false,
      filename: file.replace('pug', 'html'),
      template: './src/' + file,
      hash: true
    }));
  }
});

module.exports = (options) => ({
  entry: options.entry,
  output: Object.assign({
    path: PATHS.dist,
    filename: '[name].js',
  }, options.output),
  plugins: options.plugins.concat(plugins),
  mode: options.mode,
  module: {
    rules: [
      // Шаблоны
      {
        test: /\.(pug)$/,
        use: [
          {
            loader: 'html-loader'
          },
          {
            loader: 'pug-html-loader'
          }
        ]
      },
      // Скрипты
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              '@babel/transform-runtime',
              '@babel/plugin-proposal-class-properties'
            ],
            presets: ['@babel/env']
          }
        }
      },
      // Изображения
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      },
      // Шрифты
      {
        test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: '10000',
            name: 'css/webfonts/[name].[ext]'
          }
        }]
      },
    ].concat(options.rules)
  },
  resolve: {
    modules: [path.resolve('./src'), 'node_modules', 'images'],
  },
  devServer: options.devServer || {}
});