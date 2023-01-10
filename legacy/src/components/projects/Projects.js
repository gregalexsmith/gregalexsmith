import React from 'react';
import './projects-styles.css';

import projectData from './projectData';

const Projects = () => (
  <section className="sites-section">
    <div className="gs-section-header" id="projects">
      <div className="gs-container">
        <h1>Projects</h1>
      </div>
    </div>
    <div className="gs-container">
      {projectData.map( (project, index) =>
        <div className="project" key={index}>
          <h2 className="project__title">{project.title}</h2>
          <div className="project__images">
            { project.images.map( (image, i) => (
              <img 
                src={image} 
                key={i}
                alt={`${project.title} screenshot ${i}`}
              />
            ))}
          </div>
          <div className="project__info">
            <section>
              <h3>Description</h3>
              <p dangerouslySetInnerHTML={{ __html: project.desc }} />
            </section>
            <section>
              <h3>Technologies Used</h3>
              <p>
                <b>Front End:</b>
                <span>{project.tech.frontEnd}</span>
              </p>
              <p>
                <b>Back End:</b>
                <span>{project.tech.backEnd}</span>
              </p>
            </section>
            <section>
              {(project.url !== "")? (<h3>Link</h3>) : ""}
              <p>
                <a href={project.url} target="_blank">{project.url}</a>
              </p>
            </section>
          </div>
        </div>
      )}
    </div>
  </section>
)

export default Projects;
