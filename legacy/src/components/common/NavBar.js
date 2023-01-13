import React, { Component } from 'react'
import smoothScroll from 'smoothscroll'
import './navbar-styles.css'

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.scrollIntoView = this.scrollIntoView.bind(this);
  }

  scrollIntoView(target) {
    let goto = target.target.dataset.goto;
    console.log(goto);
    var targetElement = document.getElementById(goto);
    if (!!targetElement) {
      smoothScroll(targetElement);
    }
  }

  render() {
    return (
      <nav className="nav-bar">
        <div className="nav-container gs-container">
          <h1>Greg Smith</h1>
          <div className="nav-links">
            <a onClick={this.scrollIntoView} data-goto="about">About Me</a>
            <a onClick={this.scrollIntoView} data-goto="projects">Projects</a>
            <a onClick={this.scrollIntoView} data-goto="codepen">Codepen</a>
            <a onClick={this.scrollIntoView} data-goto="contact">Contact</a>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar;
