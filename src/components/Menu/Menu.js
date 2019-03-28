import React, { Component } from 'react';
import Typed from 'react-typed';
import './Menu.css';

class Menu extends Component {
    render() {
        const item = `
        <a href="#/" id="name">$jamesgomes: </a>
        <a href="#/sobre">sobre,</a>
        <a href='#/resumo'>formação acadêmica,</a>
        <a href='#/resumo'>experiência,</a>
        <a href='#/resumo'>skills,</a>
        <a href='#/resumo'>contato</a>`;
        return (
            <div className="Menu" >
                <Typed strings={[item]}
                    typeSpeed={30}
                    cursorChar={'_'}
                    contentType={'html'}
                />

            </div>
        );
    }
}

export default Menu;
