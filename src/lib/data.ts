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
				heading: 'Research Intern — AI Agent for Augmented Reality',
				meta: 'ELIPSE / IRIT · Toulouse · Jun. 2026 – Jul. 2026',
				text: '8-week internship where I developed a proof-of-concept Unity application for an XR headset. It interprets natural-language commands to recognize and segment objects. It was a mix of Unity XR, Meta SDK and UI / HCI building.',
				tags: ['Unity', 'C#', 'XR', 'Object recognition', 'Segmentation', 'HCI', 'UI/UX']
			},
			{
				heading: 'Research internship in GenAI usability in learning computer science.',
				meta: 'ANITI / COMUE Toulouse · Jun. 2025 – August. 2025',
				text: "8-week internship along with Meriem Ouederni and David Brunet. The goal of this internship was to evaluate the potency of GenAI regarding the teaching of Computer Science; It implied studying its potential and its limits, as well as its impact on students'learning capacities. The point was also to better inform students on the ethical implications of GenAIs",
				tags: ['Git', 'Jupyter Notebook', 'Python', 'LangChain', 'Gensim'],
				href: 'https://github.com/YanRabe/LLMSForEducation'
			},
			{
				heading: 'Research internship in 3D printing / modeling',
				meta: 'MFX (Inria) · Villers-lès-Nancy · May 2024 – Jun. 2024',
				text: '6-week internship in the MFX team at Inria, Nancy. The goal of this internship was to develop a Python/Textual tool that could help the team manage their Lua machine profiles for their 3D slicing software.',
				tags: ['Python', 'Textual', 'Lua', 'G-code'],
				href: 'https://github.com/YanRabe/Printer-to-Lua'
			}
		]
	},
	{
		title: 'Volunteering',
		entries: [
			{
				heading: 'Vice-President / Event Manager',
				meta: 'Photo7, ENSEEIHT Photography Club · Apr. 2025 – Apr. 2026',
				text: 'I coordinated 40+ volunteers on more than 12 outside gigs and school events, and helped manage a €9,000 budget notably around future-proofing our computers.',
				tags: ['Event planning', 'Budget management', 'Volunteer coordination', 'Photography']
			},
			{
				heading: 'Web & Logistics Lead',
				meta: 'Les CPPiades 2024 · Sep. 2023 – Jun. 2024',
				text: 'I helped build a Webflow registration and payment site and organised accommodation for more than 600 participants.',
				tags: ['Webflow', 'Event logistics', 'Accommodation', 'Web development']
			}
		]
	},
	{
		title: 'Education',
		entries: [
			{
				heading: 'M.Eng. in Computer Science — Image & Multimedia',
				meta: 'ENSEEIHT, Toulouse · Sep. 2024 – Sep. 2027',
				text: 'I specialise in computer graphics, computer vision, and 3D imaging. My relevant coursework includes real-time rendering, geometry processing, and machine learning for vision.',
				tags: ['Computer graphics', 'Computer vision', '3D imaging', 'Machine learning']
			},
			{
				heading: 'Classe Préparatoire aux Grandes Écoles (MPSI/MP)',
				meta: 'La Prépa des INP, Vandoeuvre · Sep. 2022 – Jun. 2024',
				text: 'I studied mathematics, physics, engineering sciences, and computer science.',
				tags: ['Mathematics', 'Physics', 'Engineering sciences', 'Computer science']
			},
			{
				heading: 'Baccalauréat — American International Section',
				meta: 'Lycée Notre-Dame Saint-Sigisbert, Nancy · 2018 – 2022',
				text: 'I studied in English for 11 hours per week. Before 2018, I was educated in Madagascar.',
				tags: ['English-language instruction']
			},
			{
				heading: 'Middle School',
				meta: 'Lycée Francais de Tananarive',
				text: 'Scientific | British International Section',
				tags: ['Mathematics', 'Physics and Chemistry', 'English literature and history/geography', 'Humanities']
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
			'Teamwork',
			'Problem solving',
			'Adaptability',
			'Fast learning',
			'Creativity',
			'Critical thinking',
			'Organisation',
			'IT: Office and Adobe Suite',
			'Programming: Python, C, C++, C#, Java, OCaml, Lua, Ada',
			'Python: NumPy, Taichi, PyTorch, TensorFlow/Keras, OpenCV',
			'Graphics & vision: OpenGL, OpenCV, OpenMP',
			'Web: JavaScript, TypeScript, Svelte, React, Vite, HTML, CSS',
			'Other: Spring, JPA, G-code',
			'Tools: Git, GitHub, GitHub Actions, Linux, Docker, Unity, Jupyter, VS Code, LaTeX'
		]
	},
	{
		title: 'Languages',
		items: [
			'French -- Native speaker',
			'English -- Fluent (B2 First and C1 Baccaleaureate)',
			'Malagasy -- Native speaker',
			'Spanish -- Basic',
			'Romanian -- Learning the basics'
		]
	},
	{
		title: 'Interests',
		items: [
			'Web development',
			'3D modeling & 3D illusration with Blender',
			'3D printing with IceSL & Ultimaker Cura',
			'Table Tennis',
			'Photography',
			'Experimental pictures',
			'Landscape photography',
			'Street photography',
			'Homelabing',
			'Dancing',
			'Salsa',
			'Pompom club',
			'Video Games',
		]
	},
	{
		title: 'References',
		entries: [
			{
				heading: 'Meriem Ouederni',
				meta: 'Associate Professor, ENSEEIHT / IRIT',
				text: 'Academic reference',
				href: 'mailto:meriem.ouederni@inp-toulouse.fr'
			}
		]
	},
	{
		title: 'Projects',
		entries: [
			{
				heading: 'LLMs for Education',
				meta: '2025 · Research project',
				text: 'I built an evaluation framework to benchmark large language models as computer-science tutors.',
				tags: ['Python', 'LangChain', 'Gensim'],
				href: 'https://github.com/YanRabe/LLMSForEducation'
			},
			{
				heading: 'E-portfolio',
				meta: 'Ongoing',
				text: 'I built this portfolio to present my background, projects, and interests.',
				tags: ['Svelte', 'TypeScript'],
				href: 'https://github.com/YanRabe/yanrabe.github.io/'
			},
			{
				heading: '3D printer profile manager - Printer-to-lua',
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