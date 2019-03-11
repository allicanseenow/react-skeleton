import React from 'react';
import ReactDOM from 'react-dom';
// NOTE: React-router prints a false warning message
// https://github.com/ReactTraining/react-router/issues/6420
import { Router, Switch } from 'react-router-dom';

import './stylesheet/global/index.scss';
import './stylesheet/global/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './api/global/index';

import history from './api/global/history';
import { indexRoutes } from './routes/indexRoutes';
import { generateRoute } from './utility/generateRoute';
import * as serviceWorker from './utility/serviceWorker';

ReactDOM.render(
  <Router history={history}>
    <Switch>
      { generateRoute(indexRoutes) }
    </Switch>
  </Router>,
  document.getElementById('root'));

serviceWorker.unregister();
