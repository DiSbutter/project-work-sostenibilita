import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true, // Allow all hosts to prevent "Invalid Host header" loops
    hmr: process.env.REPL_ID || process.env.REPL_SLUG ? {
      clientPort: 443
    } : undefined
  }
})
