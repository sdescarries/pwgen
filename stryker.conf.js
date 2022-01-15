/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  _comment:
    "This config was generated using 'stryker init'. Please take a look at: https://stryker-mutator.io/docs/stryker-js/configuration/ for more information",
  packageManager: "yarn",
  reporters: ["html", "clear-text", "progress", "dashboard"],
  testRunner: "jest",
  coverageAnalysis: "perTest",

  checkers: ["typescript"],
  tsconfigFile: `${__dirname}/tsconfig.json`,
  concurrency: 1,
  testRunner: "jest",
  tempDirName: ".stryker-tmp",
  jest: {
    projectType: "custom",
    configFile: `${__dirname}/jest.config.js`,
    enableFindRelatedTests: false,
  },

  coverageAnalysis: "perTest",
  mutate: ["src/Password/charset.ts"],
  //disableTypeChecks: "src/**/*.{js,ts,jsx,tsx,html,vue}",
};
