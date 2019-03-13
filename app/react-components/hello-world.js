import { h, Component } from 'preact';

export default class Clock extends Component {
  render({ name }, {}) {
    let time = new Date().toLocaleTimeString();
    return <span>Hello {name}, it is currently { time }</span>;
  }
}
