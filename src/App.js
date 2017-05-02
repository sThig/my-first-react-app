import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Timer from './Timer';
import Count from './helper/Count';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="My First React Project" />,
        <p className="App-intro">
          My first <code>React.js</code> project.
        </p>
        <Timer count={25} />
        <TimerExample start={Date.now()} />,
      </div>
    );
  }
}

export default App;
