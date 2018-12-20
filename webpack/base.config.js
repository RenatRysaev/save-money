const { resolve } = require('path')
const src = resolve('src')

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      root: src,
      store: resolve(src, 'store'),
      pages: resolve(src, 'pages'),
      components: resolve(src, 'components'),
      containers: resolve(src, 'containers'),
      constants: resolve(src, 'constants'),
      hoc: resolve(src, 'hoc'),
      utils: resolve(src, 'utils'),
      api: resolve(src, 'api'),
    },
  },
}
