import React, { Component } from 'react';
import Typed from 'react-typed';
//import './Home.css';

class Habilidades extends Component {
    render() {
        const text = 'habilidades';
        return (
            <div className="Home" >
                <Typed strings={[text]}
                    typeSpeed={40}
                />
            </div>
        );
    }
}

export default Habilidades;