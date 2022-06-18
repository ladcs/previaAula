import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import InitialPage from '../../../frontend/src/pages/InitialPage';
import LoginPage from '../../../frontend/src/pages/LoginPage';

function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={ InitialPage } />
        <Route exact path="/login" component={ LoginPage } />
      </Switch>
    </HashRouter>
  );
}

export default Routes;
