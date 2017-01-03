import React from 'react'
import CodepenFeature from '../codepen/CodepenFeature'
import WebsitesFeature from '../websites/WebsitesFeature'
import About from '../about/About'
import ContactSection from '../contact/ContactSection'

class HomePage extends React.Component {
  render () {
    return (
      <div>
        <WebsitesFeature />
        <CodepenFeature />
        <About />
        <ContactSection />
      </div>
    )
  }
}

export default HomePage;
