import { Metadata } from "next";

export const SEO = {
    siteUrl: "https://yourdomain.com",
    title: "Dadots | Full Stack Developer",
    description:
        "Portfolio of Darius Paul Bacate — Full Stack Developer specializing in modern web applications.",
    keywords: [
        "Darius Bacate",
        "Dadots",
        "Full Stack Developer",
        "Next.js Developer",
        "React Developer",
    ],
    ogImage: "/og-image.png", // or "/me.webp"
};

export const menu = [
    {
        id: 1,
        name: "Home",
        link: "home",
        icon: "home",
    },
    {
        id: 2,
        name: "Skills",
        link: "skills",
        icon: "skills",
    },
    {
        id: 3,
        name: "Experience",
        link: "experience",
        icon: "experience",
    },
    {
        id: 4,
        name: "Projects",
        link: "projects",
        icon: "projects",
    },
];

export const coreSkills = [
    "React Js",
    "Next Js",
    "Vite",
    "Laravel",
    "TypeScript",
    "NodeJS",
    "MySql",
    "GIT"
];

export const Bio = {
    name: "Darius Paul Bacate",
    picture: "/me.webp",
    roles: ["Full Stack Developer", "Web Developer", "Programmer"],
    description:
        "Eager and flexible, always up for new challenges. With a positive mindset and a thirst for growth, Always excited to learn and excel.",
    github: "https://github.com/dadots",
    resume:
        "https://drive.google.com/file/d/1xM-fQjfXU-41W6mse31KACVUPq5KBF16/view?usp=sharing",
    linkedin: "https://www.linkedin.com/in/darius-paul-bacate-03805813a/",
    facebook: "https://www.facebook.com/iezbay",
};

export const metadata: Metadata = {
    metadataBase: new URL("https://yourdomain.com"),

    title: {
        default: `${Bio.name} | Full Stack Developer`,
        template: `%s | ${Bio.name}`,
    },

    description: Bio.description,

    keywords: [
        Bio.name,
        "Full Stack Developer",
        "Next.js Developer",
        "React Developer",
        "Web Developer Philippines",
    ],

    authors: [{ name: Bio.name }],
    creator: Bio.name,

    openGraph: {
        title: `${Bio.name} | Portfolio`,
        description: Bio.description,
        url: "https://yourdomain.com",
        siteName: `${Bio.name} Portfolio`,
        images: [
            {
                url: Bio.picture,
                width: 1200,
                height: 630,
                alt: Bio.name,
            },
        ],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: `${Bio.name} | Developer`,
        description: Bio.description,
        images: [Bio.picture],
    },
};

