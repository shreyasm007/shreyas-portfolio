//Skills.jsx
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "C++", "Python", "Java", "SQL"],
      icon: "💻"
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "ReactJS", "Angular", "Bootstrap", "MERN Stack", "ExpressJS"],
      icon: "🌐"
    },
    {
      title: "Artificial Intelligence",
      skills: ["Generative AI", "Large Language Models", "Natural Language Processing", "Prompt Engineering"],
      icon: "🤖"
    },
    {
      title: "Tools & Platforms",
      skills: ["GitHub", "Git", "VS Code", "Visual Studio", "MongoDB", "Firebase", "MySQL"],
      icon: "🛠️"
    },
    {
      title: "Other Technologies",
      skills: ["Unity", "Google ARCore", "Blockchain", "Data Structures", "Algorithms"],
      icon: "📱"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="min-h-screen py-20 dark:bg-primary bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-heading dark:text-white text-gray-800"
        >
          Technical Skills
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="dark:bg-tertiary bg-gray-100 rounded-xl p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold dark:text-white text-gray-800">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-10 dark:text-white text-gray-800">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Generative AI for Beginners",
                date: "Nov 2024",
                id: "UC-4b7934c1-df3c-4291-9c80-62da15f6a3af"
              },
              {
                title: "Introduction to Generative AI and Prompt Engineering",
                date: "Oct 2024",
                id: "11372998"
              },
              {
                title: "Blockchain and its Applications",
                date: "Apr 2024",
                institution: "NPTEL"
              },
              {
                title: "NVIDIA DLI Certificate - Fundamentals of Accelerated Computing with CUDA C/C++",
                date: "Oct 2023",
                id: "lvJd0zL0RlSjzSQlEwMfjg"
              }
            ].map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="dark:bg-tertiary bg-gray-100 p-6 rounded-lg"
              >
                <h4 className="font-semibold dark:text-white text-gray-800">{cert.title}</h4>
                <p className="text-purple-600 dark:text-purple-400">{cert.date}</p>
                {cert.id && (
                  <p className="text-sm dark:text-gray-400 text-gray-600">ID: {cert.id}</p>
                )}
                {cert.institution && (
                  <p className="text-sm dark:text-gray-400 text-gray-600">
                    Institution: {cert.institution}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;