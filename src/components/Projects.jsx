// src/components/Projects.jsx
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "IntelliContextAI",
      duration: "Feb 2025 - Present",
      association: "Personal Project",
      description: "A generative AI-powered application featuring document upload, text extraction, and a context-aware chat interface with Retrieval-Augmented Generation (RAG).",
      impact: "Demonstrates advanced integration of AI and web technologies, providing innovative user experiences allowing users to interact with their own data.",
      skills: ["Python", "Streamlit", "MinHashEncoder", "Groq API"],
      link: "https://shreyasintellicontextai.streamlit.app/"
    },
    {
      title: "Attendance Management System with Dynamic QR",
      duration: "Jul 2023 - Jun 2024",
      association: "Walchand College of Engineering",
      description: "Created a mobile app and web application for attendance tracking, minimizing proxy entries and streamlining the process.",
      impact: "Successfully adopted by WCE Sangli, reducing errors in attendance logging.",
      skills: ["HTML", "CSS", "JavaScript", "Java", "Firebase"],
      link: "https://drive.google.com/drive/folders/1R0OPQyES7l2F_7qUGSVF4Uhr6n5VCgbx"
    },
    {
      title: "License Monitoring Tool",
      duration: "Mar 2024 - May 2024",
      association: "Emerson",
      description: "Developed a MERN stack application enabling management to track licenses with real-time data visualization and insights.",
      impact: "Improved data accuracy and decision-making for senior management, reducing manual processes by 30%.",
      skills: ["MongoDB", "Express.js", "React.js", "Node.js"],
      github: "shreyasm007/LicenseMonitoringTool"
    },
    {
      title: "Information Display using Augmented Reality",
      duration: "Jun 2022 - Jan 2023",
      association: "Walchand College of Engineering",
      description: "Developed an AR application for visualizing data on labs and rooms, enhancing information accessibility using 3D AR models.",
      impact: "Enhanced user interaction with data within the CSE department.",
      skills: ["Unity", "Google ARCore", "Augmented Reality (AR)"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="min-h-screen py-20 dark:bg-primary/60 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-heading dark:text-white text-gray-800"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="dark:bg-tertiary bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 dark:text-white text-gray-800">
                  {project.title}
                </h3>
                <p className="text-purple-600 dark:text-purple-400 mb-2">
                  {project.duration}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.association}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <p className="text-green-600 dark:text-green-400 mb-4">
                  Impact: {project.impact}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-200 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={`https://github.com/${project.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 dark:text-purple-400 hover:underline"
                    >
                      GitHub Repository →
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 dark:text-purple-400 hover:underline"
                    >
                      View Project →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
