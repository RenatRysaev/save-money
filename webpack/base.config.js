const { resolve } = require('path')
const WorkboxPlugin = require('workbox-webpack-plugin')

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
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
}
