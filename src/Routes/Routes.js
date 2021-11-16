import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import InitialPage from '../pages/InitialPage';
import Aula1 from '../pages/class1/Aula';
import porque1 from '../pages/class1/porque';
import exercicios from '../pages/class1/exercicios';
import recursos from '../pages/class1/recursos';
import oQueEh from '../pages/class1/funcionamento';
import trafoIdeal from '../pages/class1/trafoIdeal.js';
import ideal from '../pages/class1/ideal';
import monoIdeal from '../pages/class1/monoIdeal';

function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={ InitialPage } />
        <Route exact path="/transformador" component={ Aula1 } />
        <Route exact path="/transformador/porque" component={ porque1 } />
        <Route exact path="/transformador/exercicios" component={ exercicios } />
        <Route exact path="/transformador/recursos" component={ recursos } />
        <Route exact path="/transformador/oQueEh" component={ oQueEh } />
        <Route exact path="/transformador/trafoIdeal" component={ trafoIdeal } />
        <Route exact path="/transformador/ideal" component={ ideal } />
        <Route exact path="/transformador/monoIdeal" component={ monoIdeal } />
      </Switch>
    </HashRouter>
  );
}

export default Routes;
