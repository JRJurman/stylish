import React, { Component } from 'react';
import Example from './Example.js';

const layoutCode = `render() {
  const containerStyle = {display: 'flex'}
  const itemStyle = {flex: 1}

  return (
    <div style={containerStyle}>
      <div style={itemStyle}>Foo</div>
      <div style={itemStyle}>Bar</div>
    </div>
  );
}`;

const childrenCode = `render() {
  const childStyles = [
    {color: red}, {color: blue}, {color: green}
  ];

  const children = React.Children.map(
    this.props.children,
    child => {
      React.cloneElement(
        child,
        {style: childStyle[index%3]}
      );
    }
  );

  return (
    <div>
      {children}
    </div>
  );
}`;

class ExampleParent extends Component {
  render() {
    return (
      <div style={this.props.style}>
        <h3>In A Parent Component...</h3>
        <h4>When you need to define the layout across multiple components</h4>
        <Example title="Layout" lang='js' code={layoutCode} />
        <h4>When you need to inject style into any children</h4>
        <Example title="Layout" lang='js' code={childrenCode} />
      </div>
    );
  }
}

export default ExampleParent;
