import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: process.env.NODE_ENV === 'production'
          ? "https://sofiz-creation-e-com.onrender.com"
          : "http://localhost:5000",
        changeOrigin: true
      }
    }
  }
})
