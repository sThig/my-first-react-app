import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Timer from './Timer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="My React Project" />,
        <p className="App-intro">
          My first <code>React.js</code> project.
        </p>
        <Timer />
      </div>
    );
  }
}

export default App;
