import { fileURLToPath, URL } from 'node:url'
import { resolve as pathResolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base: '/ninetosixfitvibes', // Base URL for the app without trailing slash
  server: {
    port: 3000 // Development server port
  },
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    outDir: 'dist', // Output directory
    rollupOptions: {
      input: pathResolve(__dirname, 'index.html') // Entry point for the build
    }
  }
})
