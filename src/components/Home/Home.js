import React, { Component } from 'react';
import Typed from 'react-typed';
import './Home.css';

class Home extends Component {
    render() {
        const item = `
        <div>
            Sou um desenvolvedor Full-Stack, tenho trabalhado como desenvolvedor desde 2009, inicialmente criando sites, em seguida, desenvolvendo grandes aplicações Web.
        </div>
        `
        return (
            <div className="Home" >
                <Typed strings={[item]}
                    typeSpeed={40}
                />

            </div>
        );
    }
}

export default Home;