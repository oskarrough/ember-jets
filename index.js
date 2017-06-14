/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-jets',
  options: {

    // Using ember-cli-node-assets to move packages
    // from "node_modules" to the "vendor" folder.
    nodeAssets: {
      'jets': {
        vendor: {
          include: ['jets.js']
        }
      }
    }
  },
  included(app) {
    this._super.included.apply(this, arguments);

    // Tell apps that use this addon, to also import it.
    app.import('vendor/jets.js');
  }
};
