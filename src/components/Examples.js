import React, { Component } from 'react';

const flexStyle = {
  display: 'flex',
  flexFlow: 'wrap',
  justifyContent: 'space-around'
}

const columnStyle = {
  flex: 1,
  padding: '10px'
}

class Examples extends Component {
  render() {
    const containerStyle = Object.assign({}, flexStyle, this.props.style);

    const children = React.Children.map(this.props.children,
      child => {
        const mergedStyle = Object.assign({}, child.props.style, columnStyle);
        return React.cloneElement(child, {style: mergedStyle});
      }
    );

    return (
      <div style={containerStyle}>
        {children}
      </div>
    );
  }
}

export default Examples;
