const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const { pwaManifest } = require('../src/manifest.js')

const src = resolve('src')

module.exports = {
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
    alias: {
      store: resolve(src, 'store'),
      pages: resolve(src, 'pages'),
      components: resolve(src, 'components'),
      containers: resolve(src, 'containers'),
      constants: resolve(src, 'constants'),
      hoc: resolve(src, 'hoc'),
      utils: resolve(src, 'utils'),
      api: resolve(src, 'api'),
      routes: resolve(src, 'routes'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      hash: true,
      minify: true,
      favicon: resolve('src/assets/favicons/favicon.ico'),
    }),
    new WebpackPwaManifest(pwaManifest),
  ],
}
