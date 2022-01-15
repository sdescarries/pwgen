import path from 'path';
import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import reactRefresh from '@vitejs/plugin-react-refresh';

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
    legacy(),
    reactRefresh(),
  ],
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
});
