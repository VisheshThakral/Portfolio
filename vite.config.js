import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  },
  optimizeDeps: {
    include: [
      '@gsap/react',
      'gsap',
      'react-globe.gl' // Add this line
    ],
  },
  build: {
    rollupOptions: {
      external: ['@gsap/react'], // Keep existing if needed
    },
  },
})
