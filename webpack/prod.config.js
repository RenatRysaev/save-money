const { resolve } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')
const merge = require('webpack-merge')

const baseConfig = require('./base.config')
const { STYLE_LOADERS } = require('./utils')

const plugins = [
  new MiniCssExtractPlugin({
    filename: '[name].[hash].css',
    chunkFilename: '[id].[hash].css',
  }),
  new WorkboxPlugin.GenerateSW({
    clientsClaim: true,
    skipWaiting: true,
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
        test: /\.(ts|tsx)$/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.(sass|scss|css)$/,
        exclude: /\.module\.(sass|scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          STYLE_LOADERS.CSS,
          STYLE_LOADERS.SASS,
        ],
      },
      {
        test: /\.module\.(sass|scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          STYLE_LOADERS.CSS_MODULE,
          STYLE_LOADERS.SASS,
        ],
      },
    ],
  },

  plugins,
})
