import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  lut,
  seoultech,
  ajatec,
  twoday,
  visma,
  r,
  pytorch,
  python,
  tensorflow,
  graphql,
  flutter,
  unity,
  mysql,
  nextjs,
  league,
  portfolio,
  creditcard,
  wordcloud,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const hello = [
  { line: 1, text: 'Hello!' },
  { line: 2, text: 'My name is Otso Weckström.' },
  {
    line: 3,
    text: "I'm a Software Engineer from Helsinki, Finland.",
  },
  {
    line: 4,
    text: 'This is my portfolio.',
  },
]

const projectIntro = [
  {
    id: 1,
    text: "Over the years, I've explored a wide range of technologies. Here, you'll find a collection of projects—some from experimentation, others from real-world applications.",
  },
  {
    id: 2,
    text: "For personal projects, I've included both source code and live demos so you can explore them further. Professional consulting work is also showcased, but due to confidentiality, I can't share the code publicly.",
  },
  {
    id: 3,
    text: "Curious about a project? Let's chat over coffee! ☕",
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'python',
    icon: python,
  },
  {
    name: 'pytorch',
    icon: pytorch,
  },
  {
    name: 'R',
    icon: r,
  },
  {
    name: 'TensorFlow',
    icon: tensorflow,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'GraphQL',
    icon: graphql,
  },
  {
    name: 'Flutter',
    icon: flutter,
  },
  {
    name: 'NextJS',
    icon: nextjs,
  },
  {
    name: 'Unity',
    icon: unity,
  },
  {
    name: 'MySQL',
    icon: mysql,
  },
]

const experiences = [
  {
    title: 'Software Engineering Studies',
    company_name: 'LUT University',
    icon: lut,
    iconBg: '#000',
    date: '2018-2024',
    points: [
      `Cluster ry - Software Engineers' Guild - Board Member`,
      `Ruut ry - Student Tech Organization - Board Member`,
      'Achieving Student - Certificate',
      `Scrum Master Training`,
    ],
  },
  {
    title: 'Junior Developer ',
    company_name: 'Visma Consulting',
    icon: visma,
    iconBg: '#fff',
    date: '2021-2023',
    points: [
      'Developed full-scale web applications in small agile teams.',
      `Built a logistics system for 100+ weekly deliveries with AWS & TypeScript.`,
      'Got to work on many interesting projects with clients from all sorts of different industries',
      `Was left to oversee an ongoing project over the summer on my 2nd year which gave me a real headstart to client communications`,
    ],
  },
  {
    title: `Bachelor's  Degree in Software Engineering`,
    company_name: 'LUT University',
    icon: lut,
    iconBg: '#000',
    date: '2022',
    points: ['"I think I can see light at the end of the tunnel"'],
  },
  {
    title: 'Computer Science Studies',
    company_name: 'Seoul National University of Technology and Science',
    icon: seoultech,
    iconBg: '#fff',
    date: '2023-2024',
    points: [
      'Focused my studies on Artificial Intelligence and Machine Learning',
      'Dug deep and found my inner academic weapon forged in the flames of the Korean education system',
      `Met many wonderful and extremely intelligent people that I'm thankful to have gotten to share the time abroad with`,
    ],
  },
  {
    title: `Master's Thesis`,
    company_name: 'Ajatec Oy, Suomen Teknologiateollisuudenliitto, LUT',
    icon: ajatec,
    iconBg: '#fff',
    date: '2024',
    points: [
      'Thesis title: Machine Learning in Additive Manufacturing',
      `Analyzing Ajatec Oy's historical data of CAD models to find profitability indicators`,
      'The project received a research grant from Suomen Teknologiateollisuudenliitto',
      ` Python | R | Pytorch | Tensorflow | CAD `,
    ],
  },
  {
    title: 'Developer',
    company_name: 'TwoDay',
    icon: twoday,
    iconBg: '#fff',
    date: '2023-Present',
    points: [
      `Started work at Twoday Oy after moving to Helsinki, new projects new challenges!`,
      `Web apps - React, TypeScript, CSS`,
      `Mobile app development - React Native`,
      `Cloud platforms - AWS, Azure`,
      `Databases - SQL, NoSQL, GraphQL, MongoDB, DynamoDB`,
      `Backend and API development -  Node.js, Express.js, JavaScript, RESTful`,
    ],
  },
]

