import React from 'react';
import './websites-styles.css';
import mmHome from '../../images/mm-home.jpg'
import mmSignup from '../../images/mm-signup.jpg'
import sitesData from './websites_data.json';


const WebsitesFeature = (props) => {
    const renderSiteFeatures = sitesData.websites.map( (site, index) =>
        <div className="gs-container" key={index}>
          <h2 className="sites-title">{site.title}</h2>
          <div className="sites-images">
            <img src={mmHome} alt="Media Made Website 1"/>
            <img src={mmSignup} alt="Media Made Website 2"/>
          </div>
          <div className="sites-info">
            <section>
              <h3>About</h3>
              <p>{site.about}</p>
            </section>
            <section>
              <h3>Goals</h3>
              <p>{site.about}</p>
            </section>
            <section>
              <h3>Technologies Used</h3>
              <p>
                <b>Front End:</b>
                <span>{site.tech.frontEnd}</span>
              </p>
              <p>
                <b>Back End:</b>
                <span>{site.tech.backEnd}</span>
              </p>
            </section>
            <section>
              <h3>Link</h3>
              <p>
                <a href={site.url}>{site.title}</a>
              </p>
            </section>
          </div>
        </div>
    )
    return (
      <section className="sites-section">
        <div className="gs-section-header">
          <div className="gs-container">
            <h1>Websites</h1>
          </div>
        </div>
        {renderSiteFeatures}
      </section>
    )

};

export default WebsitesFeature;
