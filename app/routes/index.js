import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Routes = (/*store*/) => (
  <Switch>
    <Route path="/" render={() => <h1>Hello World</h1>} exact />
  </Switch>
);

export default Routes;

