/** @format */

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import BasicLayoutRoute from '@/routes/BasicLayoutRoute';
import store from '@/store';

const { Provider } = store;

const Login = loadable(() => import('@/pages/Login/Login'));

const AppRoute = () => {
  return (
    <Provider>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/basic" component={BasicLayoutRoute} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default AppRoute;
