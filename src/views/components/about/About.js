import React from 'react'
import './about.css'

const About = (props) => {
  return (
    <section className="about-section">
      <div className="gs-section-header">
        <div className="gs-container">
          <h1>About</h1>
        </div>
      </div>
      <div className="gs-container">
        <section>
          <h3>About Me</h3>
          <p>
            Product developer with 3 years of experience creating hardware and software for a variety of applications.
          </p>
          <p>
            Currently I am building on my experience as a web developer by working on projects with the following technologies:
          </p>
          <p>
            <b>Front End:</b>
            <span>HTML, CSS, SASS, POSTCSS, Javascript, JQuery, Angular, React, Redux, Wepack, WebAudio</span>
          </p>
          <p>
            <b>Back End:</b>
            <span>Node, Express, MongoDB, MySQL, Firebase</span>
          </p>
          <p>
            <b>Other Experience:</b>
            <span>VB.Net, Embedded C++</span>
          </p>
        </section>
        <section>
          <h3>Social Links</h3>
          <a>
            <i className="fa fa-codepen"/>
            <span>Codepen</span>
          </a>
          <a>
            <i className="fa fa-github"/>
            <span>GitHub</span>
          </a>
          <a>
            <i className="fa fa-instagram"/>
            <span>Instagram</span>
          </a>
        </section>
        <section>
          <h3>Send A Message</h3>
          <form>
            
          </form>
        </section>
      </div>
    </section>
  )
}

export default About
