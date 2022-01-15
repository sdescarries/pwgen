#!/usr/bin/env node

/**
 * This script merges the coverage reports from Cypress and Jest into a single one,
 * inside the "coverage" folder
 */
const cp = require("child_process");
const fs = require("fs");

const REPORTS_FOLDER = "reports";
const FINAL_OUTPUT_FOLDER = "coverage";

const runOne = (command) => cp.execSync(command, { stdio: "inherit" });
const run = (commands) => commands.forEach(runOne);

const files = {
  jest: "results/jest/coverage-final.json",
  cypress: "results/cypress/coverage-final.json",
};

fs.mkdirSync(".nyc_output", { recursive: true });

const linkFile = ([id, path]) => {
  const target = `.nyc_output/coverage-${id}.json`;
  if (fs.existsSync(target)) {
    fs.unlinkSync(target);
  }
  fs.linkSync(path, `.nyc_output/coverage-${id}.json`);
};

Object.entries(files).forEach(linkFile);

run([
  `nyc merge .nyc_output`,
  `nyc report --reporter text --reporter lcov --report-dir dist/coverage`,
]);
