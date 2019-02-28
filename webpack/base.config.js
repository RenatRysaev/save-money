const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const src = resolve('src')

module.exports = {
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
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
      types: resolve(src, 'types'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      hash: true,
      minify: true,
      favicon: resolve('src/assets/favicons/favicon.ico'),
    }),
  ],
}
