import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // Ensure .jsx is included
  },
  plugins: [react()],
  server: {
    proxy: {
      '/products': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        secure: false,
      },
      // ⬇️ Added this new proxy entry so that single product requests (/product/:id) get sent to Django
      // '/product': {  
      //   target: 'http://127.0.0.1:8000',
      //   changeOrigin: true,
      //   secure: false,
      // },
    }
  }
})
