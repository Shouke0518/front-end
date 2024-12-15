const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: 'all',
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
    proxy: {
      '/users': {
        target: "https://back-end-cwng.onrender.com" || 'http://localhost:3000',
        changeOrigin: true,
        ws: true
      },
      '/auth': {
        target: "https://back-end-cwng.onrender.com" || 'http://localhost:3000',
        changeOrigin: true,
        ws: true
      },
      '/db': {   // 如果你有 /db 開頭的請求
        target: "https://back-end-cwng.onrender.com" || 'http://localhost:3000',
        changeOrigin: true,
        ws: true
      },
      '/imgur': { // 如果你有 /imgur 開頭的請求
        target: "https://back-end-cwng.onrender.com" || 'http://localhost:3000',
        changeOrigin: true,
        ws: true
      },
      '/crypto': { // 如果你有 /crypto 開頭的請求
        target: "https://back-end-cwng.onrender.com" || 'http://localhost:3000',
        changeOrigin: true,
        ws: true
      },
      '/mail': {
        target: "https://back-end-cwng.onrender.com" || 'http://localhost:3000',
        changeOrigin: true,
        ws: true
      },
    }
  }
})