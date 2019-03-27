import React, { Component } from 'react';
import Typed from 'react-typed';
import './Menu.css';

class Menu extends Component {
    render() {
        const item = `<ul>
        <li id="name">$jamesgomes: </li>
        <li><a href="#/sobre">sobre,</a></li>
        <li><a href='#/resumo'>formação acadêmica,</a></li>
        <li><a href='#/resumo'>experiência,</a></li>
        <li><a href='#/resumo'>skills,</a></li>
        <li><a href='#/resumo'>contato</a></li>
      </ul>`;
        return (
            <div className="Menu" >
                <Typed strings={[item]}
                    typeSpeed={40}
                    cursorChar={'_'}
                    contentType={'html'}
                />

            </div>
        );
    }
}

export default Menu;