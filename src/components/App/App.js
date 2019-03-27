import React, { Component } from 'react';
import Routes from './routes';
import Menu from '../Menu/Menu';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span>index.js — bash — 100x<span>100</span></span>
        </header>
        <div className="text-body">

          <Menu />
          <Routes />

        </div>
      </div>
    );
  }
}

export default App;
