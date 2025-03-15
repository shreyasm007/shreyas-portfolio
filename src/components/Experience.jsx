// src/components/Experience.jsx
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Associate Engineer - Generative AI",
      company: "NCS Group",
      duration: "Aug 2024 - Present",
      points: [
        "Developing an IT Assist chatbot using Microsoft Copilot Studio and Power Automate, integrated with ServiceNow API.",
        "Implementing prompt engineering, retrieval-augmented generation (RAG), and vector databases to enhance response accuracy.",
        "Using Hugging Face models and deploying AI-driven solutions with Ollama.",
        "Optimize NLP workflows (tokenization, embeddings, stemming, and lemmatization).",
        "Focused on Generative AI, data scraping, and leveraging Large Language Models (LLMs)",
        "Actively contributed to chatbot development and automation tools",
        "Gained exposure to end-to-end project cycles"
      ]
    },
    {
      title: "Software Developer Intern",
      company: "Emerson Innovation Center, Pune",
      duration: "Jan 2024 - Aug 2024",
      points: [
        "Engineered a full-stack License Monitoring Tool using the MERN stack for real-time tracking of software licenses.",
        "Enhanced data accuracy, reducing manual oversight by 30%, and gained valuable mentorship from senior developers.",
        "Developed frontend components with Angular and contributed to backend development using C# and XAML.",
        "Attended cybersecurity webinars, enhancing knowledge of secure coding practices",
        "Worked closely with senior developers, gaining valuable mentorship"
      ]
    },
    {
      title: "GIM & SRO Coordinator",
      company: "Students Organization For Technical Activity (SOFTA)",
      duration: "Jul 2021 - Apr 2022",
      points: [
        "Managed events such as GIM 2022 for first-year students, ensuring smooth execution and high participation.",
        "Coordinated publicity and outreach initiatives to promote club services and events.",
        "Led a team to organize both technical and extracurricular activities, fostering a strong community spirit.",
        "Developed leadership, communication, and organizational skills through hands-on event management."
      ]
    }
    
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5
      }
    })
  };

  return (
    <section id="experience" className="min-h-screen py-20 dark:bg-primary/60 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-heading dark:text-white text-gray-800"
        >
          Work Experience
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="relative"
            >
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-8 -bottom-8 w-0.5 bg-purple-600" />
              )}
              <div className="relative flex gap-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-600 shrink-0">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="dark:bg-tertiary bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold dark:text-white text-gray-800">
                      {exp.title}
                    </h3>
                    <p className="text-purple-600 dark:text-purple-400 font-semibold">
                      {exp.company}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                      {exp.duration}
                    </p>
                    <ul className="space-y-2">
                      {exp.points.map((point, i) => (
                        <li 
                          key={i}
                          className="flex items-start gap-2 dark:text-gray-300 text-gray-700"
                        >
                          <span className="text-purple-600 mt-1">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
