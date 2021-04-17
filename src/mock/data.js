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
  resume: 'https://drive.google.com/file/d/1Bw11i_AmzddwBS89MCx8VC1T70uqZ0xJ/view?usp=sharing',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'my-notepad.png',
    title: 'Note Taker',
    info: 'This application allows the user to create, save and delete notes.',
    info2: '',
    url: 'https://my-notepad-notes.herokuapp.com/',
    repo: 'https://github.com/amo02008/My-Notepad.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'dashboard_tracker.PNG',
    title: 'Peak Physique',
    info: '',
    info2: '',
    url: 'https://peak-physique.herokuapp.com/?id=606ce14e12c09a00159b0f2c',
    repo: 'https://github.com/amo02008/PeakPhysique.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'budget-tracker.PNG',
    title: 'Budget Tracker',
    info:
      'This budget tracker will allows the user to keep tabs of their balance whether they are online or offline',
    info2: '',
    url: 'https://offline-budget-app1.herokuapp.com/',
    repo: 'https://github.com/amo02008/Online-Offline-Budget-Tracker.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'QRMmain.png',
    title: 'Quarantine Recipe Machine',
    info:
      'An application designed to allow the user to input two ingredients they have on hand. Once entered a list of recipes will appear. This will allow the user to find new ways to create meals based on ingredients they already have.',
    info2: '',
    url: 'https://amo02008.github.io/Quarantine-Recipe-Machine/',
    repo: 'https://github.com/amo02008/Quarantine-Recipe-Machine.git', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
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
