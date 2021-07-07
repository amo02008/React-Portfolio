import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Adrienne Osorio | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Adrienne Osorio.',
  subtitle: "I'm a Full Stack Web Development Student.",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'purpleyoga.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume:
    'https://docs.google.com/document/d/1uE1LQuRwhfb7XjRDLEuXr5Vg2STiDGGN-v0C-KtTxD4/edit?usp=sharing',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'TakeoffDesktopScreenshot.png',
    title: 'Takeoff',
    info:
      'A PWA designed to allowed the user to track their travel itinerary (flights, hotel, and activities). There is a blog portion that will allow the user to link photos from their trip to its own board.',
    info2: 'Tools: React, Redux, JavaScript, HTML, Material UI, Miro',
    url: 'https://takeoff123.herokuapp.com/',
    repo: 'https://github.com/amo02008/Takeoff.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'QRMmain.png',
    title: 'Quarantine Recipe Machine',
    info:
      'An application designed to allow the user to input two ingredients they have on hand. Once entered a list of recipes will appear. This will allow the user to find new ways to create meals based on ingredients they already have.',
    info2: 'Tools: JavaScript, HTML, CSS, Materialize, APIs, Figma',
    url: 'https://amo02008.github.io/Quarantine-Recipe-Machine/',
    repo: 'https://github.com/amo02008/Quarantine-Recipe-Machine.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'dashboard_tracker.PNG',
    title: 'Peak Physique',
    info:
      'This application allows users to track their workouts. They can start new workouts or add to one already started.',
    info2: 'Tools: JavaScript, HTML, CSS, Node',
    url: 'https://peak-physique.herokuapp.com/?id=606ce14e12c09a00159b0f2c',
    repo: 'https://github.com/amo02008/PeakPhysique.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'my-notepad.png',
    title: 'Note Taker',
    info: 'This application allows the user to create, save and delete notes.',
    info2: 'Tools: JavaScript, HTML, CSS, APIs',
    url: 'https://my-notepad-notes.herokuapp.com/',
    repo: 'https://github.com/amo02008/My-Notepad.git', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'adrienne.osorio@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/adrienne-osorio-jrdev/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/amo02008',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
