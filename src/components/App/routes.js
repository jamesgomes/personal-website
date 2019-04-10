import React from 'react';
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Home from '../Home/Home';
import Sobre from '../Sobre/Sobre';
import Formacao from '../Formacao/Formacao';
import Experiencia from '../Experiencia/Experiencia';
import Habilidade from '../Habilidade/Habilidade';
import Contato from '../Contato/Contato';

export default props => (
    <HashRouter basename="/">
          <Switch>
            <Route path="/" exact render={props => <Home {...props} />} />
            <Route path="/sobre" exact render={props => <Sobre {...props} />} />
            <Route path="/formacao" exact render={props => <Formacao {...props} />} />
            <Route path="/experiencia" exact render={props => <Experiencia {...props} />} />
            <Route path="/habilidade" exact render={props => <Habilidade {...props} />} />
            <Route path="/contato" exact render={props => <Contato {...props} />} />
          </Switch>
  </HashRouter>
)