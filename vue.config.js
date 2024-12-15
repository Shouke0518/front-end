const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: 'all',
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
    proxy: {
      '/users': {
        target: VUE_APP_BACKEND_URL || 'http://localhost:3000',
        changeOrigin: true,
        ws: true
      },
      '/auth': {
        target: VUE_APP_BACKEND_URL || 'http://localhost:3000',
        changeOrigin: true,
        ws: true
      },
      '/db': {   // 如果你有 /db 開頭的請求
        target: VUE_APP_BACKEND_URL || 'http://localhost:3000',
        changeOrigin: true,
        ws: true
      },
      '/imgur': { // 如果你有 /imgur 開頭的請求
        target: VUE_APP_BACKEND_URL || 'http://localhost:3000',
        changeOrigin: true,
        ws: true
      },
      '/crypto': { // 如果你有 /crypto 開頭的請求
        target: VUE_APP_BACKEND_URL || 'http://localhost:3000',
        changeOrigin: true,
        ws: true
      },
      '/mail': {
        target: VUE_APP_BACKEND_URL || 'http://localhost:3000',
        changeOrigin: true,
        ws: true
      },
    }
  }
})