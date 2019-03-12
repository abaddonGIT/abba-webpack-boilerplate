/**
 * Created by abaddon on 02.09.2018.
 */
const { PATHS, PORT } = require('./constants');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = require('./webpack.babel')({
  entry: {
    site: `${PATHS.src}/js/index.js`,
  },
  output: {
    publicPath: '/'
  },
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  rules: [
    // Стили
    {
      test: /(\.css|\.scss)$/,
      use: [
        {
          loader: 'style-loader'
        },
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            sourceMap: true,
          }
        },
        {
          loader: 'resolve-url-loader',
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            plugins: (loader) => [
              require('postcss-import')({
                root: loader.resourcePath
              }),
              require('autoprefixer')(),
              require('cssnano')({
                zindex: false,
                reduceIdents: {
                  keyframes: false
                },
                discardUnused: {
                  keyframes: false
                }
              })
            ]
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        },
      ]
    },
  ],
  devServer: {
    contentBase: path.join(process.cwd(), 'src'),
    historyApiFallback: true,
    port: PORT || 3004,
    host: '0.0.0.0',
    compress: false,
    inline: true,
    hot: false,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: {
        green: '\u001b[32m',
      },
    },
  }
});