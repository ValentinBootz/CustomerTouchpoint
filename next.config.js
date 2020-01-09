const withCSS = require('@zeit/next-css')
// const withImages = require('next-images')
// module.exports = withImages(withCSS())

module.exports = withCSS({
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpg|svg)$/,
      use: {
        loader: 'url-loader',
        options: {
          fallback: 'file-loader',
          limit: 100000
        }
      }
    })
    return config
  }
})