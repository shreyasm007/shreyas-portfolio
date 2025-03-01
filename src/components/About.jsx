//About.jsx
import { motion } from 'framer-motion';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 1 }
  };

  return (
    <section id="about" className="min-h-screen py-20 dark:bg-primary bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          {...fadeIn}
          className="section-heading dark:text-white text-gray-800"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            {...fadeIn}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold dark:text-purple-400 text-purple-600">
              Education
            </h3>
            <div className="space-y-4">
              <div className="dark:bg-tertiary bg-gray-100 p-6 rounded-lg">
                <h4 className="text-xl font-semibold dark:text-white text-gray-800">
                  Walchand College of Engineering, Sangli
                </h4>
                <p className="text-gray-600 dark:text-gray-300">B.Tech in Computer Science and Engineering</p>
                <p className="text-gray-500">Nov 2020 - May 2024</p>
                <p className="text-purple-600 dark:text-purple-400">CGPA: 8.34</p>
              </div>
              
              <div className="dark:bg-tertiary bg-gray-100 p-6 rounded-lg">
                <h4 className="text-xl font-semibold dark:text-white text-gray-800">
                  Ligade Patil Junior College of Science, Karad
                </h4>
                <p className="text-gray-600 dark:text-gray-300">Higher Secondary Certificate (HSC) in Science</p>
                <p className="text-gray-500">May 2018 - Jun 2020</p>
                <p className="text-purple-600 dark:text-purple-400">Grade: 95.23%</p>
              </div>
              <div className="dark:bg-tertiary bg-gray-100 p-6 rounded-lg">
                <h4 className="text-xl font-semibold dark:text-white text-gray-800">
                  Mahatma Gandhi Vidyalaya, Kadegaon
                </h4>
                <p className="text-gray-600 dark:text-gray-300">Secondary School Certificate</p>
                <p className="text-gray-500">June 2013 - May 2018</p>
                <p className="text-purple-600 dark:text-purple-400">Grade: 96.60%</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            {...fadeIn}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold dark:text-purple-400 text-purple-600">
              Professional Overview
            </h3>
            <div className="dark:bg-tertiary bg-gray-100 p-6 rounded-lg space-y-4">
              <p className="dark:text-gray-300 text-gray-700">
                I am a Generative AI Engineer and Full Stack Developer with expertise in:
              </p>
              <ul className="list-disc list-inside space-y-2 dark:text-gray-300 text-gray-700">
                <li>Developing AI-driven solutions and Large Language Models (LLMs)</li>
                <li>Building full-stack applications using MERN stack</li>
                <li>Creating innovative solutions using emerging technologies</li>
                <li>Problem-solving through creative approaches</li>
              </ul>
              <div className="pt-4">
                <h4 className="font-semibold dark:text-white text-gray-800 mb-2">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {['English', 'Hindi', 'Marathi', 'Sanskrit'].map((lang) => (
                    <span 
                      key={lang}
                      className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;