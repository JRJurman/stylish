import React, { Component } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { kimbieDark } from 'react-syntax-highlighter/dist/styles';

class Example extends Component {
  render() {

    return (
      <div style={this.props.style}>
        <SyntaxHighlighter language={this.props.lang} style={kimbieDark}>
          {this.props.code}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default Example;