export const skills = [
    {
        title: "Frontend",
        skills: [
            {
                name: "React Js",
                image: "/icons/react-svgrepo-com.svg",
            },
            {
                name: "Next Js",
                image: "/icons/nextjs-svgrepo-com.svg",
            },
            {
                name: "Vite",
                image: "/icons/vite-svgrepo-com.svg",
            },
            {
                name: "Redux Toolkit",
                image: "/icons/redux-svgrepo-com.svg",
            },
            {
                name: "HTML 5",
                image: "/icons/html-5-svgrepo-com.svg",
            },
            {
                name: "CSS 3",
                image: "/icons/css-3-svgrepo-com.svg",
            },
            {
                name: "JavaScript",
                image: "/icons/javascript-svgrepo-com.svg",
            },
            {
                name: "TypeScript",
                image: "/icons/typescript-svgrepo-com.svg",
            },
            {
                name: "Styled Components",
                image: "/icons/styled-components-svgrepo-com.svg",
            },
            {
                name: "JQuery",
                image: "/icons/jquery-svgrepo-com.svg",
            },
            {
                name: "Bootstrap",
                image: "/icons/bootstrap-svgrepo-com.svg",
            },
            {
                name: "Material UI",
                image: "/icons/material-ui-svgrepo-com.svg",
            },
            {
                name: "Tailwind",
                image: "/icons/tailwind-svgrepo-com.svg",
            },
        ],
    },
    {
        title: "Backend",
        skills: [
            {
                name: "PHP",
                image: "/icons/php-svgrepo-com.svg",
            },
            {
                name: "Codeigniter",
                image: "/icons/codeigniter-svgrepo-com.svg",
            },
            {
                name: "Laravel",
                image: "/icons/laravel-logo-svgrepo-com.svg",
            },
            {
                name: "MySQL",
                image: "/icons/mysql-logo-svgrepo-com.svg",
            },
            {
                name: "Firebase",
                image: "/icons/firebase-svgrepo-com.svg",
            },
            {
                name: "NodeJS",
                image: "/icons/nodejs-svgrepo-com.svg",
            },
            {
                name: "Redis",
                image: "/icons/redis-svgrepo-com.svg",
            },
            {
                name: "Socket IO",
                image: "/icons/socket-io-svgrepo-com.svg",
            },
            {
                name: "JsonServer",
                image: "/icons/json2-svgrepo-com.svg",
            },
        ],
    },
    {
        title: "Mobile (IOS)",
        skills: [
            {
                name: "Swift",
                image: "/icons/swift-svgrepo-com.svg",
            },
            {
                name: "Objective C",
                image: "/icons/apple_objectivec-icon.svg",
            },
        ],
    },
    {
        title: "Others",
        skills: [
            {
                name: "Git",
                image: "/icons/git-svgrepo-com.svg",
            },
            {
                name: "Git Kraken",
                image: "/icons/gitkraken-svgrepo-com.svg",
            },
            {
                name: "Bitbucket",
                image: "/icons/bitbucket-svgrepo-com.svg",
            },
            {
                name: "GitHub",
                image: "/icons/github-octocat-svgrepo-com.svg",
            },
            {
                name: "Azure Devops",
                image: "/icons/azure-devops-svgrepo-com.svg",
            },
            {
                name: "VS Code",
                image: "/icons/vscode3-svgrepo-com.svg",
            },
            {
                name: "Postman",
                image: "/icons/postman-icon-svgrepo-com.svg",
            },
            {
                name: "Data Studio",
                image: "/icons/google-data-studio.svg",
            },
            {
                name: "Trello",
                image: "/icons/trello-color-svgrepo-com.svg",
            },
            {
                name: "Slack",
                image: "/icons/slack-svgrepo-com.svg",
            },
            {
                name: "PHP Storm",
                image: "/icons/jb-phpstorm-svgrepo-com.svg",
            },
            {
                name: "JIRA",
                image: "/icons/jira-svgrepo-com.svg",
            },
            {
                name: "Insomnia",
                image: "/icons/insomnia-svgrepo-com.svg",
            },
        ],
    },
];

