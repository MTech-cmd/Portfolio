import { HERO_TEXT, PFP } from '../data';

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl">Mehdi El Khallouki</h1>
            <span className="bg-gradient-to-br from-purple-500 via-slate-300 to-blue-500 text-transparent bg-clip-text text-4xl font-thin lg:text-5xl">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_TEXT}</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center ">
            <img src={PFP} alt="Mehdi" className='rounded w-96'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero