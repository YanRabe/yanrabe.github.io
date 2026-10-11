export type LinkItem = {
	label: string;
	href: string;
	external?: boolean;
};

export type SitePath =
	| '/'
	| '/engineering-course'
	| '/sustainability-civic-engagement'
	| '/sport-other-activities'
	| '/repositories'
	| '/cv';

export type NavItem = Omit<LinkItem, 'href'> & { href: SitePath };

export type ImageItem = {
	src: string;
	alt: string;
};

export type ContentSection = {
	title: string;
	intro?: string;
	body?: string[];
	links?: LinkItem[];
	images?: ImageItem[];
};

export type CvEntry = {
	heading: string;
	meta: string;
	text: string;
	tags?: string[];
	href?: string;
};

export type CvSection = {
	title: string;
	entries?: CvEntry[];
	items?: string[];
};

export const navItems: NavItem[] = [
	{ label: 'Welcome', href: '/' },
	{ label: 'Engineering Course ✏️', href: '/engineering-course' },
	{ label: 'Sustainaibility & Civic Engagement', href: '/sustainability-civic-engagement' },
	{ label: 'Sports & Other Activities', href: '/sport-other-activities' },
	{ label: 'Repositories', href: '/repositories' },
	{ label: 'Cv', href: '/cv' }
];

export const socialLinks: LinkItem[] = [
	{ label: 'GitHub', href: 'https://github.com/YanRabe', external: true },
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/yan-rabefaniraka', external: true },
	{ label: 'Instagram', href: 'https://instagram.com/yan_334', external: true },
	{ label: 'Email', href: 'mailto:yan.rabefaniraka@etu.inp-n7.fr', external: true }
];

export const profile = {
	name: 'Yan Rabefaniraka',
	discipline: 'M.Eng. candidate in Computer Science (Image & Multimedia) at ENSEEIHT',
	location: 'Toulouse, France',
	institution: 'ENSEEIHT',
	portrait: '/assets/Photo_CV.jpg'
};

export const homepageHighlights = [
	{
		number: '01',
		title: 'Academic background',
		text: 'Currently studying at ENSEEIHT engineering school, I am a student in computer science. I am passionate about 3D modelisation/3Dprinting and I am always looking for new challenges in computer graphics, computer vision, and 3D imaging. I expect to graduate in September 2027.'
	},
	{
		number: '02',
		title: 'Summer 2024 Internship',
		text: "In 2024, I was shortly an intern at MFX for 6 weeks, under Sylvain Lefebvre's supervision. My job there was to develop a small but complete Python App that would help the team generate harmonised 3d-printer profiles for their 3D Slicer. For that, I taught myself how to use the Textual module to create a pretty UI for the app, but I also had to actually understand how the machines work. Do not hesitate to check my internship report in the publications page, as well as the project's repository in the projects and repositories sections. This internship was necessary to validate my 2 years at La Prépa des INP - Nancy, where I studied science courses in order to prepare my entry in an engineering school."
	},
	{
		number: '03',
		title: 'Summer 2025 Internship',
		text: "Summer of 2025, I had a 8 weeks internship at ANITI under Meriem Ouederni's and David Brunet's supervision. We tried to quantify the usefulness of GenAIs academic-wise-- Specifically regarding Computer Science--, by establishing use cases and seeking its potential as well as it limits. Similarly to the previous internship, you can read more about it in the publications page, as well as the project's repository in the projects and repositories sections. This internship validated my 1st year of Engineering School at ENSEEIHT."
	},
	{
		number: '04',
		title: '2026 Research Internship — AI Agent for Augmented Reality',
		text: 'At ELIPSE / IRIT in Toulouse, I developed a proof-of-concept Unity application for an XR headset. It interprets natural-language commands for object recognition and segmentation.'
	},
];

export const engineeringSemesters = [
	{
		title: 'Semester 5',
		year: 'Year 1',
		items: [
			'Imperative programming',
			'Numerical analysis & Statistics',
			'Integration and Applications & Probabilities',
			'Automatic Control & Data Analysis',
			'Scientific modeling & Architecture'
		]
	},
	{
		title: 'Semester 6',
		year: 'Year 1',
		items: [
			'Telecommunications & Signal processing',
			'Network & Internet protocols',
			'Machine Learning & Scientific Calculus',
			'Systems & Architecture',
			'Object Oriented Programming'
		]
	},
	{
		title: 'Semester 7',
		year: 'Year 2',
		items: [
			'Functional Programming & Language Translation',
			'Automatons, Language Theory & Graphs',
			'Model-Driven Engineering (Metamodeling) & Meta-programming',
			'Numerical Analysis (optimisation) & Operational Research',
			'Concurrent Systems & Middleware'
		]
	},
	{
		title: 'Semester 8',
		year: 'Year 2',
		items: [
			'Concurrent Apps (OpenMP), Web Apps & Databases',
			'Audiovisual Data Processing',
			'Image Processing, 2D/3D Modeling & Rendering',
			'Geometric Modeling & Partial Differential Equation',
			'Modeling - Architecture',
			'Deep Learning & Computer Graphics'
		]
	}
];

export const civicSections: ContentSection[] = [
	{
		title: 'CPPiades 2024 🏉',
		body: [
			'I was Web & Logistics Lead for CPPiades 2024, a three-day event bringing together more than 600 participants from Prépa des INP sites across France. I helped maintain a Webflow registration and payment site, and organised participant accommodation.'
		],
		links: [{ label: 'Visit CPPiades 2024', href: 'https://www.cppiades2024.fr/', external: true }],
		images: [
			{ src: '/assets/mine.png', alt: 'CPPiades event photograph' },
			{ src: '/assets/accueil-yan-26.JPG', alt: 'CPPiades welcome area' }
		]
	},
	{
		title: 'Photo7 📸',
		body: [
			"As vice-president and event manager of ENSEEIHT’s photography club from April 2025 to April 202, I was responsible for the association's event planning: I coordinated over 50 volunteers from outside gigs to school events. "
		]
	},
	{
		title: '7Voix 🎤',
		body: [
			'Similarly, I am now the vice-president of our choir-club; Responsibilities are minimal here as I am mainly expected to help run our singing sessions and coordinate the club’s overall organisation along with the other members of the bureau.'
		]
	},
	{
		title: 'Vegetarianism 🍽️🌱',
		body: [
			"Due to my personal convictions regarding animal rights along with the known impact of the meat industry on our planet's climate, it has now been 5 years since I went almost fully vegetarian (except for eggs and cheese). This is a fundamentally personal journey I imposed solely on myself, with one of my goals being to better my food consumption's quality and lessen my individual impact on the environment."
		]
	}
];

export const activitySections: ContentSection[] = [
	{
		title: 'Table Tennis 🏓',
		body: [
			"Before getting into Classe Préparatoire, I used to play table tennis for a decent amount of hours each week (between 2 to 4). I played for my local club called TTNM which stands for Tennis de Table Neuves-Maisons. Although my performances in competitive play were honestly rather horrendous, I enjoyed playing casually and the sport's technical aspect still amazes me to this day. That's why, with a friend of mine who also played table tennis we decided to continue playing while in Classe Préparatoire, with a weekly meetup each Saturday at Lorraine-INP 's private residence for an hour long fierce competition, thus begetting a never-ending rivalry between the two of us."
		],
		images: [{ src: '/assets/table_tennis.jpg', alt: 'Table Tennis competition' }]
	},
	{
		title: 'Dancing 💃',
		body: [
			"As a heritage from my mother's own passion, I love expressing myself by dancing. I never had any actual lesson, but each time I had the occasion to join a dancing group or club of some sort, I took it. For instance, I was a highly invested pompom boy during both the CPPiades 2023 and the CPPiades 2024 (It's me on Nancy's miniature cover ✨). As of now, I continue my journey as a pompom boy for ENSEEIHT's own pompom-club. Plus, I end my monday evenings by dancing Salsa with the school's Salsa club."
		],
		images: [{ src: '/assets/mine.png', alt: 'Dancing at an event' }]
	},
	{
		title: '3D Modeling and 3D printing 🖼️',
		body: [
			'This new obession has now stuck with me since the end of high school, and has been directing most of my life choices since: From my internship to my desired specialisation in image rendering, everything is influenced by my desire to contribute to the evolution of my passion. I am now quite decent at using the 3D modeling software Blender, as well as 3D printing little gizmos at home thanks to my personal 3D printer.'
		],
		images: [
			{
				src: '/assets/revachol.png',
				alt: '3D model of a small object'
			},
			{ src: '/assets/bus_stop.png', alt: '3D model of a bus stop' },
			{
				src: '/assets/mine_3d.JPG',
				alt: 'Personal 3D printing project'
			}
		]
	},
	{
		title: 'Music 🎸',
		body: [
			'As an avid music fan, I cannot stress how important it is for me to listen to some music before going to school or on the way back home. Furthermore I recently strengthened this passion for music by trying to learn how to play the guitar. I was - I acknowledge - a bit helped by my previous 8 years of piano...'
		],
		images: [{ src: '/assets/guitar.jpg', alt: 'Guitar' }]
	},
	{
		title: 'Photography 📸',
		body: [
			'This is probably my most important hobby. I use photography as an expression of my inner feelings, as a way to capture and celebrate life around me, or just as a silly way of venting and having fun. Although it did not define the course of my education unlike 3D modeling, it plays a major role in defining who I am as an individual. I encourage you to check the Instagram account I share with a close friend (my photos are the ones with white borders).'
		],
		links: [
			{ label: 'See our Instagram', href: 'https://instagram.com/Cedrouuu_Yanouuu', external: true }
		],
		images: [
			{
				src: '/assets/ski.jpg',
				alt: 'Landscape photograph from a ski trip'
			},
			{ src: '/assets/plant.jpg', alt: 'Close-up plant photograph' },
			{ src: '/assets/dopplr.png', alt: 'Experimental photograph' }
		]
	},
	{
	title: 'Video Games 🎮',
	body: ['I enjoy video games as a hobby. I sometimes partake in small Game development as a learning strategy.']
},
{
	title: 'Homelabing 🖥️',
	body: ['I enjoy building and experimenting with home lab systems, notably hosting a media server at home.']
},
];

export const cvSections: CvSection[] = [
	{
		title: 'Work',
		entries: [
			{
				heading: 'Research internship in GenAI usability in learning computer science.',
				meta: 'ANITI',
				text: "8-week internship along with Meriem Ouederni and David Brunet. The goal of this internship was to evaluate the potency of GenAI regarding the teaching of Computer Science; It implied studying its potential and its limits, as well as its impact on students'learning capacities. The point was also to better inform students on the ethical implications of GenAIs",
				tags: ['Git', 'Jupyter Notebook', 'Python', 'LangChain', 'Gensim'],
				href: 'https://github.com/YanRabe/LLMSForEducation'
			},
			{
				heading: 'Research internship in 3D printing / modeling',
				meta: 'MFX (Inria Nancy)',
				text: '6-week internship in the MFX team at Inria, Nancy. The goal of this internship was to develop a Python tool that could help the team manage their machine profiles for their 3D slicing software.',
				tags: [
					'Python (Textual library)',
					'Lua',
					'Git',
					'Technical study of the software and the machines',
					'Material study',
					'Assisting the team in their daily tasks and practical experiments'
				],
				href: 'https://github.com/YanRabe/Printer-to-Lua'
			}
		]
	},
	{
		title: 'Volunteer',
		entries: [
			{
				heading: 'Apprentice Photographer',
				meta: 'Photo7',
				text: "As a member of ENSEEIHT's photography association's bureau, I am in charge of preparing plannings for our volunteering photogaraphs, as well as giving out information regarding the events.",
				tags: [
					'Organisation and team management',
					'communicating information to our members',
					'Photography'
				]
			},
			{
				heading: 'Acommodation department manager | Webdev | Photographer',
				meta: 'CPPiades 2024 - CLAC',
				text: "Yearly event organized by the COMITE LIBRE POUR L'ACCOMPLISSEMENT DES CPPIADES association. The goal of this event is to gather students from all over France to participate in sports competitions. I was in charge of the acommodation department and I also developed and updated part of the website for the event.",
				tags: [
					'Team management',
					'No-code web development',
					'Communication with the participants',
					'Problem solving',
					'Event organization',
					'General staffing (cleaning, welcoming, match management, cloackroom management.)'
				]
			}
		]
	},
	{
		title: 'Education',
		entries: [
			{
				heading: "Engineering Master's degree",
				meta: 'ENSEEIHT - National School of Electrical Engineering, Electronics, Computer Science, Hydraulics and Telecommunications',
				text: 'Computer Science',
				tags: ['Computer Science', 'Mathematics', 'Engineering Sciences', 'Humanities']
			},
			{
				heading: 'Classe Préparatoire',
				meta: 'Classe Préparatoire aux Grandes Ecoles - Prépa des INP',
				text: 'Engineering with a focus on Computer Science',
				tags: [
					'Computer Science',
					'Mathematics',
					'Physics and Chemistry',
					'Engineering Sciences',
					'Ecology | Biology',
					'Humanities'
				]
			},
			{
				heading: 'High School',
				meta: 'Lycée Notre-Dame Saint-Sigisbert',
				text: 'Scientific Baccalaureate | American International Section',
				tags: [
					'Mathematics',
					'Computer Science',
					'English literature and history/geography',
					'Humanities'
				]
			},
			{
				heading: 'Middle School',
				meta: 'Lycée Francais de Tananarive',
				text: 'Scientific | British International Section',
				tags: [
					'Mathematics',
					'Physics and Chemistry',
					'English literature and history/geography',
					'Humanities'
				]
			}
		]
	},
	{
		title: 'Certificates',
		entries: [
			{
				heading: 'Cambridge First Certificate in English',
				meta: 'Cambridge University · 2020-12-01',
				text: ''
			},
			{
				heading: 'French Baccalaureate with International Option (~C1)',
				meta: 'Lycée Notre-Dame Saint-Sigisbert · 2012-07-01',
				text: '',
				href: 'https://www.notredamesaintsigisbert.fr/'
			}
		]
	},
	{
		title: 'Skills',
		items: [
			'Soft Skills',
			'Teamwork',
			'Problem solving',
			'Adaptability',
			'Fast learning',
			'Creativity',
			'Critical thinking',
			'Organisation',
			"Cleaning (believe me I'm good at it)",
			'IT',
			'Office and Adobe Suite',
			'Windows andLinux',
			'Git / GitHub',
			'VsCode',
			'Programming',
			'Python',
			'Matlab',
			'C',
			'Ocaml',
			'Ada',
			'JSON',
			'Lua',
			'HTML/CSS/JavaScript',
			'Svelte Framerwork (includes Typescript)',
			'SQL',
			'Java',
			'GCODE'
		]
	},
	{
		title: 'Languages',
		items: [
			'French',
			'Native speaker',
			'English',
			'Fluent (B2 First and C1 Baccaleaureate)',
			'Malagasy',
			'Native speaker',
			'Spanish',
			'Basic',
			'Romanian',
			'Learning the basics'
		]
	},
	{
		title: 'Interests',
		items: [
			'Programming',
			'Python',
			'Web development',
			'3D modeling',
			'Blender',
			'IceSL',
			'Ultimaker Cura',
			'3D illusration',
			'3D printing',
			'Table Tennis',
			'Tennis de Table Neuves-Maisons (TTNM)',
			'Photography',
			'Experimental pictures',
			'Landscape photography',
			'Street photography',
			'Dancing',
			'Salsa',
			'Pompom club',
			'Video Games',
			'Solo games'
		]
	},
	{
		title: 'References',
		entries: [
			{
				heading: 'Meriem OUEDERNI',
				meta: 'Teacher and researcher for ENSEEIHT and IRIT.',
				text: ''
			}
		]
	},
	{
		title: 'Projects',
		entries: [
			{
				heading: 'E-portfolio using Jekyll, Github Pages and the Al-Folio template',
				meta: '2024.09 - NO END DATE',
				text: 'This is my e-portfolio. It is a static website generated using Jekyll and hosted on GitHub Pages. It is a simple and efficient way to present my resume and my projects.',
				tags: ['Jekyll', 'Github Pages', 'Markdown', 'Self-learning journey'],
				href: 'https://github.com/YanRabe/yanrabe.github.io/'
			},
			{
				heading: '3D printer profile manager - {Printer-to-lua}',
				meta: '2024.05 - 2024.06',
				text: 'This is a Python tool that I developed during my internship at Inria Nancy. It is a simple and efficient way to manage the machine profiles for the 3D slicing software used by the MFX team.',
				tags: [
					'Python',
					'Textual library',
					'Lua',
					'Git',
					'Technical study of the software and the machines',
					'Material study',
					'Assisting the team in their daily tasks and practical experiments'
				],
				href: 'https://github.com/YanRabe/Printer-to-Lua'
			}
		]
	}
];

export const frenchCvHref = '/assets/pdf/French_Cv_Yan_Rabefaniraka.pdf';