import React, { Component } from 'react';
import Example from './Example.js';

const hoverCode = `a:hover {
  color: #ff7518;
}`;

const mediaCode = `@media print {
  a {
    display: none;
  }
}`;

const heightCode = `html, body, #root {
  min-height: 100%;
}`;

const externalJSCode = `// generates a 'pre' tag
import PG from 'pre-generator';

render() {
  return (
    <PG />
  );
}
`;

const externalCSSCode = `pre {
  color: red;
}`;

class ExampleFile extends Component {
  render() {
    return (
      <div style={this.props.style}>
        <h3>In A CSS File...</h3>
        <h4>When they could never be defined in a components style prop</h4>
        <Example title='Hover' lang='css' code={hoverCode} />
        <Example title='Media Queries' lang='css' code={mediaCode} />
        <h4>When you need to override styles in HTML</h4>
        <Example title='Page Height' lang='css' code={heightCode} />
        <h4>When you need to inject a style into an external library</h4>
        <Example title='React Component' lang='js' code={externalJSCode} />
        <Example title='Overriding CSS' lang='css' code={externalCSSCode} />

      </div>
    );
  }
}

export default ExampleFile;
