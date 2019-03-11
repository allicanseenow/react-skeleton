import React, { PureComponent } from 'react';

import './loading.scss';

export default class Loading extends PureComponent {
  render() {
    return (
      <div className="loading-component">
        <i className="fas fa-spinner fa-spin"/>
      </div>
    )
  }
}