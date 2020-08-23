const path = require('path');
const webpack = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const Assets = require('./vendors.assets');

module.exports = {
  mode: 'development',
  entry: {
    main: path.join(process.cwd(), 'src/scripts/index.ts'),
    vendor: path.join(process.cwd(), 'src/scripts/vendor.js')
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name: '[name].[ext]',
              outputPath: 'images/',
              publicPath: '/images/'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name: '[name].[ext]',
              outputPath: 'fonts/',
              publicPath: 'fonts/'
            }
          }
        ]
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          'ts-loader',
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/transform-runtime',
              '@babel/plugin-transform-regenerator',
              ['@babel/plugin-proposal-optional-chaining', { 'legacy': true }],
            ],
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WriteFilePlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../src', 'robots.txt'),
          to: path.resolve(__dirname, '../dist', 'robots.txt')
        }
      ]
    }),
    new CopyPlugin({
        patterns: Assets.map((asset) => {
          const {source, destination} = asset;
          return {
            from: path.resolve(__dirname, `../node_modules/${source}`),
            to: path.resolve(__dirname, `../dist/scripts/vendors/${destination}`),
          };
        }),
      }
    ),
    new HtmlWebpackPlugin({
      title: 'home-page',
      filename: 'index.html',
      template: './src/index.html',
      inject: 'head'
    }),
    new HtmlWebpackPlugin({
      title: '404-page',
      filename: '404.html',
      template: './src/404.html',
      inject: 'head'
    }),

    new PreloadWebpackPlugin({
      rel: 'preload',
      as(entry) {
        if (/\.(woff|woff2|ttf|otf)$/.test(entry)) {
          return 'font';
        }
      },
      fileWhitelist: [/\.(woff|woff2|ttf|otf)$/],
      include: 'allAssets'
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer'
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
