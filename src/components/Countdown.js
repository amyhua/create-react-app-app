import React, { Component, PropTypes } from 'react';

class Countdown extends Component {
    constructor(props) {
      // props.name is default data; in our first example we passed in 'David'
      // need to call super(props) when using 'this' in constructor
      super(props);
      this.state = {
        number: props.number
      }
      this.countdown = this.countdown.bind(this);
    }

    componentDidMount() {
      this.countdown(this.state.number);  
    }

    countdown(i) {
      const self = this;
      this.setState({
        number: i
      });
      setTimeout(() => {
        if (i > 0) {
          i = i - 1;
          self.countdown(i);
        }
      }, 1000);
    }

    render() {
      // data is fixed by the time it goes to render.
      // not able to change state or props here anymore!
      return <div>Countdown: {this.state.number}</div>
    }
};

Countdown.propTypes = {
  number: PropTypes.number.isRequired
};

export default Countdown;

// function decrementToZero(i) {
//   console.log(i);
//   setTimeout(function() {
//     if (i > 0) {
//       i = i - 1;
//       decrementToZero(i);
//     }
//   }, 1000);
// }