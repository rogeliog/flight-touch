'use strict';

describeMixin('lib/touch', function () {

  // Initialize the component and attach it to the DOM
  beforeEach(function () {
    setupComponent();
    this.mixin = this.component;
  });

  function shouldTriggerFlightEventBasedOnHammerEvent(flightEvent, hammerEvent) {
    var eventSpy = spyOnEvent(document, flightEvent);
    var element = $(document).hammer().trigger(hammerEvent);
    expect(eventSpy).toHaveBeenTriggeredOn(document);
  };

  it('should be defined', function () {
    expect(this.mixin).toBeDefined();
  });

  it('should respond to Hammer tap event', function () {
    shouldTriggerFlightEventBasedOnHammerEvent('UITap', 'tap');
  });

  it('should respond to Hammer drag event', function () {
    shouldTriggerFlightEventBasedOnHammerEvent('UIDrag', 'drag');
  });

  it('should respond to Hammer drag event', function () {
    shouldTriggerFlightEventBasedOnHammerEvent('UIDrag', 'drag');
  });

  it('should respond to Hammer dragstart event', function () {
    shouldTriggerFlightEventBasedOnHammerEvent('UIDragstart', 'dragstart');
  });

  it('should respond to Hammer dragend event', function () {
    shouldTriggerFlightEventBasedOnHammerEvent('UIDragend', 'dragend');
  });

});
