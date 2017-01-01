import React, { Component } from 'react'
import './navbar-styles.css'

class NavBar extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <div className="nav-container gs-container">
          <h1>Greg Smith</h1>
          <div className="nav-links">
            <a>Websites</a>
            <a>Codepen</a>
            <a>About</a>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar;
