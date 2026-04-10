import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Add this line for production builds
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('@mui/') || id.includes('@emotion/'))     return 'mui';
            if (id.includes('framer-motion'))                         return 'framer-motion';
            if (id.includes('react-markdown') || id.includes('remark-breaks')
                || id.includes('micromark') || id.includes('mdast')
                || id.includes('unist') || id.includes('devlop'))     return 'markdown';
            if (id.includes('react-dom'))                             return 'vendor';
            if (id.includes('react-router') || id.includes('react-helmet')
                || id.includes('@remix-run'))                         return 'vendor';
          }
        },
      },
    },
  },
  ssr: {
    // Bundle all dependencies into the SSR output (prerender-only, not a live server)
    noExternal: true,
  },
})
