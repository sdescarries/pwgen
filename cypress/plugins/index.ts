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

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
export const pluginConfig = (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Cypress.PluginConfigOptions => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  registerCodeCoverageTasks(on, config);

  // IMPORTANT to return the config object
  // with the any changed environment variables
  return config;
};
