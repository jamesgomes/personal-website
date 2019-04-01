import React, { Component } from 'react';
import Typed from 'react-typed';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="Home" >           
            <Typed strings={['Eu sou o James Este é o meu site. Bem vindo.']}
                    typeSpeed={40}
                />
            </div>
        );
    }
}

export default Home;