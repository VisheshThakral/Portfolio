import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@gsap/react'], // Mark as external
      output: {
        globals: {
          '@gsap/react': 'ReactGSAP' // Provide global variable name
        }
      }
    },
  },
  optimizeDeps: {
    include: ['@gsap/react', 'gsap']
  }
})