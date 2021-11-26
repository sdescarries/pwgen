import path from "path";
import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import reactRefresh from "@vitejs/plugin-react-refresh";
import istanbul from 'vite-plugin-istanbul';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/pwgen/',
  plugins: [
    istanbul({
      include: 'src/*',
      exclude: ['node_modules', 'test/'],
      extension: [ '.js', '.ts', '.vue' ],
      requireEnv: true,
    }),
    legacy(), 
    reactRefresh(),
  ],
  esbuild: {
    // automatically import React in jsx files
    jsxInject: `import React from 'react'`,
  },
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "src")}/`,
    },
  },
});
