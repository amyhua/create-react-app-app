import React, { Component } from 'react';

export default class Birthdate extends Component {
  render() {
    return <p className="Birthdate">Your birthday is {this.props.birthdate}</p>;
  }
};