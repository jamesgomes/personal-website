import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import Home from '../Home/Home'
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
          {/* <Home /> */}
          </div>
        </div>
        );
      }
    }
    
    export default App;
