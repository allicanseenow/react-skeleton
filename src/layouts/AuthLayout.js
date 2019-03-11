import React, { Component, Suspense } from 'react';
import { Switch } from 'react-router-dom';

import { authRoutes } from '../routes/authRoutes';
import { generateRoute } from '../utility/generateRoute';
import Loading from '../views/recycleComponents/loading/Loading';

export default class AuthLayout extends Component {
  render() {
    return (
      <div className="authentications">
        <Suspense fallback={<Loading/>}>
          <Switch>
            { generateRoute(authRoutes) }
          </Switch>
        </Suspense>
      </div>
    );
  }
}