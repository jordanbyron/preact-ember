import Component from '@ember/component';
import Clock from 'ember-quickstart/react-components/hello-world';
import { h, render } from 'preact';

export default Component.extend({
  startClock() {
    const timer = later(this, function() {
      this.tick();
    }, 1000);

    this.set('timer', timer);
  },

  tick() {
    this.set('time', new Date().toLocaleTimeString());
  },

  props: computed('time', function() {
    return { time: this.time };
  }),

  didRender() {

  },

  willDestroyElement() {

  },

  didInsertElement: function() {
    render(<Clock name={this.name} />, this.element);
  }
});
