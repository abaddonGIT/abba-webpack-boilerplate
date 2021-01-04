const glob = require('glob')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path')
const paths = require('./paths')

module.exports = {
  getAllPugPages: () => {
    const pages = glob.sync(paths.src + '/pug/pages/*.pug')
    const pluginsOptions = []

    pages.forEach((file) => {
      const base = path.basename(file, '.pug')
      pluginsOptions.push(
        new HtmlWebpackPlugin({
          filename: base + '.html',
          template: paths.src + '/pug/pages/' + base + '.pug',
          inject: true,
          custom: (process.env.NODE_ENV === 'development') ?
            'http://localhost:35729/livereload.js' : '',
        })
      )
    })

    return pluginsOptions
  }
}