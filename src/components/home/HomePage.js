import React from 'react'
import About from '../about/About.js'
import CodepenFeature from '../codepen/CodepenFeature'
import WebsitesFeature from '../websites/WebsitesFeature'

class HomePage extends React.Component {
  render () {
    return (
      <div className="container">
        <CodepenFeature />
        <WebsitesFeature />
        <About />
      </div>
    )
  }
}

export default HomePage;
