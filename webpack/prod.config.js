const { resolve } = require('path')
const webpack = require('webpack')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const { pwaManifest } = require('../src/manifest.js')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const CompressionPlugin = require('compression-webpack-plugin')
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
  new WebpackPwaManifest(pwaManifest),
  new BundleAnalyzerPlugin({
    analyzerMode: 'disabled',
    generateStatsFile: true,
  }),
  new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en/),
  new CompressionPlugin({
    algorithm: 'gzip',
  }),
]

module.exports = merge(baseConfig, {
  mode: 'production',

  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].[contenthash].bundle.js',
    path: resolve('build'),
  },

  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: 'babel-loader',
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
