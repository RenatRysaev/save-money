const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const merge = require('webpack-merge')

const baseConfig = require('./base.config')

const plugins = [
  new CleanWebpackPlugin('build'),
  new HtmlWebpackPlugin({ template: 'src/index.html' }),
  new MiniCssExtractPlugin({
    filename: '[name].[hash].css',
    chunkFilename: '[id].[hash].css',
  }),
]

module.exports = merge(baseConfig, {
  mode: 'production',

  output: {
    filename: 'bundle.js',
    path: resolve('build'),
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
      },
      {
        test: /\.(sass|scss|css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },

  plugins,
})
