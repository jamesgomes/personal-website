import React, { Component } from 'react';
import Typed from 'react-typed';
import './Menu.css';

class Menu extends Component {
    render() {
        const item = `
        <a href="#/" id="name">$jamesgomes: </a>
        <a href="#/sobre">sobre,</a>
        <a href='#/formacao'>formação acadêmica,</a>
        <a href='#/experiencia'>experiência,</a>
        <a href='#/habilidade'>habilidades,</a>
        <a href='#/contato'>contato</a>`;
        return (
            <div className="Menu" >
                <Typed strings={[item]}
                    typeSpeed={30}
                    cursorChar={'|'}
                    contentType={'html'}
                />

            </div>
        );
    }
}

export default Menu;
