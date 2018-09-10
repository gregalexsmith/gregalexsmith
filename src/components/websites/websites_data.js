import mmHome from '../../images/mm-home.jpg'
import mmMocks from '../../images/mm-mocks.png'
import cirrooMusic from '../../images/cirroo-music.jpg'
import cirrooHome from '../../images/cirroo-home.jpg'
import soundscapeGenerator1 from '../../images/soundscape-generator1.jpg';
import soundscapeGenerator2 from '../../images/soundscape-generator2.jpg';

export const Websites_Data = {
  "websites": [
    {
      "title" : "Soundscape Generator",
      "url": "https://github.com/amaclean199/soundscape-generator",
      "desc" : `
        Generate an audio backdrop for an image or video using image recognition and open source sounds. 
        Hackathon project with <a href="http://www.alexmaclean.ca/" target="_blank">Alex MacLean</a>.
      `,
      "tech" : {
        "frontEnd" : "React, Redux, Styled Components, Web Audio API, Google Resonance",
        "backEnd" : "Python, AWS"
      },
      "images" : [soundscapeGenerator1, soundscapeGenerator2]
    },
    {
      "title" : "MediaMade",
      "url": "",
      "desc" : "A production company connecting business owners with creators to build effective content for their brand.",
      "tech" : {
        "frontEnd" : "React, Redux, Webpack, PostCSS",
        "backEnd" : "Firebase"
      },
      "images" : [mmHome, mmMocks]
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
