import React, { Component } from 'react';
import Typed from 'react-typed';
//import './Home.css';

class Habilidades extends Component {
    render() {
        const text = `
        Git, GitHub, Team Foundation Server <br />
        HTML/CSS <br />
        JavaScript,  AngularJS, React, ASP.NET <br />
        Nodejs, C# <br />
        HTTP/REST <br />
        Mongodb,  SQL Server, MySQL <br />
        `;
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