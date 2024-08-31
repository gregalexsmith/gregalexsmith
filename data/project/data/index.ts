type ProjectLink = 'Website' | 'Github' | 'Product Hunt' | 'Storybook';

type Project = {
  title: string;
  description: string;
  tech?: {
    frontEnd: string;
    backEnd: string;
  };
  links?: { name: ProjectLink; url: string }[];
  images?: string[];
};

export const projects: Project[] = [
  {
    title: 'Next.js + RSC',
    description:
      'A collection of experiments with Next.js and React Server Components',
    links: [
      {
        name: 'Github',
        url: 'https://github.com/gregalexsmith/next-experiements',
      },
    ],
  },
  {
    title: 'rp2040-sensor-display',
    description:
      'A sensor board using CircuitPython and the Adafruit Feather Series',
    links: [
      {
        name: 'Github',
        url: 'https://github.com/gregalexsmith/rp2040-sensor-display',
      },
    ],
  },
  {
    title: 'Sun Time',
    description:
      'A simple sun tracking app and visualization for sunrise/sunset times 🌄',
    links: [
      { name: 'Website', url: 'https://sun-time.co' },
      {
        name: 'Product Hunt',
        url: 'https://www.producthunt.com/products/suntime-2',
      },
    ],
    images: [
      '/images/projects/sun-time-1.png',
      '/images/projects/sun-time-2.png',
    ],
  },
  {
    title: 'Dev Tools Monorepo',
    description:
      'A collection of tools for developing web apps. Includes a component lib, helpers and more',
    links: [
      { name: 'Github', url: 'https://github.com/gregalexsmith/dev-tools' },
      {
        name: 'Storybook',
        url: 'https://dev-tools-components.netlify.app',
      },
    ],
  },
  {
    title: 'Chord Progressions App',
    description: 'Explore and practice chord progressions on the web',
    tech: {
      frontEnd: 'React, Tone.js, Ramda, Recompose',
      backEnd: 'Netlify',
    },
    links: [{ name: 'Website', url: 'https://chordapp-dev.netlify.com/' }],
  },
  {
    title: 'Tree Museum',
    description:
      'Artist website and blog for local band Tree Museum. Includes splash page, Instagram integration, show feed and contact form.',
    tech: {
      frontEnd: 'React, PostCSS',
      backEnd: 'Firebase',
    },
    links: [{ name: 'Website', url: 'https://treemuseum.ca/' }],
  },
  {
    title: 'Pomodoro Timer',
    description:
      'An animated pomodoro timer build with React, styled components and gsap',
    tech: {
      frontEnd: 'React, Styled Components, gsap animation',
      backEnd: 'Static hosting on Github Pages',
    },
    links: [
      {
        name: 'Website',
        url: 'https://gregalexsmith.github.io/pomodoro-timer/',
      },
      {
        name: 'Github',
        url: 'https://github.com/gregalexsmith/pomodoro-timer',
      },
    ],
    images: [
      '/images/projects/pomodoro-1.png',
      '/images/projects/pomodoro-2.png',
    ],
  },
  {
    title: 'Soundscape Generator',
    description: `
      Generate an audio backdrop for an image or video using image recognition and open source sounds. 
      Hackathon project with <a href="http://www.alexmaclean.ca/" target="_blank">Alex MacLean</a>.
    `,
    tech: {
      frontEnd:
        'React, Redux, Styled Components, Web Audio API, Google Resonance',
      backEnd: 'Python, AWS',
    },
    links: [
      {
        name: 'Github',
        url: 'https://github.com/amaclean199/soundscape-generator',
      },
    ],
    images: ['/images/projects/soundscape-generator-1.jpg'],
  },
  {
    title: 'Cirroo',
    description:
      'Artist page for electronic musician Cirroo. Showcase new album while providing links for contact and other releases.',
    tech: {
      frontEnd: 'HTML5, CSS3, SASS, Gulp',
      backEnd: 'AWS S3 Static Hosting',
    },
    links: [{ name: 'Website', url: 'http://cirroo.com' }],
  },
];
