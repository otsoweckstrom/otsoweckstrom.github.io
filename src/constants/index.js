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

const testimonials = []

const projects = [
	{
		name: 'League of Legends AI prediction',
		description:
			'An extensive AI project which predicts the win rate of the next game and the highest winrate choice based on the lobby.',
		tags: [
			{
				name: 'python',
			},
			{
				name: 'Tensorflow',
			},
		],
		image: league,
		source_code_link:
			'https://github.com/otsoweckstrom/AI-Win-Prediction-League',
	},
	{
		name: 'This Website',
		description:
			'A personal portfolio website built with Vanilla JavaScript, React, and CSS to test my frontend skills and display some projects.',
		tags: [
			{
				name: 'React',
			},
			{
				name: 'JavaScript',
			},
			{
				name: 'CSS',
			},
		],
		image: portfolio,
		source_code_link: 'https://github.com/otsoweckstrom/all_me/tree/master',
	},
	{
		name: 'Credit Card Classification Algorithm',
		description:
			'A Machine Learning model to predict credit card category based on customer data. The project utilizes multiple ML and data analysis techniques such as data cleaning, feature engineering, and building predictive models using linear regression and random forest techniques. The project also explores model evaluation methods such as AUROC and k-fold cross-validation.',

		tags: [
			{
				name: 'R',
			},
		],
		image: creditcard,
		source_code_link:
			'https://github.com/otsoweckstrom/credit_AI/tree/main',
	},
	{
		name: 'Reddit Comment Scraper',
		description:
			'The script scrapes each comment section of a chosen subreddits posts and orders the words found from most common to least common as well as creates a wordcloud based on the word counts.',
		tags: [
			{
				name: 'python',
			},
		],
		image: wordcloud,
		source_code_link: 'https://github.com/otsoweckstrom/RedditParser',
		youtube_link: 'https://youtube.com/watch?v=FCAnanTNsYs',
	},
	{
		name: 'Machine vision shooting range Demo',
		description:
			'A computer vision application developed for a finnish gun manufacturer as part of a competitive demo. The demo detects orange-colored objects and alerts the user, aimed at ensuring safety by identifying items such as hunter safety vests in front of firearms.',
		tags: [{ name: 'Python' }, { name: 'OpenCV' }],
		image: null, // Add an image if available
		source_code_link: null, // Add a link if public code is available
	},
	{
		name: 'Polamk - Work Help Finland',
		description:
			'A mobile application aimed at immigrants and asylum seekers in Finland. The app provides information about their rights, particularly in labor law, to reduce workplace exploitation.',
		tags: [
			{ name: 'React Native' },
			{ name: 'Android' },
			{ name: 'iOS' },
			{ name: 'CSS' },
		],
		image: null, // Add an image if available
		source_code_link:
			'https://apps.apple.com/fi/app/work-help-finland/id1626783832',
	},
	{
		name: 'Absentus',
		description:
			'A full-scale web application for funeral services, allowing users to reserve and manage tasks related to grave sites, such as booking, maintenance, and tombstone selection.',
		tags: [
			{ name: 'React' },
			{ name: 'TypeScript' },
			{ name: 'JavaScript' },
			{ name: 'CSS' },
			{ name: 'AWS' },
		],
		image: null, // Add an image if available
		source_code_link: null, // Add a link if public code is available
	},
	{
		name: 'Mukify - Moomin Mug Store & Collection App',
		description:
			'An application designed for buying and tracking ceramic products, particularly Moomin mugs. The app features a marketplace-style frontend for seamless browsing and collection management.',
		tags: [
			{ name: 'TypeScript' },
			{ name: 'CSS' },
			{ name: 'Next.js' },
			{ name: 'GraphQL' },
		],
		image: null, // Add an image if available
		source_code_link: 'https://apps.apple.com/fi/app/mukify/id1608787906',
	},
	{
		name: 'PAM-tes Android App Refactor',
		description:
			'Refactored and updated an existing Android application that allows users to check collective labor agreements for various industries. The update included replacing outdated links, removing deprecated functionalities, and fixing a few bugs.',
		tags: [
			{ name: 'Android' },
			{ name: 'Java' },
			{ name: 'XML' },
			{ name: 'JSON' },
		],
		image: null, // Add an image if available
		source_code_link: null, // Add a link if public code is available
	},
	{
		name: 'Kuljetustilausten Hallintajärjestelmä',
		description:
			'A full-scale web application developed to replace an old manual logistics system for a transportation company. The new system allows managers to track and manage deliveries, assign tasks to drivers, and prepare billing, all within a web interface.',
		tags: [
			{ name: 'TypeScript' },
			{ name: 'JavaScript' },
			{ name: 'React' },
			{ name: 'CSS' },
			{ name: 'AWS' },
		],
		image: null, // Add an image if available
		source_code_link: null, // Add a link if public code is available
	},
	{
		name: 'Mittaussovelluksen Päivittäminen',
		description:
			'Updated and continued development of a web-based measurement application, including upgrading to the latest software versions and adding new features. The application runs on Azure and uses various technologies for backend and database management.',
		tags: [
			{ name: 'JavaScript' },
			{ name: 'Node.js' },
			{ name: 'Azure' },
			{ name: 'VirtualBox' },
			{ name: 'MongoDB' },
			{ name: 'CertBot' },
		],
		image: null, // Add an image if available
		source_code_link: null, // Add a link if public code is available
	},
	{
		name: 'Food Tracking App',
		description:
			'A food tracking application that enables users to add meals either by manually inputting data or by taking a picture of a menu. The app processes the menu using ChatGPT and retrieves food nutrition and environmental impact information from a database. My contributions included engineering the backend to process and structure the database data for use in the project, developing a script to format the data into an SQL-compatible format, and implementing features such as statistics visualization, user registration, profile management, and backend API routes.',
		tags: [
			{ name: 'JavaScript' },
			{ name: 'SQL' },
			{ name: 'Python' },
			{ name: 'React' },
			{ name: 'Node.js' },
			{ name: 'CSS' },
			{ name: 'API' },
		],
		image: null, // Add an image if available
		source_code_link: null, // Add a link if public code is available
	},
]

export { services, technologies, experiences, testimonials, projects, hello }
