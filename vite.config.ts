import istanbul from 'vite-plugin-istanbul';
import legacy from '@vitejs/plugin-legacy';
import path from 'path';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/pwgen/',
  build: {
    sourcemap: true,
  },
  esbuild: {
    // automatically import React in jsx files
    jsxInject: `import React from 'react'`,
  },
  plugins: [
    istanbul({
      include: 'src/*',
      checkProd: true,
    }),
    VitePWA(),
    legacy(),
    react(),
  ],
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
});
