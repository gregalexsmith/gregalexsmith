import React from 'react'
import CodepenFeature from '../codepen/CodepenFeature'
import Projects from '../projects/Projects'
import About from '../about/About'
import ContactSection from '../contact/ContactSection'

class HomePage extends React.Component {
  render () {
    return (
      <div>
        <About />
        <Projects />
        <CodepenFeature />
        <ContactSection />
      </div>
    )
  }
}

export default HomePage;
