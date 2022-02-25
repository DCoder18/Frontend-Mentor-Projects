const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pages: {
    index: {
      entry: './src/pages/Home/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Home | Audiophile',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
  },
})
