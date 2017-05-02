import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

class Timer extends Component {
  render() {
    return (
      <div>
      <p className="timer">{this.props.count}</p>
      </div>
    );
  }
}

Timer.propTypes = {
  count: PropTypes.number,
};

export default Timer;
