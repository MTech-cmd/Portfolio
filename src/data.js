import logo from './assets/favicon.png';
import pfp from './assets/mehdi.jpg';
import studentaanhuis from './assets/studentaanhuis.jpg';
import squishfactory from './assets/squishfactory.png';
import mymellow from './assets/mymellow.svg';
import herodb from './assets/herodb.png';
import herodb_logo from './assets/herodb-logo.png';
import twitchwind from './assets/twitchwind.png';
import twitchwind_logo from './assets/twitchwind_logo.png';
import bit_academy from './assets/bit-academy.jpg';
import horizon_college from './assets/horizon-college.jpg';
import hackerrank from './assets/hackerrank.png';
import cert_full_stack from './assets/cert-fullstack.pdf';
import cert_bootstrap from './assets/cert-bootstrap.pdf';
import cert_command_line from './assets/cert-cli.pdf';
import cert_db_analysts from './assets/cert-db-for-analists.pdf';
import cert_git from './assets/cert-git.pdf';
import cert_pdo from './assets/cert-pdo.pdf';
import cert_python_for_analysts from './assets/cert-python-for-analists.pdf';
import cert_scrum from './assets/cert-scrum.pdf';
import cert_python_basic from './assets/cert-python-basic.pdf';
import windows11 from './assets/windows11.png';
import macos from './assets/macos.png';
import linux from './assets/linux.png';
import unix from './assets/unix.png';
import office from './assets/office.png';
import apache from './assets/apache.png';
import mariadb from './assets/mariadb.png';
import php from './assets/php.png';
import html5 from './assets/html5.png';
import sass from './assets/sass.png';
import bootstrap from './assets/bootstrap.png';
import javascript from './assets/javascript.png';
import docker from './assets/docker.png';
import css3 from './assets/css3.webp';
import tailwindcss from './assets/tailwindcss.svg';
import github_actions from './assets/github-actions.png';
import github from './assets/github.png';
import python from './assets/python.png';
import power_bi from './assets/power-bi.png';
import sql from './assets/sql.png';
import unity from './assets/unity.png';
import c from './assets/c.png';
import react from './assets/react.svg';
import vue from './assets/vue.svg';
import typescript from './assets/typescript.png';
import laravel from './assets/laravel.png';

// Navbar
export const LOGO = logo;

export const SOCIALS = {
    "LinkedIn": "https://www.linkedin.com/in/mehdi-el-khallouki/",
    "GitHub": "https://github.com/MTech-cmd",
    "Email": "mailto:mehdiek@outlook.com",
    "Portfolio": "https://mtech-cmd.github.io/",
    "Resume": "https://mtech-cmd.github.io/resume.pdf",
}

// Hero
export const HERO_TEXT = `Hi! I'm Mehdi and I'm a Full-stack Developer at the Bit Academy.
                        I've always been a passionate learner about different technologies and I love to share my knowledge with others.
                        I'm devoted in expanding my expertise in the field of web development and I'm always looking for new challenges.
                        If you have any questions or want to work together, feel free to contact me.`;

// About
export const PFP = pfp;

export const ABOUT_TEXT = `Hi! I'm Mehdi El Khallouki, a Full-stack Developer at the Bit Academy in the Netherlands.
                        My journey in technology has been driven by a passion for continuous learning and a dedication to mastering new skills.
                        Currently, I'm delving deep into full-stack web development and data engineering,
                        striving to blend the best of both worlds to create innovative and efficient solutions.
                        At the Bit Academy, I've had the opportunity to work with a diverse range of technologies.
                        My expertise spans across databases like MariaDB and MongoDB,
                        and front-end development using React, JavaScript, TypeScript, HTML, CSS, Bootstrap, and Tailwind.
                        On the back-end, I'm proficient in PHP and Laravel.
                        In addition to web development, I have a strong foundation in game development with Unity and Phaser.
                        For DevOps, I leverage tools such as GitHub Actions, GitHub Pages, and Docker to streamline and optimize workflows.
                        My data engineering skills include Python and Power BI, enabling me to manage and analyze data effectively.
                        I enjoy sharing my knowledge and helping others navigate the ever-evolving tech landscape.
                        I'm always on the lookout for new challenges and opportunities to collaborate.
                        If you have any questions or if you're interested in working together, feel free to reach out!`

