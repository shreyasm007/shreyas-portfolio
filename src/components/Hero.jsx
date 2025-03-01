//Hero.jsx
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex items-center" id="hero">
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center bg-no-repeat opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center text-center"
        >
          <h1 className="text-white font-black text-6xl sm:text-8xl">
            Hi, I'm <span className="text-purple-500">Shreyas</span>
          </h1>
          
          <div className="mt-4 text-2xl sm:text-3xl text-gray-300">
            <TypeAnimation
              sequence={[
                'Generative AI Engineer',
                2000,
                'Full Stack Developer',
                2000,
                'Software Engineer',
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
            className="mt-6 text-gray-400 text-lg max-w-2xl"
          >
            Passionate about creating innovative solutions using Generative AI, 
            Full Stack Development, and emerging technologies. Currently working 
            at NCS Group as an Associate Engineer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-8 flex gap-4"
          >
            <a
              href="https://www.linkedin.com/in/shreyas-mohite-750a64227/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              LinkedIn
            </a>
            <a
              href="https://leetcode.com/shreyasm_007"
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