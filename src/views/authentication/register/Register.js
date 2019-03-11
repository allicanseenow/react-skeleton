import React, { PureComponent } from 'react';
import { Alert } from 'reactstrap';
import { Helmet } from 'react-helmet';

export default class Register extends PureComponent {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Register</title>
        </Helmet>
        <Alert color="info">Register</Alert>
      </div>
    );
  }
}