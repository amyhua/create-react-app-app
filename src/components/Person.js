import React, { Component } from 'react';
import '../Person.css';

import Birthdate from './Birthdate';

export default class Person extends Component {
  render() {
    console.log('props', this.props);
    return (
    <div className="Person">
      <h1>Hello {this.props.firstName} {this.props.lastName}</h1>
      <Birthdate birthdate={this.props.birthdate} />
    </div>
    )
  }
};