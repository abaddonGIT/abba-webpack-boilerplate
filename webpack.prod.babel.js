"use strict";
const webpack = require('webpack');
const env = require('./environments.config');
const sourcePath = env.sourcePath;
const distPath = env.distPath;
const publicPath = env.publicPath;
//Плагины
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

let plugins = [];

plugins.push(new webpack.LoaderOptionsPlugin({
  minimize: true,
  debug: false
}));

plugins.push(new UglifyJSPlugin({
  uglifyOptions: {
    ie8: false,
  },
  compress: {
    warnings: false,
    screw_ie8: true,
    conditionals: true,
    unused: true,
    comparisons: true,
    sequences: true,
    dead_code: true,
    evaluate: true,
    join_vars: true,
    if_return: true
  },
  output: {
    comments: false
  },
  parallel: {
    cache: true,
    workers: 2,
    ecma: 8,
  }
}));

plugins.push(new CopyWebpackPlugin([
  { from: sourcePath + '/js/vendors/badIe.js', to: distPath + '/js/vendors/badIe.js' },
  { from: sourcePath + '/images/sprite.svg', to: distPath + '/images/sprite.svg'},
  { from: sourcePath + '/favicon/*', to: distPath + '/' }
]));

module.exports = require('./webpack.babel')({
  entry: {
    js: './js/index.app.js',
    vendor: [
      'es6-promise',
      'svg4everybody',
      'jquery'
    ]
  },
  output: {
    publicPath: publicPath
  },
  plugins: plugins
});