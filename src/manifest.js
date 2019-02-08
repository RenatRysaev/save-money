const { resolve } = require('path')

const pwaManifest = {
  name: 'Save money app',
  short_name: 'Save money app',
  description: 'App for budget planning',
  background_color: '#fff',
  lang: 'en',
  start_url: '/',
  display: 'standalone',
  icons: [
    {
      src: resolve('src/assets/favicons/favicon-16x16.png'),
      sizes: '16x16',
      type: 'png',
    },
    {
      src: resolve('src/assets/favicons/favicon-32x32.png'),
      sizes: '32x32',
      type: 'png',
    },
    {
      src: resolve('src/assets/favicons/android-chrome-192x192.png'),
      sizes: '192x192',
      type: 'png',
    },
    {
      src: resolve('src/assets/favicons/android-chrome-512x512.png'),
      sizes: '512x512',
      type: 'png',
    },
    {
      src: resolve('src/assets/favicons/mstile-150x150.png'),
      sizes: '150x150',
      type: 'png',
    },
    {
      src: resolve('src/assets/favicons/apple-touch-icon.png'),
      sizes: '180x180',
      type: 'png',
    },
    {
      src: resolve('src/assets/favicons/safari-pinned-tab.svg'),
      sizes: '512x512',
      type: 'svg',
    },
  ],
}

module.exports = { pwaManifest }
