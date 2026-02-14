
const { initConfig, CONFIG_KEY } = require('./src/config');
const initServer = require('./src/server/initServer');
const tasks = require('./src/tasks/');

/**
 * Initializes the plugin:
 * - registers tasks for `toMatchSnapshot` and `toMatchImageSnapshot`.
 * - Make config accessible via `Cypress.env`.
 * @param {Function} on - Method to register tasks
 * @param {Object} globalConfig - Object containing global Cypress config
 */
function initPlugin(on, globalConfig = {
}) {
  const envConfig = globalConfig.expose?.[CONFIG_KEY] || globalConfig.env?.[CONFIG_KEY];
  const config = initConfig(envConfig);
  initServer(config);

  // Adding sub objects/keys to `Cypress.expose` that don't exist in config doesn't work.
  // That's why the config is stringified and parsed again in `src/utils/commands/getConfig.js#fixConfig`.
  if (!globalConfig.expose) globalConfig.expose = {};
  globalConfig.expose[CONFIG_KEY] = JSON.stringify(config);

  on('before:browser:launch', (browser = {}, launchOptions) => {
    const args = Array.isArray(launchOptions) ? launchOptions : launchOptions.args;

    if (browser.name === 'chrome') {
      args.push('--font-render-hinting=medium');
      args.push('--enable-font-antialiasing');
      args.push('--disable-gpu');
    }

    return launchOptions;
  });

  on('task', tasks);
}

module.exports = {
  initPlugin
};
