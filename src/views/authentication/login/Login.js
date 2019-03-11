import React, { PureComponent } from 'react';
import { Alert } from 'reactstrap';
import { Helmet } from 'react-helmet';

import sampleAPI from '../../../api/sample/sample.js';

export default class Login extends PureComponent {
  componentDidMount() {
    sampleAPI.getSampleAPI()
      .then(({ data }) => {
        console.log('data is', data);
      })
  }

  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Login</title>
        </Helmet>
        <Alert color="info">Login</Alert>
      </div>
    );
  }
}