import Component from '@ember/component';
import Clock from 'ember-quickstart/react-components/clock';
import { h, render } from 'preact';

import { computed, observer } from '@ember/object';
import { later, cancel } from '@ember/runloop';

export default Component.extend({
  time: null,

  startClock() {
    const timer = later(this, function() {
      this.tick();
    }, 1000);

    this.set('timer', timer);
  },

  tick() {
    this.set('time', new Date().toLocaleTimeString());
    this.startClock();
  },

  props: computed('time', function() {
    return { time: this.time };
  }),

  propsObserver: observer('props', function() {
    render(<Clock {...this.props} />, this.element, this.preactElement);
  }),

  didRender() {
    this.startClock();
  },

  willDestroyElement() {
    cancel(this.timer);
  },

  didInsertElement() {
    this.tick();

    const el = render(<Clock {...this.props} />, this.element);

    this.set('preactElement', el);
  }
});
