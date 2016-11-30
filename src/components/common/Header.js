import React, { Component } from 'react'
import SocialBTN from './SocialBTN'
import './Header.css'

class Header extends Component {
  render() {
    return (
      <div className="socialHeader">
        <h1>Profile Page</h1>
        <div className="socialBTNS">
          <SocialBTN
            social="github"
            external={true}
            url="https://github.com/gregalexsmith"/>
          <SocialBTN
            social="instagram"
            external={true}  url="https://www.instagram.com/grsmith/"/>
          <SocialBTN
            social="codepen"
            external={true}
            url="http://codepen.io/grsmith/"/>
          <SocialBTN
            social="envelope-o"
            external={false}
            url="mailto:gregalexsmith@gmail.com"/>
        </div>
      </div>
    )
  }
}

export default Header;
