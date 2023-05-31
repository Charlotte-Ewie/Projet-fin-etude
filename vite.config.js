import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 1234,
  },
  // Création d'un alias pour les imports
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
});
