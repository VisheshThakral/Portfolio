import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        // Split the heavy 3D / animation libs into their own cached chunks so
        // they load in parallel and below-the-fold ones (globe) stay lazy.
        // React itself is intentionally left in the entry chunk: splitting it
        // out (and stranding its `scheduler` dep) causes a chunk init-order
        // crash ("Cannot set properties of undefined (setting 'Children')").
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (id.includes('react-globe.gl') || id.includes('three-globe')) return 'globe'
          if (id.includes('postprocessing')) return 'postprocessing'
          if (id.includes('@react-three')) return 'r3f'
          if (id.includes('/three/') || id.includes('three/build')) return 'three'
          if (id.includes('gsap')) return 'gsap'
        },
      },
    },
  },
})
