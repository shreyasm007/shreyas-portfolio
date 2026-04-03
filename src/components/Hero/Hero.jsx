// src/components/Hero/Hero.jsx
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { personalInfo } from '../../constants/data';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex items-center" id="hero">
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center bg-no-repeat opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center text-center px-4"
        >
          <h1 className="text-white font-black text-4xl sm:text-6xl lg:text-8xl leading-tight">
            Hi, I'm <span className="text-purple-500">{personalInfo.title}</span>
          </h1>
          
          <div className="mt-4 text-xl sm:text-2xl lg:text-3xl text-gray-300 min-h-[1.5em]">
            <TypeAnimation
              sequence={[
                personalInfo.roles[0],
                2000,
                personalInfo.roles[1],
                2000,
                personalInfo.roles[2],
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-6 text-gray-400 text-base sm:text-lg max-w-2xl"
          >
            {personalInfo.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 w-full max-w-full px-2"
          >
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              LinkedIn
            </a>
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Resume
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              GitHub
            </a>
            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              LeetCode
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 w-full flex justify-center">
        <motion.div
          animate={{ y: [0, 24, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          <a href="#about" className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