// Experience

export const EXPERIENCES = [
    {
        year: "2024 - Present",
        role: "Computer Specialist",
        company: "Studentaanhuis",
        description: `Provided technical support and troubleshooting services to clients with a focus on software issues.
                    Installed and configured operating systems, software applications, and peripherals.
                    Educated clients on best practices for data security and privacy.`,
        technologies: ["Windows", "MacOS", "Linux", "Microsoft Office", "UNIX"],
    },
];

export const PROJECTS = [
    {
        title: "SquishFactory",
        image: squishfactory,
        logo: mymellow,
        description: `SquishFactory is a web application that allows users to create, customize, and order custom squishmallows.
                    Users can choose from a variety of designs, colors, and sizes to create their own unique squishmallow.
                    The application features a user-friendly interface that guides users through the customization process.
                    Users can view a preview of their squishmallow before placing an order.`,
        technologies: ["Linux", "Apache", "MariaDB", "PHP", "HTML", "SASS", "Bootstrap", "JavaScript", "Docker"],
        year: "2024",
        link: "https://mymellow.mooo.com",
        source: "https://github.com/MTech-cmd/SquishFactory",
    },
    {
        title: "HeroDB",
        image: herodb,
        logo: herodb_logo,
        description: `HeroDB is a web application that was built during a Deep Dive at my study at the Bit Academy.
                    The application allows users to create, customize, and share their own superhero characters.
                    Users can choose from a variety of powers, abilities, and costumes to create their unique superhero.
                    The application features a user-friendly interface that guides users through the character creation process.
                    Users can also battle their superheroes against other characters created by the community.`,
        technologies: ["Linux", "Apache", "MariaDB", "PHP", "HTML", "CSS", "JavaScript"],
        year: "2024",
        link: "https://herodb.mooo.com",
        source: "https://github.com/MTech-cmd/Kansloos",
    },
    {
        title: "Twitchwind",
        image: twitchwind,
        logo: twitchwind_logo,
        description: `Twitchwind is the front page of Twitch rebuilt using Tailwind CSS. I made this for a school project.
                    For deployment, I used GitHub Actions and GitHub Pages.`,
        technologies: ["HTML", "TailwindCSS", "GitHub Actions", "GitHub Pages"],
        year: "2024",
        link: "https://mtech-cmd.github.io/Twitchwind/",
        source: "https://github.com/MTech-cmd/Twitchwind",
    },
]

export const EDUCATION = [
    {
        year: "2024 - 2026",
        role: "Data Analyst",
        institute: "Bit Academy",
        description: `Studying data analysis and engineering, focusing on data visualization, data management, and data analysis.
                    Learning to work with tools such as Python, Power BI, and SQL to manage and analyze data effectively.
                    I also had the opportunity to work on projects involving game development with Unity and C.`,
        technologies: ["Python", "Power BI", "SQL", "Unity", "C"],
    },
    {
        year: "2024 - 2026",
        role: "Full-stack Developer",
        institute: "Horizon College",
        description: `Studying full-stack web development, focusing on front-end and back-end technologies.
                    Learning to work with tools such as React, JavaScript, TypeScript, HTML, CSS, Bootstrap, Tailwind, PHP, and Laravel.`,
        technologies: ["React", "Linux", "Vue", "JavaScript", "TypeScript", "HTML", "CSS", "Bootstrap", "TailwindCSS", "PHP", "Laravel"],
    },
]

