import React from 'react';
import './websites-styles.css';

import { Websites_Data } from './websites_data.js';

const WebsitesFeature = () => (
      <section className="sites-section">
        <div className="gs-section-header" id="websites">
          <div className="gs-container">
            <h1>Websites</h1>
          </div>
        </div>
        <div className="gs-container">
          {Websites_Data.websites.map( (site, index) =>
            <div className="site-container" key={index}>
              <h2 className="sites-title">{site.title}</h2>
              <div className="sites-images">
                { site.images.map( (image, i) => (
                  <img 
                    src={image} 
                    key={i}
                    alt={`${site.title} screenshot ${i}`}
                  />
                ))}
              </div>
              <div className="sites-info">
                <section>
                  <h3>Description</h3>
                  <p dangerouslySetInnerHTML={{ __html: site.desc }} />
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
          )}
        </div>
      </section>
)

export default WebsitesFeature;
