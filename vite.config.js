import { defineConfig } from 'vite'
import tailwindcss from 'tailwindcss'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/',
  plugins: [react(), tailwindcss()],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  build: {
    rollupOptions: {
      external: '/portfolio/assets',
      output: {
        assetFileNames: (assetInfo) => {
          if(assetInfo.name == 'style.css'){
            return '/portfolio/styles/simple.css';
          } 
          return assetInfo.name;
        }
      }
    },
  },
})
