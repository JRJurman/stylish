import React, { Component } from 'react';

const appHeaderStyle = {
  backgroundColor: 'rgb(34, 26, 15)',
  padding: '10px',
  color: 'white',
  textAlign: 'center'
}

class Header extends Component {
  render() {
    const mergedStyle = Object.assign({}, appHeaderStyle, this.props.style);
    return (
      <div style={mergedStyle}>
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}

export default Header;
