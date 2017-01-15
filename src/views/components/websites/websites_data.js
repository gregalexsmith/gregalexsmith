import mmHome from '../../images/mm-home.jpg'
import mmSignup from '../../images/mm-signup.jpg'
import cirrooMusic from '../../images/cirroo-music.jpg'
import cirrooHome from '../../images/cirroo-home.jpg'

export const Websites_Data = {
  "websites": [
    {
      "title" : "MediaMade",
      "url": "https://mediamade.io",
      "desc" : "A production company connecting business owners with creators to build effective content for their brand.",
      "tech" : {
        "frontEnd" : "React, Redux, Webpack, PostCSS",
        "backEnd" : "Firebase"
      },
      "images" : [mmHome, mmSignup]
    },
    {
      "title" : "Cirroo",
      "url": "http://cirroo.com",
      "desc" : "Artist page for electronic musician Cirroo. Showcase new album while providing links for contact and other releases.",
      "tech" : {
        "frontEnd" : "HTML5, CSS3, SASS, Gulp",
        "backEnd" : "AWS S3 Static Hosting"
      },
      "images" : [cirrooHome, cirrooMusic]
    }
  ]
}
