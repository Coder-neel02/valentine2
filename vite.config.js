
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),tailwindcss(),],
  build: {
    target: 'esnext',    // Ensures modern ES modules
    outDir: 'dist',
  },
  server: {
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/javascript'
    }
  }
});

