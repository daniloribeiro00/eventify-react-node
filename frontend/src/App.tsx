import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { Total } from './pages/Total';

export const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/total' exact component={Total} />
    </Switch>
  </BrowserRouter>
);
