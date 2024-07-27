import mehdi from '../assets/mehdi.jpg';

const About = () => {
    return (
        <div className="pb-4">
            <h2 className="my-20 text-center text-4xl">About
                <span className="bg-gradient-to-br from-purple-500 via-slate-300 to-blue-500 text-transparent bg-clip-text"> Me</span>
            </h2>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img src={mehdi} alt="Mehdi" className='rounded-2xl max-w-lg' />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className='my-2 max-w-xl py-6'>Hi! I&apos;m Mehdi El Khallouki, a Full-stack Developer at the Bit Academy in the Netherlands.
                            My journey in technology has been driven by a passion for continuous learning and a dedication to mastering new skills.
                            Currently, I&apos;m delving deep into full-stack web development and data engineering,
                            striving to blend the best of both worlds to create innovative and efficient solutions.
                            At the Bit Academy, I&apos;ve had the opportunity to work with a diverse range of technologies.
                            My expertise spans across databases like MariaDB and MongoDB,
                            and front-end development using React, JavaScript, TypeScript, HTML, CSS, Bootstrap, and Tailwind.
                            On the back-end, I&apos;m proficient in PHP and Laravel.
                            In addition to web development, I have a strong foundation in game development with Unity and Phaser.
                            For DevOps, I leverage tools such as GitHub Actions, GitHub Pages, and Docker to streamline and optimize workflows.
                            My data engineering skills include Python and Power BI, enabling me to manage and analyze data effectively.
                            I enjoy sharing my knowledge and helping others navigate the ever-evolving tech landscape.
                            I&apos;m always on the lookout for new challenges and opportunities to collaborate.
                            If you have any questions or if you&apos;re interested in working together, feel free to reach out!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About