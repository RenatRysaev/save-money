const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const { pwaManifest } = require('../src/manifest.js')

const src = resolve('src')

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
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
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
    new WebpackPwaManifest(pwaManifest),
  ],
}
