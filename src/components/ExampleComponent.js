import React, { Component } from 'react';
import Example from './Example.js';

const headerStyle = `const appStyle = {
  backgroundColor: 'rgb(34, 26, 15)',
  padding: '10px',
  color: 'white',
  textAlign: 'center'
}`;

const componentStyle = `render() {
  const mergedStyle = Object.assign({}, appStyle, this.props.style);
  return (
    <div style={mergedStyle}>
      <h2>I'm an App!</h2>
    </div>
  );
}`;

class ExampleComponent extends Component {
  render() {
    return (
      <div style={this.props.style}>
        <h3>In The Component...</h3>
        <h4>Simple, one-off styles</h4>
        <Example lang='js' code={headerStyle} />
        <h4>BUT, make them over-writable</h4>
        <Example lang='js' code={componentStyle} />
      </div>
    );
  }
}

export default ExampleComponent;
