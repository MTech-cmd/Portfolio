import { EXPERIENCES, LOGOS } from "../data"
import Card from "./Card"

const Experience = () => {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Experience</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div className="pb-4" key={index}>
            <Card>
              <div className="mb-8 flex flex-wrap lg:justify-center">
                <div className="w-full lg:w-1/4">
                  <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                  <img src={LOGOS[experience.company]} alt={experience.company} className="h-28 rounded-2xl" />
                </div>
                <div className="w-full max-w-xl lg:w-3/4">
                  <h6 className="mb-2 font-semibold">
                    {experience.role} - <span className="text-purple-300 text-sm">{experience.company}</span>
                  </h6>
                  <p className="mb-4 text-neutral-400">{experience.description}</p>
                  <div className="flex justify-start">
                    {experience.technologies.map((tech, index) => (
                      <img key={index} src={LOGOS[tech]} alt={tech} className="h-8 mr-2" />
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience