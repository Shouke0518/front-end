const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: 'all',
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
    proxy: {
      '/': {
        target: process.env.BACKEND_URL || 'http://localhost:3000',
        changeOrigin: true,
        ws: true  // 支援 WebSocket
      }
    }
  }
})