const { defineConfig } = require('cypress');
const { initPlugin } = require('@suchipi/cypress-plugin-snapshots/plugin');

module.exports = defineConfig({
  env: {
    'cypress-plugin-snapshots': {
      serverPort: 2222,
      diffLines: 4,
      excludeFields: ['ignore'],
    },
  },

  video: false,
  viewportWidth: 660,
  viewportHeight: 1000,

  e2e: {
    setupNodeEvents(on, config) {
      initPlugin(on, config);
    },

    baseUrl: 'http://localhost:8080',
  },
});
