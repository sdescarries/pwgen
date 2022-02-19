import istanbul from 'vite-plugin-istanbul';
import legacy from '@vitejs/plugin-legacy';
//import manifest from './manifest.json';
import path from 'path';
import reactRefresh from '@vitejs/plugin-react-refresh';
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
    VitePWA(

      /*{
      includeAssets: [
        'favicon.svg',
        'apple-touch-icon.png',
        'pwgen.png'
      ],
      manifest: manifest as any,
    } */

    ),
    legacy(),
    reactRefresh(),
  ],
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
});
