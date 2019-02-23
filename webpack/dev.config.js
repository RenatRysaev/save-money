const { resolve } = require('path')
// const webpack = require('webpack')
const merge = require('webpack-merge')

const baseConfig = require('./base.config')
const { STYLE_LOADERS } = require('./utils')

const plugins = []

module.exports = merge(baseConfig, {
  mode: 'development',

  entry: resolve('src/index.tsx'),

  output: {
    filename: 'bundle.js',
    path: resolve('/build'),
    publicPath: '/',
  },

  devtool: 'eval-source-map',

  devServer: {
    port: 9000,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: 'ts-loader',
        },
      },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      {
        test: /\.(sass|scss|css)$/,
        exclude: /\.module\.(sass|scss|css)$/,
        use: [STYLE_LOADERS.STYLE, STYLE_LOADERS.CSS, STYLE_LOADERS.SASS],
      },
      {
        test: /\.module\.(sass|scss|css)$/,
        use: [
          STYLE_LOADERS.STYLE,
          STYLE_LOADERS.CSS_MODULE,
          STYLE_LOADERS.SASS,
        ],
      },
    ],
  },

  plugins,
})
