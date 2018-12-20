const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')

const baseConfig = require('./base.config')

const plugins = [
  new HtmlWebpackPlugin({
    template: 'public/index.html',
  }),
]

module.exports = merge(baseConfig, {
  mode: 'development',

  entry: resolve('src'),

  output: {
    filename: 'bundle.js',
    path: resolve('public'),
    publicPath: '/',
  },

  devtool: 'eval-source-map',

  devServer: {
    port: 9000,
    compress: true,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ['babel-loader'],
      },
    ],
  },

  plugins,
})
