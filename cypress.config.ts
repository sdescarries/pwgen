import { defineConfig } from 'cypress'

import { pluginConfig } from './cypress/plugins';

export default defineConfig({
  defaultCommandTimeout: 10000,
  env: {
    browserPermissions: {
      clipboard: 'allow',
      javascript: 'allow',
    },
  },
  retries: {
    openMode: 0,
    runMode: 2,
  },
  screenshotsFolder: 'results/cypress/screenshots',
  video: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents: pluginConfig,
    baseUrl: 'http://localhost:5173/pwgen/',
  },
})
