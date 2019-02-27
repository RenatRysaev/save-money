const { resolve } = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
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
  new BundleAnalyzerPlugin({
    analyzerMode: 'disabled',
    generateStatsFile: true,
  }),
]

module.exports = merge(baseConfig, {
  mode: 'production',

  output: {
    filename: 'bundle.js',
    path: resolve('build'),
  },

  optimization: {
    minimizer: [new UglifyJsPlugin({}), new OptimizeCSSAssetsPlugin({})],
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
