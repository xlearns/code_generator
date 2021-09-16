import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    host:'127.0.0.1',
    port:3333,
    strictPort: false,
    https: false,
  },
  resolve:{
    alias:{
      '@': path.resolve(__dirname, './src')
    }
  },
  build:{
    outDir:'dist'
  }
   // 反向代理
    // proxy: {
    //   '/admin': {
    //     target: 'http://api.vite-admin.com',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/admin/, '')
    //   },
    // }
})
