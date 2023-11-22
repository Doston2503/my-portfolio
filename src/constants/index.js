import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    figma,
    next,
    pdp,
    asaka,
    izohli,
    bsigned,
    pdpWeb,
    threejs, isystem,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "JavaScript, TypeScript",
        icon: web,
    },
    {
        title: `React, Redux`,
        icon: mobile,
    },
    {
        title: "Next js",
        icon: backend,
    },
    {
        title: "Three js",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },

    {
        name: "Next js",
        icon: next,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },

];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "PDP",
        icon: pdp,
        iconBg: "#012A2F",
        date: "Jan 2019 - Aug 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Asaka bank",
        icon: asaka,
        iconBg: "#E21D32",
        date: "Sen 2022 - Apr 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer and Frontend Mentor",
        company_name: "Isystem",
        icon: isystem,
        iconBg: "#101115",
        date: "Feb 2022 - Present*",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    }
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Izohli",
        description:
            "A convenient project for finding easy information about the explanation of " +
            "words in the Uzbek language, their types according to their forms and meanings",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "next",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: izohli,
        source_code_link: "https://izohli.uz/",
    },
    {
        name: "Bsigned",
        description:
            "Through the Bsigned project, you will receive information about the company that produces " +
            "high-quality and acceptable IT services and the company's service lines.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "next",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: bsigned,
        source_code_link: "https://bsigned.us/home",
    },
    {
        name: "PDP",
        description:
            "PDP online is an excellent platform for online education in all areas of IT." +
            " Through this platform, you will be able to study all courses online.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "redux",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: pdpWeb,
        source_code_link: "https://online.pdp.uz/",
    },
];

export {services, technologies, experiences, testimonials, projects};
