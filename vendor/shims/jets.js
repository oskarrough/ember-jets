(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['jets'],
      __esModule: true,
    };
  }

  define('jets', [], vendorModule);
})();
