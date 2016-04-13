import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/foo">Foo</Link></li>
        </ul>
        <div>{this.props.children}</div>
      </div>
   );
  }
}