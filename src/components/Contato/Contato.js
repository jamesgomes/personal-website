import React, { Component } from 'react';
import Typed from 'react-typed';

class Contato extends Component {
    render() {
        const text = `contato`;
        return (
            <div className="Home" >
                <Typed strings={[text]}
                    typeSpeed={40}
                />
            </div>
        );
    }
}

export default Contato;