import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import InitialPage from '../pages/InitialPage';
import LoginPage from '../pages/LoginPage';
import UserRegister from '../pages/UserRegister';
function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={ InitialPage } />
        <Route exact path="/login" component={ LoginPage } />
        <Route exact path="/register" component={ UserRegister } />
        <Route exact path="/item" />
      </Switch>
    </HashRouter>
  );
}

export default Routes;
