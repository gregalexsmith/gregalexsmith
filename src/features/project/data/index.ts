const IMG_BASE_URL = 'https://storage.googleapis.com/gregalexsmith-images/';
const withURL = (imgList: string[]) => imgList.map((img) => IMG_BASE_URL + img);

export const projectsData = [
  {
    title: 'Chord Progressions App',
    url: 'https://chordapp-dev.netlify.com/',
    description: 'Explore and practice chord progressions on the web',
    tech: {
      frontEnd: 'React, Tone.js, Ramda, Recompose',
      backEnd: 'Netlify'
    },
    images: withURL(['chord-prog-1.jpg', 'chord-prog-2.jpg'])
  },
  {
    title: 'Tree Museum',
    url: 'https://treemuseum.ca/',
    description:
      'Artist website and blog for local band Tree Museum. Includes splash page, Instagram integration, show feed and contact form.',
    tech: {
      frontEnd: 'React, PostCSS',
      backEnd: 'Firebase'
    },
    images: withURL(['tm-1.1.png', 'tm-2.1.png'])
  },
  {
    title: 'Pomodoro Timer',
    url: 'https://gregalexsmith.github.io/pomodoro-timer/',
    description:
      'An animated pomodoro timer build with React, styled components and gsap',
    tech: {
      frontEnd: 'React, Styled Components, gsap animation',
      backEnd: 'Static hosting on Github Pages'
    },
    images: withURL(['pom-2.1.png', 'pom-1.1.png'])
  },
  {
    title: 'Soundscape Generator',
    url: 'https://github.com/amaclean199/soundscape-generator',
    description: `
      Generate an audio backdrop for an image or video using image recognition and open source sounds. 
      Hackathon project with <a href="http://www.alexmaclean.ca/" target="_blank">Alex MacLean</a>.
    `,
    tech: {
      frontEnd:
        'React, Redux, Styled Components, Web Audio API, Google Resonance',
      backEnd: 'Python, AWS'
    },
    images: withURL(['soundscape-generator1.jpg', 'soundscape-generator2.jpg'])
  },
  {
    title: 'MediaMade',
    url: '',
    description:
      'A production company connecting business owners with creators to build effective content for their brand.',
    tech: {
      frontEnd: 'React, Redux, Webpack, PostCSS',
      backEnd: 'Firebase'
    },
    images: withURL(['mm-home.jpg', 'mm-mocks.png'])
  },
  {
    title: 'Cirroo',
    url: 'http://cirroo.com',
    description:
      'Artist page for electronic musician Cirroo. Showcase new album while providing links for contact and other releases.',
    tech: {
      frontEnd: 'HTML5, CSS3, SASS, Gulp',
      backEnd: 'AWS S3 Static Hosting'
    },
    images: withURL(['cirroo-home.jpg', 'cirroo-music.jpg'])
  }
];
