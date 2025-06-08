import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@gsap/react', 'gsap']
  },
  build: {
    commonjsOptions: {
      include: [/@gsap\/react/, /node_modules/]
    }
  }
})
