import React from 'react';
import {
  HashRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Home from '../Home/Home';
import Sobre from '../Sobre/Sobre';

export default props => (
    <HashRouter basename="/">
          <Switch>
            <Route path="/" exact render={props => <Home {...props} />} />
            <Route path="/sobre" exact render={props => <Sobre {...props} />} />
          </Switch>
  </HashRouter>
)