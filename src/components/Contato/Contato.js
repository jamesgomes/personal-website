import React, { Component } from 'react';
import Typed from 'react-typed';

class Contato extends Component {
    render() {
        const text = `
        <a href="https://www.linkedin.com/in/jamesgomesbr/" target="_blank">./linkedin.html</a> <br /> <br />
        <a href="https://github.com/jamesgomes" target="_blank">./github.html</a>
        `;
        return (
            <div className="Contato" >
                <Typed strings={[text]}
                    typeSpeed={40}
                />
            </div>
        );
    }
}

export default Contato;