const projects = [
  {
    name: 'Onboarding Website',
    description:
      'This onboarding website built using TypeScript, TailwindCSS and React.',
    tags: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'TailwindCSS' },
      { name: 'Node.js' },
    ],
    category: 'Full-Stack Web Applications',
    professional: false,
    image: require('../assets/images/projects/projects_onboarding_website.png'),
    /*     source_code_link: 'https://github.com/otsoweckstrom/all_me/tree/master', */
    app_link: 'https://www.northernprogramming.com',
  },
  {
    name: 'Portfolio Website',
    description: `A personal portfolio website built with Vanilla JavaScript, React, and CSS.

    Checkout my CV at the bottom!`,
    tags: [
      { name: 'React' },
      { name: 'JavaScript' },
      { name: 'CSS' },
      { name: 'Node.JS' },
    ],
    category: 'Full-Stack Web Applications',
    professional: false,
    image: require('../assets/images/projects/projects_portfolio_website.png'),
    source_code_link: 'https://github.com/otsoweckstrom/all_me/tree/master',
    app_link: 'https://www.otsoweckstrom.com',
  },
  {
    name: 'CAD Model Profitability Classifier',
    description:
      "A machine learning project built as a part of my Master's Thesis that classifies CAD models as profitable or non-profitable based on geometric and dimensional features. The model is trained on a dataset of 10,000+ CAD models, identifying characteristics that correlate with higher print demand.",
    tags: [
      { name: 'Python' },
      { name: 'Scikit-Learn' },
      { name: 'Pandas' },
      { name: 'Machine Learning' },
    ],
    category: 'Data & Machine Learning',
    professional: true,
    image: require('../assets/images/projects/projects_cad_model_classifier.png'),
    source_code_link:
      'https://github.com/otsoweckstrom/CAD-Profitability-Classifier',
  },
  {
    name: 'AI Result Predictor',
    description:
      'An extensive AI project that predicts the win-rate based on changes in game state in a competitive game with an expected winrate of 50%, beating this by up to 10.4% and giving an average edge of 3.8%.',
    tags: [{ name: 'Python' }, { name: 'TensorFlow' }],
    category: 'Data & Machine Learning',
    professional: false,
    image: require('../assets/images/projects/projects_league_ai.png'),
    source_code_link:
      'https://github.com/otsoweckstrom/AI-Win-Prediction-League/blob/main/project.ipynb',
  },
  {
    name: 'Credit Card Classification Algorithm',
    description:
      'A Machine Learning model to predict credit card category based on customer data using linear regression and random forest techniques. Includes data cleaning, feature engineering, and model evaluation.',
    tags: [{ name: 'R' }],
    category: 'Data & Machine Learning',
    professional: false,
    image: require('../assets/images/projects/projects_credit_cards.png'),
    source_code_link: 'https://github.com/otsoweckstrom/credit_AI/tree/main',
  },
  {
    name: 'Reddit Comment Insights',
    description:
      'Get insights into trending topics on reddit at a glance. Scrapes subreddit posts, orders words by frequency, and generates data visualizations.',
    tags: [{ name: 'Python' }],
    category: 'Data & Machine Learning',
    professional: false,
    image: require('../assets/images/projects/projects_reddit.png'),
    source_code_link: 'https://github.com/otsoweckstrom/RedditParser',
    youtube_link: 'https://youtube.com/watch?v=FCAnanTNsYs',
  },
  {
    name: 'Work Help Finland Mobile App',
    description:
      'A mobile app aimed at providing immigrants with labor law information to reduce workplace exploitation.',
    tags: [
      { name: 'React Native' },
      { name: 'Android' },
      { name: 'iOS' },
      { name: 'CSS' },
    ],
    category: 'Mobile Development',
    professional: true,
    image: require('../assets/images/projects/projects_work_help_finland.png'),
    app_link: 'https://apps.apple.com/fi/app/work-help-finland/id1626783832',
  },
  {
    name: 'Mukify - Moomin Mug Store',
    description:
      'A marketplace-style app for managing and purchasing ceramic collectibles. 24 000+ Users ',
    tags: [
      { name: 'TypeScript' },
      { name: 'CSS' },
      { name: 'Next.js' },
      { name: 'GraphQL' },
    ],
    category: 'Mobile Development',
    professional: true,
    image: require('../assets/images/projects/projects_mukify.png'),
    app_link: 'https://www.mukify.com/fi',
  },
  {
    name: 'Logistics Management System',
    description:
      'A full-scale logistics system for task assignment, delivery tracking, and billing management. Built for a medium sized trucking company with multiple delivery routes a day.',
    tags: [
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'React' },
      { name: 'CSS' },
      { name: 'AWS' },
    ],
    category: 'Full-Stack Web Applications',
    professional: true,
    image: require('../assets/images/projects/projects_logistics_calendar.png'),
  },
  {
    name: 'Security Awareness Application',
    description:
      "Developed an app for F-Secure to inform the public about potential security vulnerabilities in their devices. Integrated a known vulnerability database, and provided the results rewritten in layman's terms by using OpenAI's API.",
    tags: [
      { name: 'JavaScript' },
      { name: 'React' },
      { name: 'Node.js' },
      { name: 'CSS' },
      { name: 'OpenAI API' },
      { name: 'ChatGPT' },
      { name: 'CVE' },
    ],
    category: 'Full-Stack Web Applications',
    professional: false,
    image: require('../assets/images/projects/projects_f_secure.png'),
    /*     source_code_link: 'https://github.com/RASP-Team-H/f-secure-iot', */
  },
  {
    name: 'Food Tracking App',
    description:
      'A food tracking application using ChatGPT to analyze menu data and display nutritional and environmental impact information.',
    tags: [
      { name: 'JavaScript' },
      { name: 'SQL' },
      { name: 'Python' },
      { name: 'React' },
      { name: 'Node.js' },
      { name: 'CSS' },
      { name: 'API' },
    ],
    category: 'Mobile Development',
    professional: true,
    image: null,
    source_code_link: null,
  },
]

export { technologies, experiences, projects, hello, projectIntro }
