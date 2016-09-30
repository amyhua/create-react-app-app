import React, { Component, PropTypes } from 'react';

export default class Decrement extends Component {
  constructor(props) {
    super(props);
    // this is the only place where you can use this.state = ...
    // otherwise, use this.setState
    this.state = {
      color: props.color
    };
    this.decrement = this.decrement.bind(this);    
    this.highlight = this.highlight.bind(this);
    this.unhighlight = this.unhighlight.bind(this);
  }

  decrement() {
    const newNumber = this.props.number - 1;
    this.setState({
      number: newNumber
    });
    this.props.setNumber(newNumber);
  }

  highlight() {
    const newColor = 'red';
    const newNumber = this.props.number - 1;
    this.props.setNumber(newNumber);
    this.setState({
      color: newColor
    });
  }

  unhighlight() {
    const originalColor = 'yellow';
    this.setState({
      color: originalColor
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.number < 0) {
      return false;
    }
    return true;
  }

  render() {
    const header = () => <h1>{this.props.number}</h1>
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
  setNumber: PropTypes.func.isRequired,
  number: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired
}