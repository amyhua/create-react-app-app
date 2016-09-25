import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import Person from './Person';

class App extends Component {
  render() {
    // all tags need to close! <br/>
    // no comments allowed in JSX
    return <div className="App">
      <Person
        firstName="Amy"
        lastName="Hua"
        birthdate="Sun Sep 25 2016 11:41:32 GMT-0400 (EDT)"/>
      <hr/>
      <Person
        firstName="Sarah"
        lastName="Silverman"
        birthdate="Sun Sep 20 2016 11:41:32 GMT-0400 (EDT)"/>
      <hr/>
      <Person
        firstName="Bob"
        lastName="Builder"
        birthdate="Sun Sep 19 2016 11:41:32 GMT-0400 (EDT)"/>
    </div>
  }
}

export default App;