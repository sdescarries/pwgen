import istanbul from 'vite-plugin-istanbul';
import legacy from '@vitejs/plugin-legacy';
import path from 'path';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
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
    legacy(),
    reactRefresh(),
  ],
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
});
