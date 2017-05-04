import React, { Component } from 'react';
// import './App.css';

// var TimerExample = React.createClass({
// //
//     getInitialState: function(){
//
//
//         return { elapsed: 0 };
//     },
//
//     componentDidMount: function(){
//
//         this.timer = setInterval(this.tick, 50);
//     },
//
//     componentWillUnmount: function(){
//
//
//         clearInterval(this.timer);
//     },
//
//     tick: function(){
//
//
//         this.setState({elapsed: new Date() - this.props.start});
//     },

//     render: function() {
//
//         var elapsed = Math.round(this.state.elapsed / 100);
//
//         // This will give a number with one digit after the decimal dot (xx.x):
//         var seconds = (elapsed / 10).toFixed(1);
//
//         // Although we return an entire <p> element, react will smartly update
//         // only the changed parts, which contain the seconds variable.
//
//         return <p>This example was started <b>{seconds} seconds</b> ago.</p>;
//     }
// });

class Count extends Component {
  constructor() {
    super();
    this.state = {
      counter: function(){ return { elapsed: 0 }; },
      componentDidMount: function(){ this.timer = setInterval(this.tick, 50);},
      componentWillUnmount: function(){ clearInterval(this.timer); },
      tick: function(){ this.setState({elapsed: new Date() - this.props.start});},
    };
  }
  render() {
    var elapsed = Math.round(this.state.elapsed / 100);
    var seconds = (elapsed / 10).toFixed(1);
    return (
      <p>This example was started <b>{seconds} seconds</b> ago.</p>
    );
  }
}

export default Count;
