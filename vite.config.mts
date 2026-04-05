import istanbul from 'vite-plugin-istanbul';
import path from 'node:path'
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  base: '/pwgen/',
  build: {
    sourcemap: true,
  },
  esbuild: {
    // automatically import React in jsx files
    jsxInject: 'import React from \'react\'',
  },
  plugins: [
    istanbul({
      include: 'src/*',
      checkProd: true,
    }),
    VitePWA(),
    react(),
  ],
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
});
