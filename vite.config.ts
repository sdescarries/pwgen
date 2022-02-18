import istanbul from 'vite-plugin-istanbul';
import legacy from '@vitejs/plugin-legacy';
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
    VitePWA({

      includeAssets: ['favicon.svg', 'apple-touch-icon.png', 'pwgen.png'],
      manifest: {
        lang: 'en-us',
        name: 'Secure Password Generator',
        short_name: 'pwgen',
        description: 'Secure Password Generator',
        start_url: '/pwgen/',
        background_color: '#161b1d',
        theme_color: '#e2e7e9',
        orientation: 'any',
        display: 'standalone',
        icons: [
          {
            src: '/pwgen/favicon.svg',
            sizes: '200x200',
            type: 'image/svg',
            purpose: 'any'
          },
          {
            src: '/pwgen/apple-touch-icon.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/pwgen/pwgen.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    }),
    legacy(),
    reactRefresh(),
  ],
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
});