export const CERTIFICATES = [
    {
        title: "Full-stack Web Developer",
        issuer: "Bit Academy",
        description: `Certificate of completion for the Full-stack Developer course at the Bit Academy.
                    The course covered front-end and back-end web development, databases, and data engineering.`,
        pdf: cert_full_stack,
        link: "https://www.nexed.com/verify?certId=019073bd-11c0-783c-ade7-b329f9a9637c",
    },
    {
        title: "Bootstrap",
        issuer: "Bit Academy",
        description: `Certificate of completion for the Bootstrap course at the Bit Academy.`,
        pdf: cert_bootstrap,
        link: "https://www.nexed.com/verify?certId=018df4e7-510a-78ce-a709-123b50828a54",
    },
    {
        title: "Command Line",
        issuer: "Bit Academy",
        description: `Certificate of completion for the Command Line course at the Bit Academy.
                    The course covered basic and advanced command line operations.
                    Learned to navigate the file system, manage files and directories, and automate tasks using shell scripts.`,
        pdf: cert_command_line,
        link: "https://www.nexed.com/verify?certId=d46829fa-6039-477b-92a1-318ad0542136",
    },
    {
        title: "Databases for Analysts",
        issuer: "Bit Academy",
        description: `Certificate of completion for the Databases for Analysts course at the Bit Academy.
                    The course covered database management, data modeling, and SQL queries.`,
        pdf: cert_db_analysts,
        link: "https://www.nexed.com/verify?certId=018b19a9-7705-7bc0-bf0f-7e56f2f835af",
    },
    {
        title: "Git",
        issuer: "Bit Academy",
        description: `This course covered the basics of Git version control system.
                    Learned to create and manage repositories, track changes, and collaborate with others using Git and GitHub.`,
        pdf: cert_git,
        link: "https://www.nexed.com/verify?certId=018b0510-ab62-71fd-92a9-f1651d8c1233",
    },
    {
        title: "PHP PDO",
        issuer: "Bit Academy",
        description: `This course covered the basics of PHP Data Objects (PDO).
                    Learned to connect to databases, execute queries, and handle errors using PDO in PHP.`,
        pdf: cert_pdo,
        link: "https://www.nexed.com/verify?certId=018cb02b-1304-7621-9b87-ce3f566cd98d",
    },
    {
        title: "Python for Analysts",
        issuer: "Bit Academy",
        description: `This course covered more advanced features of Python programming language.
                    Learned to work with data structures, and data manipulation using Pandas and Seaborn.`,
        pdf: cert_python_for_analysts,
        link: "https://www.nexed.com/verify?certId=018afa6b-d687-7808-b4d2-8f913b74232e",
    },
    {
        title: "Scrum",
        issuer: "Bit Academy",
        description: `This course covered the basics of Scrum project management framework.
                    Learned to work in sprints, manage backlogs, and collaborate with teams using Scrum methodology`,
        pdf: cert_scrum,
        link: "https://www.nexed.com/verify?certId=018ceb9a-6324-7823-a82f-b63ae9fd8508",
    },
    {
        title: "Python Basic",
        issuer: "HackerRank",
        description: `This course covered the basics of Python programming language.
                    Learned to write scripts, and automate tasks using Python.`,
        pdf: cert_python_basic,
        link: "https://www.hackerrank.com/certificates/82eea28e6256",
    },
]

export const LOGOS = {
    "Studentaanhuis": studentaanhuis,
    "Bit Academy": bit_academy,
    "Horizon College": horizon_college,
    "HackerRank": hackerrank,
    "Windows": windows11,
    "MacOS": macos,
    "Linux": linux,
    "UNIX": unix,
    "Microsoft Office": office,
    "Apache": apache,
    "MariaDB": mariadb,
    "PHP": php,
    "HTML": html5,
    "SASS": sass,
    "Bootstrap": bootstrap,
    "JavaScript": javascript,
    "Docker": docker,
    "CSS": css3,
    "TailwindCSS": tailwindcss,
    "GitHub Actions": github_actions,
    "GitHub Pages": github,
    "Python": python,
    "Power BI": power_bi,
    "SQL": sql,
    "Unity": unity,
    "C": c,
    "React": react,
    "Vue": vue,
    "TypeScript": typescript,
    "Laravel": laravel,
}