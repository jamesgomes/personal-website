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

const routes = () => {
return (
  <HashRouter basename="/">
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/sobre" component={Sobre} />
      <Route path="/formacao" component={Formacao} />
      <Route path="/experiencia" component={Experiencia} />
      <Route path="/habilidade" component={Habilidade} />
      <Route path="/contato" component={Contato} />
    </Switch>
  </HashRouter>
)
};

export default routes;
