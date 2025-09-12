import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT) || 5173,
    allowedHosts: ['aganitha-2.onrender.com'], // allow Render domain
  },
  preview: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT) || 4173,
    allowedHosts: ['aganitha-2.onrender.com'], // allow Render domain for preview
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})
