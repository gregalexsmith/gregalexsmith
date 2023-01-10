import React from 'react'
import './about-styles.css'

const About = () => {
  return (
    <section>
      <div className="gs-section-header" id="about">
        <div className="gs-container">
          <h1>About Me</h1>
        </div>
      </div>
      <div className="gs-container about-section">
        <section>
          <p>
            I'm a developer and creative with a passion for building engaging experiences on the web.
            I value thoughtful UX and design, scalable code, open collaboration, continuous learning and improving products and processes with great teams.
          </p>
          <p>
            <b>Front End:</b>
            <span>React, Redux, GraphQL, Webpack, HTML, CSS, LESS, SASS, CSS-in-JS, Javascript, WebAudio, Jest, Karma, Mocha</span>
          </p>
          <p>
            <b>Back End:</b>
            <span>Node, GraphQL, NPM, Express, MongoDB, MySQL, Firebase</span>
          </p>
          <p>
            <b>Other Experience:</b>
            <span>Docker, CircleCI, VB.Net, Embedded C++</span>
          </p>
        </section>
        <section className="about-social-section">
          <h3>Social Links</h3>
          <a href="http://codepen.io/grsmith/" target="blank">
            <i className="fa fa-codepen"/>
            <span>Codepen</span>
          </a>
          <a href="https://github.com/gregalexsmith" target="blank">
            <i className="fa fa-github"/>
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/gregalexsmith/" target="blank">
            <i className="fa fa-linkedin"/>
            <span>LinkedIn</span>
          </a>
          <a href="https://www.instagram.com/grsmith/" target="blank">
            <i className="fa fa-instagram"/>
            <span>Instagram</span>
          </a>
        </section>
      </div>
    </section>
  )
}

export default About
