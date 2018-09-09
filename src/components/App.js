import React, { Component } from 'react';
import PropTypes from 'prop-types'
import NavBar from './common/NavBar'
import HomePage from './homepage/HomePage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <HomePage />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App;
