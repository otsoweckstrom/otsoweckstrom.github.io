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
  { line: 2, text: 'I am Otso Weckström' },
]

const services = []

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
      'Achieving Student Certificate',
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
      'Got to work on many interesting projects with clients from all sorts of different industries',
      `Projects ranged from refactoring an old Kotlin application to planning and implementing full scale web apps`,
      `Worked mainly in small teams with agile development methodologies`,
      `Emphasis on frontend development, TypeScript and React but got to use and learn a whole array of technologies`,
      `Was left to oversee an ongoing project over the summer on my 2nd year which gave me a real headstart to client communications`,
    ],
  },
  {
    title: `Bachelor's  Degree in Software Engineering`,
    company_name: 'LUT University',
    icon: lut,
    iconBg: '#000',
    date: '2021',
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
      `Web apps - React, TypeScript, CSS, HTML5`,
      `Mobile app development - React Native`,
      `Cloud platforms - AWS, Azure`,
      `Databases - SQL, NoSQL, GraphQL, MongoDB`,
      `Backend and API development`,
      `CDI Pipelines and Version Control`,
    ],
  },
]

const testimonials = []

const projects = [
  {
    name: 'League of Legends AI prediction',
    description:
      'An AI model used to predict the winning team and best picks based on selected champions.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
    ],
    image: seoultech,
    source_code_link:
      'https://github.com/otsoweckstrom/AI-Win-Prediction-League',
  },
  {
    name: 'This Website',
    description: 'Portfolio website made using React, JavaScript and CSS',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'JavaScript',
        color: 'blue-text-gradient',
      },
    ],
    image: seoultech,
    source_code_link: 'github',
  },
  {
    name: 'League of Legends AI prediction',
    description:
      'An AI model used to predict the winning team and best picks based on selected champions.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
    ],
    image: seoultech,
    source_code_link:
      'https://github.com/otsoweckstrom/AI-Win-Prediction-League',
  },
  {
    name: 'This Website',
    description: 'Portfolio website made using React, JavaScript and CSS',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'JavaScript',
        color: 'blue-text-gradient',
      },
    ],
    image: seoultech,
    source_code_link: 'github',
  },
]

export { services, technologies, experiences, testimonials, projects, hello }
