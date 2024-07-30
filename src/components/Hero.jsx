import { HERO_TEXT } from '../data';
import { motion } from 'framer-motion';
import IconCloud  from '../../@/components/magicui/icon-cloud';

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

const slugs = [
  'html5',
  'css3',
  'sass',
  'bootstrap',
  'tailwindcss',
  'javascript',
  'typescript',
  'react',
  'vuedotjs',
  'nodedotjs',
  'express',
  'mongodb',
  'git',
  'github',
  'gitlab',
  'githubactions',
  'docker',
  'php',
  'postcss',
  'phpmyadmin',
  'linux',
  'archlinux',
  'mariadb',
  'mysql',
  'laravel',
  'composer',
  'npm',
  'python',
  'pandas',
  'sqlite',
  'powerbi',
  'figma',
  'framer',
  'githubpages',
  'macos',
  'unity',
  'csharp',
  'c',
  'neovim',
  'vim',
  'vscode',
  'jetbrains',
  'android',
];

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
          <motion.div className="flex justify-center" variants={container(0.5, 'right')} initial="hidden" animate="visible">
            <IconCloud iconSlugs={slugs}  />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero