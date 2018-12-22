const { resolve } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const merge = require('webpack-merge')

const baseConfig = require('./base.config')

const plugins = [new MiniCssExtractPlugin(), new CleanWebpackPlugin('build')]

module.exports = merge(baseConfig, {
  mode: 'production',

  output: {
    filename: 'bundle.js',
    path: resolve('build'),
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ['babel-loader'],
      },
      {
        test: /\.css/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },

  plugins,
})
