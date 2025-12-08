import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    emptyOutDir: true,
    lib:{
     entry: resolve(__dirname, 'src/main.tsx'),
     name: 'TourGuideWidget',
     formats: ['iife'],
     fileName: () => 'widget.js', 
    }
  }
})
