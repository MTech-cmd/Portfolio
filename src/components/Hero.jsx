import { HERO_TEXT } from '../data';
import { motion } from 'framer-motion';

const container = (delay, direction) => {
  let init;
  if (direction == 'left') {
    init = -100;
  } else {
    init = 100;
  }
  return {
    hidden: { x: init, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5
      }
    }
  };
};

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0, 'left')}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl">
              Mehdi El Khallouki
            </motion.h1>
            <motion.span
              variants={container(0.5, 'left')}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-br from-purple-500 via-slate-300 to-blue-500 text-transparent bg-clip-text text-4xl font-thin lg:text-5xl">
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1, 'left')}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_TEXT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center ">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero