import mehdi from '../assets/mehdi.jpg';

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl">Mehdi El Khallouki</h1>
            <span className="bg-gradient-to-r from-blue-500 via-slate-100 to-blue-400 text-transparent bg-clip-text text-4xl font-thin lg:text-5xl">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
            Hi! I&apos;m Mehdi and I&apos;m a Full-stack Developer at the Bit Academy.
            I&apos;ve always been a passionate learner about different technologies and I love to share my knowledge with others.
            I&apos;m devoted in expanding my expertise in the field of web development and I&apos;m always looking for new challenges.
            If you have any questions or want to work together, feel free to contact me.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center ">
            <img src={mehdi} alt="Mehdi" className='rounded w-96'/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Hero