const { resolve } = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const baseConfig = require('./base.config')

const plugins = [
  new HtmlWebpackPlugin({ template: 'public/index.html' }),
  new webpack.HotModuleReplacementPlugin(),
  new MiniCssExtractPlugin(),
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
    hot: true,
    compress: true,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ['babel-loader'],
      },
      {
        test: /\.css/,
        use: [
          { loader: 'css-hot-loader' },
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
        ],
      },
    ],
  },

  plugins,
})
