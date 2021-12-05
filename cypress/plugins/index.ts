/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */

/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.ts can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

const registerCodeCoverageTasks = require('@cypress/code-coverage/task');
const { cypressBrowserPermissionsPlugin } = require('cypress-browser-permissions');

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const pluginConfig: Cypress.PluginConfig = (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  config = registerCodeCoverageTasks(on, config);
  config = cypressBrowserPermissionsPlugin(on, config);

  // IMPORTANT to return the config object
  // with the any changed environment variables
  return config;
};

export default pluginConfig;
