const { resolve } = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const baseConfig = require('./base.config')
const { STYLE_LOADERS } = require('./utils')

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new ForkTsCheckerWebpackPlugin({
    tsconfig: './tsconfig.json',
    tslint: './tslint.json',
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
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          { loader: 'cache-loader' },
          { loader: 'thread-loader', options: { workerParallelJobs: 2 } },
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
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
