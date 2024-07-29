import Slider from 'react-slick';
import { PROJECTS, LOGOS } from '../data'; // Ensure this path is correct based on your project structure
import Card from './Card';

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 slides on desktop
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 slides on tablets and small desktops
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      {/* Carousel for all screen sizes */}
      <div className="p-4">
        <Slider {...settings}>
          {PROJECTS.map((project, index) => (
            <div className="p-4" key={index}>
              <Card>
                <div className="card-content">
                  <a href={project.link}><img className="w-full" src={project.image} alt={project.title} /></a>
                  <div className="px-6 py-4">
                    <div className="flex items-center mb-2">
                      <img src={project.logo} alt={`${project.title} logo`} className="h-20 mr-4" />
                      <div>
                        <div className="font-bold text-2xl">{project.title}</div>
                        <span className="text-sm text-neutral-400">{project.year}</span>
                      </div>
                    </div>
                    <p className='text-sm'>{project.description}</p>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="flex flex-wrap mb-2">
                    {project.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="flex items-center mr-2 mb-2">
                        <img src={LOGOS[tech]} alt={tech} className="h-10 mr-2" />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-purple-600 hover:bg-purple-700 transition-colors px-5 py-2.5 rounded-xl text-white">
                      View Live
                    </a>
                    <a href={project.source} target="_blank" rel="noopener noreferrer" className="text-white bg-blue-600 hover:bg-blue-700 transition-colors px-5 py-2.5 rounded-xl">
                      View Source
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
