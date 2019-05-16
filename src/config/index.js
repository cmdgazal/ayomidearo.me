module.exports = {
  siteTitle: 'Aro Ayomide | Data & Software Engineer',
  siteDescription:
    'A creative person who is so passionate about using technology to improve and impact lives. I have experiences in building applications for several areas cutting across mobile & web development and other areas, with a strong feel for machine learning and artificial intelligence.',
  siteKeywords:
    'Aro Ayomide, Aro, Ayomide, ayomidearo, software engineer, data engineer, data pipeline engineer, backend engineer, web developer,nodejs,  javascript, nigeria, aws, android',
  siteUrl: 'https://www.ayomidearo.me',
  siteLanguage: 'en_US',
  siteImage: 'https://ayomidearo.com/og.jpg',

  googleVerification: 'pwsarltZS43FHcoYQ0P4wUV5azl_WlnnqQNsUf5QLIY',

  name: 'Aro Ayomide',
  location: 'Osun State, Nigeria',
  email: 'skilashiaro@gmail.com',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/ayomidearo',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/ayomidearo/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/theayomidearo/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/_ayomidearo',
    },
  ],

  nav: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Interest',
      url: '#interests',
    },
    // {
    //   name: 'Blog',
    //   url: '#blog',
    // },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  twitterHandle: '@_ayomidearo',
  googleAnalyticsID: 'UA-88435548-2',

  headerHeight: 100,

  greenColor: '#4CAF50',
  navyColor: '#0D47A1',

  srConfig: (delay = 200) => {
    return {
      origin: 'bottom',
      distance: '20px',
      duration: 500,
      delay,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      mobile: true,
      reset: false,
      useDelay: 'always',
      viewFactor: 0.25,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    };
  },
};
