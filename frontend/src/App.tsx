import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';

export const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Home} />
    </Switch>
  </BrowserRouter>
);
