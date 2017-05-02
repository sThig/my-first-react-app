import React, { Component } from 'react';
import './App.css';

class Timer extends Component {
  render() {
    return (
      <div>
      <p className="timer">25:00</p>
      <p className="timer">5:00</p>
      </div>
    );
  }
}

export default Timer;
