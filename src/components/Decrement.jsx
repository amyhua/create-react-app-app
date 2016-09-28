import React, { Component, PropTypes } from 'react';

export default class Decrement extends Component {
  constructor(props) {
    super(props);
    // this is the only place where you can use this.state = ...
    // otherwise, use this.setState
    this.state = {
      number: props.number,
      color: props.color
    };
    this.decrement = this.decrement.bind(this);    
    this.highlight = this.highlight.bind(this);
    this.unhighlight = this.unhighlight.bind(this);
  }

  decrement() {
    const newNumber = this.state.number - 1;
    this.setState({
      number: newNumber
    });
    this.props.onDecrement(newNumber);
  }

  highlight() {
    const newColor = 'red';
    const newNumber = this.state.number - 1;
    this.setState({
      color: newColor,
      number: newNumber
    });
  }

  unhighlight() {
    const originalColor = 'yellow';
    this.setState({
      color: originalColor
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.number < 0) {
      return false;
    }
    return true;
  }

  render() {
    const header = () => <h1>{this.state.number}</h1>
    return (
            <div>
              <div
                style={{backgroundColor: this.state.color}}
                onMouseEnter={this.highlight}
                onMouseLeave={this.unhighlight}>{header()}</div>
              <button onClick={this.decrement}>Decrement</button>
            </div>
            )
  }
}

Decrement.propTypes = {
  onDecrement: PropTypes.func.isRequired,
  number: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired
}