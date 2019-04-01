import React, { Component } from 'react';
import Typed from 'react-typed';
//import './Home.css';

class Formacao extends Component {
    render() {
        const text = 'Centro Universitário Newton Paiva <br/ > Bacharel, Sistema de Informação <br/ > 2008 – 2012';
        return (
            <div className="Home" >
                <Typed strings={[text]}
                    typeSpeed={40}
                />
            </div>
        );
    }
}

export default Formacao;