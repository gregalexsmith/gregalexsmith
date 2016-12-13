import React from 'react';
import './codepen.css';

const WebsitesFeature = (props) => {

  return (
    <section className="pen-section">
      <h1>Websites</h1>
      <div className="container">
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
