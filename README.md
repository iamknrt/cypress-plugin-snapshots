# `@mknrt/cypress-plugin-snapshots`

> Plugin for snapshot testing in [Cypress.io](https://www.cypress.io/).

## About This Project

This plugin is a fork of the original repository [meinaart/cypress-plugin-snapshots](https://github.com/meinaart/cypress-plugin-snapshots) with important improvements from [suchipi/cypress-plugin-snapshots](https://github.com/suchipi/cypress-plugin-snapshots).

### Key Improvements:

- **Cypress 15.1.0 Support**: The plugin has been fixed and is fully compatible with Cypress version 15.1.0
- **Latest Updates**: The most recent commits are published to npm
- **Cypress Compatibility**: Modified peerDependencies for better compatibility across Cypress versions
- **TypeScript Types**: Updated types for cross-version compatibility

## Installation

```bash
npm install --save-dev @mknrt/cypress-plugin-snapshots
```

## Configuration

Add the plugin to ```cypress/plugins/index.js```:

```javascript
const installSnapshots = require('@mknrt/cypress-plugin-snapshots/plugin');

module.exports = (on, config) => {
installSnapshots(on, config);
return config;
};
```

Add the command to ```cypress/support/index.js```:

```javascript
import '@mknrt/cypress-plugin-snapshots/commands';
```

## Usage

```javascript
// Compare with snapshot
cy.get('.my-element').toMatchSnapshot();

// Compare with specific snapshot name
cy.get('.my-element').toMatchSnapshot('specific-snapshot-name');
```

## Development

For development you need to:
- Run ```npm install``` in both the root directory and the ```cypress``` directory
- Run ```npm start``` in one terminal and ```npm test``` in another

## Credits

- Based on the work of [meinaart/cypress-plugin-snapshots](https://github.com/meinaart/cypress-plugin-snapshots)
- Improvements from [suchipi/cypress-plugin-snapshots](https://github.com/suchipi/cypress-plugin-snapshots)
- Adapted for Cypress 15.1.0