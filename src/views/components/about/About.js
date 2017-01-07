import React from 'react'
import './about-styles.css'

const About = (props) => {
  return (
    <section>
      <div className="gs-section-header" id="about">
        <div className="gs-container">
          <h1>About</h1>
        </div>
      </div>
      <div className="gs-container about-section">
        <section>
          <p>
            Greg is a front end developer with a background in product development and creative work. He is currently building a portfolio by completing freelance and personal projects that include the following technologies:
          </p>
          <p>
            <b>Front End:</b>
            <span>HTML, CSS, SASS, POSTCSS, Javascript, React, Redux, Webpack, JQuery, Angular, WebAudio</span>
          </p>
          <p>
            <b>Back End:</b>
            <span>Node, NPM, Express, MongoDB, MySQL, Firebase</span>
          </p>
          <p>
            <b>Other Experience:</b>
            <span>VB.Net, Embedded C++</span>
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
