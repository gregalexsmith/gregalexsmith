import React from 'react'
import About from '../about/About.js'
import CodePenFeature from '../codepen/CodePenFeature'
import WebsitesFeature from '../websites/WebsitesFeature'

class HomePage extends React.Component {
  render () {
    return (
      <div className="container">
        <WebsitesFeature />
        <CodePenFeature />
        <About />
      </div>
    )
  }
}

export default HomePage;
