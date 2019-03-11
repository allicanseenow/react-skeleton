import React, { PureComponent } from 'react';
import { Alert } from 'reactstrap';
import { Helmet } from 'react-helmet';

export default class NotFound extends PureComponent {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Page not found</title>
        </Helmet>
        <Alert color="info">Page not found</Alert>
      </div>
    )
  }
}