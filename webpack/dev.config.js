const { resolve } = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const baseConfig = require('./base.config')
const { STYLE_LOADERS } = require('./utils')

const plugins = [new webpack.HotModuleReplacementPlugin()]

module.exports = merge(baseConfig, {
  mode: 'development',

  entry: resolve('src'),

  output: {
    filename: 'bundle.js',
    path: resolve('/build'),
    publicPath: '/',
  },

  devtool: 'eval-source-map',

  devServer: {
    port: 9000,
    hot: true,
    historyApiFallback: true,
    compress: true,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
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
