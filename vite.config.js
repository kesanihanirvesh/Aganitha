import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',                  // allow external connections (needed for Render)
    port: parseInt(process.env.PORT) || 5173, // use Render's PORT or default
  },
  preview: {
    host: '0.0.0.0',                  // for `vite preview` command in production
    port: parseInt(process.env.PORT) || 4173,
  },
  build: {
    outDir: 'dist',                   // output folder for production build
    sourcemap: true,                  // optional, useful for debugging
  },
})
