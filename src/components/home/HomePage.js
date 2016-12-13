import React from 'react'
import About from './About.js'
import CodePenFeature from '../portfolio/CodePenFeature'
import WebsitesFeature from '../portfolio/WebsitesFeature'

class HomePage extends React.Component {
  render () {
    return (
      <div className="container">
        <About />
        <WebsitesFeature />
        <CodePenFeature />
      </div>
    )
  }
}

export default HomePage;
