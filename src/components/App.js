import React, { Component, PropTypes } from 'react';
import '../App.css';

import Person from './Person';
import Countdown from './Countdown';
import Decrement from './Decrement';

const Text = (props) => {
  return <h2>{props.text}</h2>;
  // ends up being the returned elment in render
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: props.number
    };
    this.onDecrement = this.onDecrement.bind(this);
  }

  onDecrement(newNumber) {
    console.log('decremented!', newNumber);
    this.setState({
      number: newNumber
    });
  }

  render() {
    // all tags need to close! <br/>
    // no comments allowed in JSX
    const isLowEnough = this.state.number <= 10;
    return <div className="App">
      <Text text="Some text here!!" />
      <Decrement
        onDecrement={this.onDecrement}
        number={this.state.number}
        color="yellow" />
      { isLowEnough ? <Countdown number={10} /> : ''}
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

App.propTypes = {
  number: PropTypes.number.isRequired
};

export default App;