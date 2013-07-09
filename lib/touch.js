define(function (require) {

  'use strict';

  require('bower_components/hammerjs/dist/jquery.hammer');

  return withTouchEvents;

  function withTouchEvents() {

    this.defaultAttrs({
      eventPrefix: "UI"
    });

    this.handleEvent = function (evnt) {
      this.trigger(this.attr.eventPrefix + this._capitalize(evnt.type));
    };

    this.after('initialize', function () {
      $(document).hammer().on("tap", this.handleEvent.bind(this));
      $(document).hammer().on("drag", this.handleEvent.bind(this));
      $(document).hammer().on("dragstart", this.handleEvent.bind(this));
      $(document).hammer().on("dragend", this.handleEvent.bind(this));
    });

    this._capitalize = function(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };
  }
});
