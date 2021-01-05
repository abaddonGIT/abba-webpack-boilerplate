const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const PrettierPlugin = require('prettier-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')
const path = require('path')

const paths = require('./paths')
const utils = require('./utils')

module.exports = {
  // Where webpack looks to start building the bundle
  entry: [paths.src + '/index.ts'],

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  // Customize the webpack build process
  plugins: [
    // Generates an HTML file from a template
    ...utils.getAllPugPages(),
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),
    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
    new CopyWebpackPlugin({
        patterns: paths.vendors.map((asset) => {
          const { source, destination } = asset
          return {
            from: path.join(process.cwd(), `node_modules/${source}`),
            to: `assets/${destination}`,
          }
        }),
      },
    ),

    // ESLint configuration
    new ESLintPlugin({
      files: ['.', 'src', 'config'],
      formatter: 'table',
    }),

    // Prettier configuration
    new PrettierPlugin(),
    new SpriteLoaderPlugin(),
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ['pug-loader'],
      },
      {
        test: /\.(tsx|ts)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // JavaScript: Use Babel to transpile JavaScript files
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
          },
        },
      },
      {
        test: /\.svg$/,
        type: 'asset',
        exclude: [path.join(process.cwd(), 'src/images/icons/svg')],
        parser: {
          dataUrlCondition: {
            maxSize: 20 * 1024,
          },
        },
        use: {
          loader: 'svgo-loader',
          options: {
            plugins: [
              { removeTitle: true },
              { removeStyleElement: true },
              { convertColors: { shorthex: false } },
              { convertPathData: false },
            ],
          },
        },
      },
      // Images: Copy image files to build folder
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },

      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf)$/, type: 'asset/inline' },
      {
        test: /\.svg$/,
        include: path.join(process.cwd(), 'src/images/icons/svg'),
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: true,
            }
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                { removeTitle: true },
                { removeStyleElement: true },
                { convertColors: { shorthex: false } },
                { convertPathData: false }
              ]
            }
          },
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
}
