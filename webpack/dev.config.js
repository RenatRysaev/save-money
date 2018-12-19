const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


const plugins = [
  new HtmlWebpackPlugin({
    template: 'public/index.html',
  }),
]

module.exports = {
  mode: 'development',

  entry: resolve('src'),

  output: {
    filename: 'bundle.js',
    path: resolve('public'),
    publicPath: '/',
  },

  devtool: 'eval-source-map',

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

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
}
