/* globals Cypress, before, after, cy */
/* eslint-env browser */
const { CONFIG_KEY } = require('../../config');

/**
 * Check if config in `Cypress.env` is stringified JSON.
 * If so parse it and set the parsed value back in `Cypress.env`.
 */
function fixConfig() {
  if (typeof Cypress === 'undefined') {
    throw new Error('Please use from within Cypress.io');
  }

  if (typeof Cypress.expose(CONFIG_KEY) === 'string') {
    Cypress.expose(CONFIG_KEY, JSON.parse(Cypress.expose(CONFIG_KEY)));
  }
}

function getConfig() {
  fixConfig();
  let config = Cypress.expose(CONFIG_KEY);
  if (!config) {
    config = {};
    Cypress.expose(CONFIG_KEY, config);
  }

  return config;
}

module.exports = getConfig;
