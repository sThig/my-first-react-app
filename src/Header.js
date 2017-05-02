import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';



class Header extends Component {
  render() {
    return (
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.props.title}</h2>
        </div>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
