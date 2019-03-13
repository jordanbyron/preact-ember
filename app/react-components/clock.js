import { h, Component } from 'preact';

export default class Clock extends Component {
  render({ time }, {}) {
    return <span>It is currently <strong>{ time }</strong></span>;
  }
}
