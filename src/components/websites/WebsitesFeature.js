import React from 'react';
import './websites-styles.css';
import mmHome from '../../images/mm-home.jpg'
import mmSignup from '../../images/mm-signup.jpg'

const WebsitesFeature = (props) => {

  return (
    <section className="websites-section">
      <h1 className="header-full-block">Websites</h1>
      <div className="container">
        <div className="websites-images">
          <img src={mmHome}/>
          <img src={mmSignup}/>
        </div>
        <figure className="">
          <a href="https://mediamade.io">
            <div className="">
              <i className="fa fa-external-link"/>
              <figcaption>Media Made</figcaption>
            </div>
          </a>
        </figure>
      </div>
    </section>
  );
};

export default WebsitesFeature;
