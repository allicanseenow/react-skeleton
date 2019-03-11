import React, { Component, Suspense } from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { fullRoutes, defaultRoute } from '../routes/fullRoutes';
import { generateRoute } from '../utility/generateRoute';
import Loading from '../views/recycleComponents/loading/Loading';

export default class FullLayout extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <Suspense fallback={<Loading/>}>
          <Switch>
            { generateRoute(fullRoutes) }
            { defaultRoute && <Redirect exact from={defaultRoute.from} to={defaultRoute.redirectTo}/> }
          </Switch>
        </Suspense>
      </div>
    )
  }
}