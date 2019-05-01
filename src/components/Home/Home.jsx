import React, { Component } from 'react';
import Typed from 'react-typed';
import './Home.css';


class Home extends Component {
  constructor(props) {
    super(props);
    const isStartDelay = localStorage.getItem('isStartDelay');
    this.startDelay = 0;
    this.startDelay = isStartDelay ? 0 : 6000;
    localStorage.setItem('isStartDelay', true);
  };

  render() {
    return (
      <div className="Home">
        <Typed
          strings={['Eu sou o James Este é o meu site. Bem vindo.']}
          typeSpeed={40}
          startDelay={this.startDelay}
        />
      </div>
    );
  }
}

export default Home;
