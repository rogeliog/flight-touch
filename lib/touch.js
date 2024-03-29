define(function (require) {

  'use strict';

  require('bower_components/hammerjs/dist/jquery.hammer');

  return withTouchEvents;

  function withTouchEvents() {

    this.defaultAttrs({
      eventPrefix: "UI",
      hammerEvents: ['tap', 'drag', 'dragstart', 'dragend'],
      hammerOptions: {}
    });

    this.handleHammerEvent = function (evnt) {
      this.trigger(this.attr.eventPrefix + this._capitalize(evnt.type), {event: evnt});
    };

    this.lisentToHammerEvent = function (hammerEvent) {
      $(document).hammer(this.attr.hammerOptions).on(hammerEvent, this.handleHammerEvent.bind(this));
    };

    this.after('initialize', function () {
      for(var i = 0; i < this.attr.hammerEvents.length; i++) {
        this.lisentToHammerEvent(this.attr.hammerEvents[i]);
      }
    });

    this._capitalize = function(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };
  }
});
