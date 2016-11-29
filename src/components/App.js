import React, { Component, PropTypes } from 'react';
import logo from '../images/logo.svg';
import './App.css';
import Header from './common/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App;
