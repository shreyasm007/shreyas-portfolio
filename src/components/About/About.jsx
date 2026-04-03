// src/components/About/About.jsx
import { motion } from 'framer-motion';
import { aboutMe } from '../../constants/data';

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
          {/* Education Section */}
          <motion.div {...fadeIn} className="space-y-6">
            <h3 className="text-2xl font-bold dark:text-purple-400 text-purple-600">
              Education
            </h3>
            <div className="space-y-4">
              {aboutMe.education.map((edu, index) => (
                <div key={index} className="dark:bg-tertiary bg-gray-100 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold dark:text-white text-gray-800">
                    {edu.institution}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">{edu.degree}</p>
                  <p className="text-gray-500">{edu.duration}</p>
                  <p className="text-purple-600 dark:text-purple-400">{edu.grade}</p>
                  {edu.link && (
                    <a 
                      href={edu.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-500 underline"
                    >
                      {edu.linkText}
                    </a>
                  )}
                </div>
              ))}
            </div>
            {/* Personal Story & Extracurricular */}
            <div className="dark:bg-tertiary bg-gray-100 p-6 rounded-lg">
              <p className="text-gray-700 dark:text-gray-300">
                {aboutMe.story}
              </p>
            </div>
          </motion.div>

          {/* Professional Overview Section */}
          <motion.div {...fadeIn} className="space-y-6">
            <h3 className="text-2xl font-bold dark:text-purple-400 text-purple-600">
              {aboutMe.professionalOverview.title}
            </h3>
            <div className="dark:bg-tertiary bg-gray-100 p-6 rounded-lg space-y-4">
              <p className="dark:text-gray-300 text-gray-700">
                {aboutMe.professionalOverview.description}
              </p>
              <ul className="list-disc list-inside space-y-2 dark:text-gray-300 text-gray-700">
                {aboutMe.professionalOverview.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              <div className="pt-4">
                <h4 className="font-semibold dark:text-white text-gray-800 mb-2">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {aboutMe.professionalOverview.languages.map((lang) => (
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
