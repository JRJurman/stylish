import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Examples from './components/Examples';
import ExampleFile from './components/ExampleFile';
import ExampleParent from './components/ExampleParent';
import ExampleComponent from './components/ExampleComponent';

const fileStyle = {backgroundColor: '#FDD'}
const parentStyle = {backgroundColor: '#DFD'}
const componentStyle = {backgroundColor: '#DDF'}

class App extends Component {
  render() {

    const appStyle = {
      display: 'flex',
      flexFlow: 'column',
      height: '100%'
    };

    const headerStyle = {flex: '0 1'};
    const contentStyle = {flex: '1 0 auto'};

    return (
      <div style={appStyle} >
        <Header style={headerStyle} title="Where Should I Put My Styles?" />
        <Examples style={contentStyle} >
          <ExampleFile style={fileStyle} />
          <ExampleParent style={parentStyle} />
          <ExampleComponent style={componentStyle} />
        </Examples>
      </div>
    );
  }
}

export default App;
