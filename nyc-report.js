#!/usr/bin/env node

/**
 * This script merges the coverage reports from Cypress and Jest into a single one,
 * inside the 'coverage' folder
 */
const cp = require('child_process');
const fs = require('fs');

const REPORTS_FOLDER = 'reports';
const FINAL_OUTPUT_FOLDER = 'coverage';

const runOne = (command) => cp.execSync(command, { stdio: 'inherit' });
const run = (commands) => commands.forEach(runOne);

const files = {
  jest: 'results/jest/coverage-final.json',
  cypress: 'results/cypress/coverage-final.json',
};

fs.mkdirSync('.nyc_output', { recursive: true });
if (fs.existsSync('.nyc_output/coverage.json')) {
  fs.unlinkSync('.nyc_output/coverage.json');
}

const linkFile = ([id, path]) => {
  const target = `results/coverage-${id}.json`;
  if (fs.existsSync(target)) {
    fs.unlinkSync(target);
  }
  fs.linkSync(path, `results/coverage-${id}.json`);
};

Object.entries(files).forEach(linkFile);

const nycMerge = `nyc merge results/ .nyc_output/coverage.json`;
const nycReport = [
  'nyc report',
  '--skip-empty',
  '--check-coverage',
  '--reporter text',
  '--reporter lcov',
  '--include src',
  '--report-dir dist/coverage',
].join(' ');

run([nycMerge, nycReport]);
