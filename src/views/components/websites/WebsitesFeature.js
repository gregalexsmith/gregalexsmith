import React from 'react';
import './websites-styles.css';

import { Websites_Data } from './websites_data.js';


const WebsitesFeature = (props) => {

    const renderSiteFeatures = Websites_Data.websites.map( (site, index) =>
        <div className="site-container" key={index}>
          <h2 className="sites-title">{site.title}</h2>
          <div className="sites-images">
            <img src={site.images[0]} alt="Media Made Website 1"/>
            <img src={site.images[1]} alt="Media Made Website 2"/>
          </div>
          <div className="sites-info">
            <section>
              <h3>Description</h3>
              <p>{site.desc}</p>
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
              {(site.url !== "")? (<h3>Link</h3>) : ""}
              <p>
                <a href={site.url} target="_blank">{site.url}</a>
              </p>
            </section>
          </div>
        </div>
    )

    return (
      <section className="sites-section">
        <div className="gs-section-header" id="websites">
          <div className="gs-container">
            <h1>Websites</h1>
          </div>
        </div>
        <div className="gs-container">
          {renderSiteFeatures}
        </div>

      </section>
    )

};

export default WebsitesFeature;
