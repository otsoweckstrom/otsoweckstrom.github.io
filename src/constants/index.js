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
		text: "I'm a software engineer from Helsinki, Finland.",
	},
	{
		line: 4,
		text: '',
	},
	{
		line: 5,
		text: '',
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
			`Web apps - React, TypeScript, CSS, HTML5`,
			`Mobile app development - React Native`,
			`Cloud platforms - AWS, Azure`,
			`Databases - SQL, NoSQL, GraphQL, MongoDB`,
			`Backend and API development`,
			`CDI Pipelines and Version Control`,
		],
	},
]

const projects = [
	{
		name: 'League of Legends AI Prediction',
		description:
			'An extensive AI project which predicts the win rate of the next game and the highest winrate choice based on the lobby.',
		tags: [{ name: 'Python' }, { name: 'TensorFlow' }],
		category: 'Data & Machine Learning',
		image: league,
		source_code_link:
			'https://github.com/otsoweckstrom/AI-Win-Prediction-League',
	},
	{
		name: 'Credit Card Classification Algorithm',
		description:
			'A Machine Learning model to predict credit card category based on customer data using linear regression and random forest techniques. Includes data cleaning, feature engineering, and model evaluation.',
		tags: [{ name: 'R' }],
		category: 'Data & Machine Learning',
		image: creditcard,
		source_code_link:
			'https://github.com/otsoweckstrom/credit_AI/tree/main',
	},
	{
		name: 'Reddit Comment Scraper',
		description:
			'Scrapes subreddit posts, orders words by frequency, and generates a wordcloud.',
		tags: [{ name: 'Python' }],
		category: 'Data & Machine Learning',
		image: wordcloud,
		source_code_link: 'https://github.com/otsoweckstrom/RedditParser',
		youtube_link: 'https://youtube.com/watch?v=FCAnanTNsYs',
	},
	{
		name: 'This Website',
		description:
			'A personal portfolio website built with Vanilla JavaScript, React, and CSS to test my frontend skills and display some projects.',
		tags: [{ name: 'React' }, { name: 'JavaScript' }, { name: 'CSS' }],
		category: 'Full-Stack Web Applications',
		image: portfolio,
		source_code_link: 'https://github.com/otsoweckstrom/all_me/tree/master',
	},
	{
		name: 'Polamk - Work Help Finland',
		description:
			'A mobile app aimed at providing immigrants with labor law information to reduce workplace exploitation.',
		tags: [
			{ name: 'React Native' },
			{ name: 'Android' },
			{ name: 'iOS' },
			{ name: 'CSS' },
		],
		category: 'Mobile Development',
		image: null, // Add an image if available
		source_code_link: '',
		app_link:
			'https://apps.apple.com/fi/app/work-help-finland/id1626783832',
	},
	{
		name: 'Mukify - Moomin Mug Store & Collection App',
		description:
			'A marketplace-style app for managing and purchasing ceramic collectibles, featuring a seamless UI.',
		tags: [
			{ name: 'TypeScript' },
			{ name: 'CSS' },
			{ name: 'Next.js' },
			{ name: 'GraphQL' },
		],
		category: 'Frontend & UI',
		image: null, // Add an image if available
		app_link: 'https://apps.apple.com/fi/app/mukify/id1608787906',
	},
	{
		name: 'Kuljetustilausten Hallintajärjestelmä',
		description:
			'A full-scale logistics system for task assignment, delivery tracking, and billing management.',
		tags: [
			{ name: 'TypeScript' },
			{ name: 'JavaScript' },
			{ name: 'React' },
			{ name: 'CSS' },
			{ name: 'AWS' },
		],
		category: 'Full-Stack Web Applications',
		image: null,
		source_code_link: null,
	},
	{
		name: 'Mittaussovelluksen Päivittäminen',
		description:
			'Upgraded a web-based measurement application with new features and improved backend and database management.',
		tags: [
			{ name: 'JavaScript' },
			{ name: 'Node.js' },
			{ name: 'Azure' },
			{ name: 'VirtualBox' },
			{ name: 'MongoDB' },
			{ name: 'CertBot' },
		],
		category: 'Full-Stack Web Applications',
		image: null,
		source_code_link: null,
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
		category: 'Full-Stack Web Applications',
		image: null,
		source_code_link: null,
	},
]

export { technologies, experiences, projects, hello }
