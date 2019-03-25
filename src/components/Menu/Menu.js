import React, { Component } from 'react';
import Typed from 'react-typed';
import './Menu.css';

class Menu extends Component {
    render() {
        const item = `<ul>
          <li id="name">$jamesgomes: </li>
          <li><a href=#>resumo,</a></li>
          <li><a href=#>experiência,</a></li>
          <li><a href=#>formação acadêmica,</a></li>
          <li><a href=#>skills,</a></li>
          <li><a href=#>contato</a></li>
        </ul>`;
        return (
            <div className="Menu" >
                <Typed strings={[item]}
                    typeSpeed={40}
                />

            </div>
        );
    }
}

export default Menu;