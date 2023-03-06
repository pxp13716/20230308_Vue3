const { defineConfig } = require('@vue/cli-service')
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: [],
  devServer: {
    port: 3000
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/'),
        '@components': path.resolve(__dirname, 'src/components/'),
        '@views': path.resolve(__dirname, 'src/views/'),
        '@images': path.resolve(__dirname, 'src/assets/images/'),
        '@api': path.resolve(__dirname, 'src/api/'),
        '@modules': path.resolve(__dirname, 'src/modules/'),
      },
      extensions: ['vue']
    }
  }
})
