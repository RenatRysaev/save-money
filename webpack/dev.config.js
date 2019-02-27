const { resolve } = require('path')
const merge = require('webpack-merge')
const AutoDllPlugin = require('autodll-webpack-plugin')

const baseConfig = require('./base.config')
const { STYLE_LOADERS } = require('./utils')

const plugins = [
  new AutoDllPlugin({
    inject: true,
    debug: true,
    filename: '[name]_[hash].js',
    path: './dll',
    entry: {
      vendor: ['react', 'react-dom', 'lodash'],
    },
  }),
]

module.exports = merge(baseConfig, {
  mode: 'development',

  entry: resolve('src/index.tsx'),

  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: resolve('/build'),
    publicPath: '/',
  },

  devtool: 'inline-source-map',

  devServer: {
    port: 9000,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx|scss)$/,
        use: {
          loader: 'cache-loader',
        },
      },
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
