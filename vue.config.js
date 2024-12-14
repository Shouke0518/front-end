const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: 'https://back-end-cwng.onrender.com',
    allowedHosts: ['front-end-c4wi.onrender.com'],
  }
})
