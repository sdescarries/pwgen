#!/usr/bin/env node

/**
 * This script merges the coverage reports from Cypress and Jest into a single one,
 * inside the 'coverage' folder
 */
import cp from 'child_process';
import fs from 'fs';

const REPORTS_FOLDER = 'reports';
const FINAL_OUTPUT_FOLDER = 'coverage';

function runOne(command) {
  try {
    cp.execSync(command, { stdio: 'inherit' });
  } catch ({ message }) {
    console.error(message);
    // FIXME
    // process.exit(1);
  }
}

const run = (commands) => commands.forEach(runOne);

const files = {
  jest: 'results/jest/coverage-final.json',
  cypress: 'results/cypress/coverage-final.json',
};

fs.mkdirSync('.nyc_output', { recursive: true });
if (fs.existsSync('.nyc_output/coverage.json')) {
  fs.unlinkSync('.nyc_output/coverage.json');
}

const normalize = (obj, where = '') =>
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === "number") {

      if (value < 0) {
        console.log(`${where}.${key}: ${value} => 0`);
        obj[key] = 0;
      }
    } else if (value == null) {
    } else if (typeof value === "object") {
      normalize(value, `${where}.${key}`);
    }
  })

function linkFile([id, path]) {
  const target = `results/cleaned/coverage-${id}.json`;

  fs.mkdirSync('results/cleaned', { recursive: true });
  if (fs.existsSync(target)) {
    fs.unlinkSync(target);
  }

  const fileData = JSON.parse(fs.readFileSync(path));
  normalize(fileData, id);
  fs.writeFileSync(target, JSON.stringify(fileData, null, 2));
}

Object.entries(files).forEach(linkFile);

const nycMerge = `nyc merge results/cleaned .nyc_output/coverage.json`;
const nycReport = [
  'nyc report',
  '--skip-empty',
  '--check-coverage',
  '--reporter text',
  '--reporter lcov',
  '--include src',
  '--lines 80',
  '--report-dir dist/coverage',
].join(' ');

run([
  nycMerge,
  nycReport,
]);
