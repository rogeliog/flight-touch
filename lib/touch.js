define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  var defineComponent = require('flight/lib/component');

  /**
   * Module exports
   */

  return defineComponent(touch);

  /**
   * Module function
   */

  function touch() {
    this.defaultAttrs({

    });

    this.after('initialize', function () {

    });
  }

});
