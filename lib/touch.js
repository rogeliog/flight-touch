define(function (require) {

  'use strict';

  require('bower_components/hammerjs/dist/jquery.hammer');

  return withTouchEvents;

  function withTouchEvents() {

    this.defaultAttrs({

    });

    this.handleEvent = function (that, eventName) {
      return function(evnt) {
        that.trigger(eventName);
      }
    }

    this.after('initialize', function () {
      $(document).hammer().on("tap", this.handleEvent(this, 'UITap'));
      $(document).hammer().on("drag", this.handleEvent(this, 'UIDrag'));
      $(document).hammer().on("dragstart", this.handleEvent(this, 'UIDragStart'));
      $(document).hammer().on("dragend", this.handleEvent(this, 'UIDragEnd'));
    });
  }

});
