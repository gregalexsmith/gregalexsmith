import React from 'react'
import codepenData from './featured_pens.json';
import './codepen-styles.css'

const CodepenFeature = (props) => {
  function renderPens() {
    return (
      codepenData.pens.map( pen => {
        let penURL = codepenData.profile_URL + "/pen/" + pen.slug;
        let imageURL = penURL + "/image/large.png";
        let backImageStyle = {
          backgroundImage: "url(" + imageURL + ")"
        }
        return (
          <figure key={pen.slug} className="pen-item">
            <a href={penURL} target="blank">
              <div className="pen-caption">
                <i className="fa fa-external-link"/>
                <figcaption>{pen.name}</figcaption>
              </div>
              <div style={backImageStyle} className="pen-image"></div>
            </a>
          </figure>
        )
      })
    )
  }

  return (
    <section className="pen-section">
      <div className="gs-section-header">
        <div className="gs-container">
          <h1>Codepen Projects</h1>
        </div>
      </div>
      <div className="gs-container">
        <div className="pen-container">
          {renderPens()}
        </div>
      </div>
    </section>
  )
}

export default CodepenFeature
