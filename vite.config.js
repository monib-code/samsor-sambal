import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: 'resources/js/react', // مسیر اصلی پروژه React
  base: '/',
  build: {
    outDir: '../../../public/build', // محل خروجی فایل build شده
    emptyOutDir: true,
  },
  server: {
    port: 5173,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'resources/js/react'),
    },
  },
});