export const experiences = [
    {
        id: 0,
        img: "/work/vss.webp",
        role: "Full-Stack Developer",
        company: "Virtual Staffing Solutions",
        date: "July 2024 - October 2025",
        desc: "Working on the frontend and backend of the web applications for the company.",
        skills: [
            "React JS",
            "GitLab",
            "GitHub",
            "AWS",
            "PHP - Laravel",
            "JavaScript",
            "TypeScript",
            "Redux Toolkit",
            "MySQL",
            "Node Js",
            "PostMan",
            "Tailwind",
            "Daisy UI",
            "Jira",
            "Redis",
            "Styled Components",
            "Framer Motion",
            "Socket IO",
        ],
    },
    {
        id: 0,
        img: "/work/acn.webp",
        role: "Senior Software Engineer",
        company: "Accenture Inc.",
        date: "Nov 2022 - June 2024",
        desc: "Working on the frontend of the web application using ReactJS, Redux, and Tailwind.",
        skills: [
            "React JS",
            "Azure",
            "AWS",
            "PHP",
            "JavaScript",
            "Redux Toolkit",
            "MySQL",
            "Node Js",
            "PostMan",
            "Insomnia",
            "Azure DevOps",
            "Tailwind",
            "WordPress",
        ],
    },
    {
        id: 0,
        img: "/work/globe.png",
        role: "Full-Stack Developer",
        company: "Globe Telecom Inc.",
        date: "September 2019 - November 2022",
        desc: "Working on automation tool, managing databases, provide chart reports, and storing of files freely with secured interface.",
        skills: [
            "PHP",
            "Codeigniter",
            "Nginx",
            "NodeJS",
            "Bootstrap",
            "HTML",
            "CSS",
            "JavaScript",
            "MySQL",
            "BitBucket",
            "PostMan",
            "Data Studio",
        ],
        doc: "/work/globe-awards.webp",
    },
    {
        id: 1,
        img: "/work/oa.png",
        role: "Mobile Developer (IOS)",
        company: "OVP Technologies Inc.",
        date: "March 2019 - June 2019",
        desc: "Develop a student monitoring system that display charts with notification.",
        skills: ["Swift", "Objective C", "PostMan", "Github"],
        doc: "/work/paydro.webp",
    },
    {
        id: 2,
        img: "/work/oa.png",
        role: "Web Developer ",
        company: "Orange Apps Inc.",
        date: "November 2016 - March 2019",
        desc: "Develop a student learning management system (LMS) by contributing and managing system that enables students to create a social interaction within school app.",
        skills: [
            "PHP",
            "Codeigniter",
            "Bootstrap",
            "NodeJS",
            "HTML",
            "CSS",
            "JavaScript",
            "Firebase",
            "MySQL",
            "GitHub",
            "PostMan",
        ],
        doc: "/work/orange-apps.webp",
    },
];

export const projects = [
    {
        id: 11,
        title: "WorkSpace",
        date: "July 2024 - Present",
        description:
            "A tool that allows users to manage their tasks, schedules, and events. It provides a user-friendly interface for creating, updating, and deleting tasks, as well as viewing them in a calendar format. The application also supports real-time updates and notifications.",
        image: "/projects/workspace.png",
        tags: [
            "Laravel",
            "ReactJs - Vite",
            "JavasScript ES6",
            "Node Js - Express",
            "TypeScript",
            "Tailwind CSS - Daisy UI",
            "FullCalendar JS",
            "MySQL",
            "GitHub",
            "Socket IO",
            "Redis",
            "Framer Motion",
            "Redux Toolkit",
            "HeroIcons",
        ],
        category: "web app",
        github: "",
        webapp: "https://staging-workspace.vssolutionsph.com/",
        featured: true,
        status: "Live"
    },
    {
        id: 9,
        title: "Fortress",
        date: "Sep 2019 - 2022",
        description:
            "A website that consolidates all databases for every department, allowing access through accounts. It provides a user-friendly interface that displays chart reports, automates data computations, and facilitates file dumping and storage.",
        image: "/projects/fortress.webp",
        tags: [
            "PHP",
            "Codeigniter",
            "Nginx",
            "JavasScript",
            "JQuery",
            "Chart JS",
            "FullCalendar JS",
            "MySQL",
            "Node Js",
            "Bit Bucket",
            "GitKraken",
            "Google Email Login",
        ],
        category: "web app",
        github: "",
        webapp:
            "https://docs.google.com/presentation/d/1jWMntWIKQ_N0aCt7C-9z31_4szewIBVF/edit?usp=sharing&ouid=109611579478848088730&rtpof=true&sd=true",
        featured: true,
        status: "Captured Highlights",
    },
    {
        id: 10,
        title: "Bagyong Odette Monitoring Dashboard",
        date: "Jan 2021 - Mar 2021",
        description:
            "A dashboard that tracks the number of affected cell sites in Cebu. The purpose of this task is to identify damages and potential restorations after onsite assessments.",
        image: "/projects/datastudio.webp",
        tags: ["Data Studio", "Spreadsheet", "MySQL", "Google Email Login"],
        category: "web app",
        github: "",
        webapp: "",
    },
    {
        id: 0,
        title: "Tenzies",
        date: "Jan 2023 - Feb 2023",
        description: "A simple game created from React.",
        image: "/projects/tenzies.webp",
        tags: ["React Js", "CSS", "ES6"],
        category: "web app",
        github: "https://github.com/dadots/react-tenzies-game",
        webapp:
            "https://64f1a990e5326045a42093b6--bejewelled-kleicha-4f81d2.netlify.app/",
    },
    {
        id: 3,
        title: "Brainwave Quiz Master",
        date: "June 2015 - Feb 2016",
        description:
            "My Thesis Project wherein it is browser based game that enables player competes each other with categories for easy, medium and hard. It is the most interesting game based on realtime functions where the players prompts the buzzer enables to answer the question with ranking up basis based on the questions answered.",
        image: "/projects/brainwave-quiz-master.webp",
        tags: ["PHP", "MVC", "OOP", "CSS", "MYSQL", "Materialized CSS"],
        category: "web app",
        github: "https://github.com/dadots/brainwave",
        webapp: "",
    },
    // {
    //   id: 1,
    //   title: "React CRUD",
    //   date: "Feb 2023 - Mar 2023",
    //   description:
    //     "An simple create update and delete wherein it is save through JSON-server as backend.",
    //   image: crud,
    //   tags: [
    //     "React Js",
    //     "Vite",
    //     "Json Server",
    //     "Node Js",
    //     "Redux Toolkit",
    //     "Tailwind",
    //     "HeroIcons",
    //     "Axios",
    //     "React Toastify",
    //     "React Router",
    //   ],
    //   category: "web app",
    //   github: "https://github.com/dadots/vite-redux-json",
    //   webapp: "https://dadots.github.io/vite-redux-json/",
    // },
    // {
    //   id: 2,
    //   title: "Message Web App",
    //   date: "April 2023 - May 2023",
    //   description:
    //     "A simple messaging app that it is realtime through Firebase with realtime chats between user accounts.",
    //   image: msg,
    //   tags: ["React", "Vite", "MUI", "Firebase"],
    //   category: "web app",
    //   github: "https://github.com/dadots/react-firebase-chat",
    //   webapp: "https://main--ornate-kleicha-79f9ba.netlify.app/",
    // },
    // {
    //   id: 3,
    //   title: "DarBot",
    //   date: "Jan 2024",
    //   description:
    //     "A simple Chatbot created in vite - react support by the library of React-Chatbot-Kit.",
    //   image: darbot,
    //   tags: ["React", "Vite", "CSS", "ES6", "React Chabot-Kit"],
    //   category: "web app",
    //   github: "https://github.com/dadots/darbot",
    //   webapp: "https://precious-cassata-8d3fdb.netlify.app/",
    // },
    {
        id: 4,
        title: "Bacate ~ Mendros Wedding Website",
        date: "April 2025",
        description:
            "My Wedding Website that contains the information about the wedding event. It also includes a Google Form for RSVPs and a Google Map for the location.",
        image: "/projects/wedding-website.webp",
        tags: [
            "React",
            "Vite",
            "CSS",
            "ES6",
            "Google Map",
            "Google Form",
            "Google API",
            "TypeScript",
            "React Router",
            "HeroIcons",
            "React Toastify",
            "React Scroll",
            "Framer Motion",
        ],
        category: "web app",
        github: "https://github.com/dadots/wedding",
        webapp: "https://dadots.github.io/wedding/",
        featured: true,
        status: "Personal Project",
    },
    // {
    //     id: 3,
    //     title: "ECart",
    //     date: "Dec 2021 - Apr 2022",
    //     description:
    //         "A simple ecommerce app that displays the products with actions of adding and removing by items.",
    //     image: ecart,
    //     tags: ["React", "Vite", "CSS", "ES6"],
    //     category: "web app",
    //     github: "https://github.com/dadots/react-ecart",
    //     webapp: "https://main--unique-biscochitos-97cf49.netlify.app/"
    // },
];
