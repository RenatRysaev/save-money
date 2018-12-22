const { resolve } = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const baseConfig = require('./base.config')

const plugins = [
  new HtmlWebpackPlugin({ template: 'src/index.html' }),
  new webpack.HotModuleReplacementPlugin(),
]

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
        test: /\.(sass|scss|css)$/,
        use: [
          {
            loader: 'style-loader',
            options: { hmr: true },
          },
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },

  plugins,
})
