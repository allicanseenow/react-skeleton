import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const generateRoute = (routeList) => {
  return routeList.map((routeObj) => {
    const { redirect, path, pathTo, component, exact = false } = routeObj;
    const key = path || 'not found';
    if (redirect) {
      return (
        <Redirect exact={exact} from={path} to={pathTo} key={key}/>
      );
    }
    return (
      <Route exact={exact} path={path} component={component} key={key}/>
    );
  });
};

export { generateRoute };