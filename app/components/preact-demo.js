import Component from '@ember/component';
import Clock from 'ember-quickstart/react-components/hello-world';
import { h, render } from 'preact';

export default Component.extend({
  didInsertElement: function() {
    render(<Clock name={this.name} />, this.element);
  }
});
