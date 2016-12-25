import React, { Component, PropTypes } from 'react';
// import logo from '../images/logo.svg';
import './App.css';
import NavBar from './common/NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App;
