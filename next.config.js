const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  mode: 'production',
  disable: false,
})

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: [
      'api.lorem.space',
      'cdn.shopify.com',
      'placeimg.com',
      'elcomercio.pe',
      'user-images.githubusercontent.com',
      'upload.wikimedia.org',
      'github.com',
      'cdn.lorem.space',
      'www.google.com',
      'api.escuelajs.co',
      'upcdn.io',
      'placeimh.com',
      'i.picsum.photos',
      'static.platzi.com',
    ],
  },
})
