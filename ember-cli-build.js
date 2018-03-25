'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    // Add options here

    // Note that this is only for assets you want to use in your dummy app;
    // these assets are not exported to consumers of your addon.
    nodeAssets: {
      'jets': {
        vendor: {
          include: ['jets.js']
        }
      }
    }
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
    */

  app.import('vendor/jets/jets.js');

  return app.toTree();
};
