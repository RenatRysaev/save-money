const STYLE_LOADERS = {
  CSS: { loader: 'css-loader' },
  CSS_MODULE: {
    loader: 'css-loader',
    options: {
      modules: true,
      localIdentName: '[name]__[local]___[hash:base64:5]',
    },
  },
  STYLE: {
    loader: 'style-loader',
    options: { hmr: true },
  },
  SASS: {
    loader: 'sass-loader',
  },
}

module.exports = {
  STYLE_LOADERS,
}
