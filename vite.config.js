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
  // Add this to fix @gsap/react issue:
  build: {
    rollupOptions: {
      external: ['@gsap/react'] // Explicitly tell Rollup about this package
    }
  },
  optimizeDeps: {
    include: ['@gsap/react', 'gsap'] // Ensure these are pre-bundled
  }
})
