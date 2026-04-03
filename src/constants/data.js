// src/constants/data.js

export const personalInfo = {
  name: "Shreyas Mohite",
  title: "Shreyas",
  roles: ["Generative AI Engineer", "Full Stack Developer", "Software Engineer"],
  description: "Passionate about creating innovative solutions using Generative AI, Full Stack Development, and emerging technologies. Currently working at NCS Group as an Associate Engineer.",
  location: "Pune, Maharashtra, India",
  email: "shreyasmohite001@gmail.com",
  phone: "+91 9172129218",
  linkedin: "https://www.linkedin.com/in/shreyas-mohite-750a64227/",
  github: "https://github.com/shreyasm007",
  leetcode: "https://leetcode.com/shreyasm_007",
  resume: "https://drive.google.com/file/d/1QxLBL_u6-xmQHRGVHBq06ZN_C5QAgA7j/view?usp=sharing",
  gfg: "https://auth.geeksforgeeks.org/user/shreyasmoe7um",
  hackerrank: "https://www.hackerrank.com/profile/shreyasm007"
};

export const aboutMe = {
  education: [
    {
      institution: "Walchand College of Engineering, Sangli",
      degree: "B.Tech in Computer Science and Engineering",
      duration: "Nov 2020 - May 2024",
      grade: "CGPA: 8.34",
      link: "https://drive.google.com/file/d/1BR2cK4AIbbxmFpk9j2Qm_u_P9GfrBNoE/view?usp=sharing",
      linkText: "View Degree"
    },
    {
      institution: "Ligade Patil Junior College of Science, Karad",
      degree: "Higher Secondary Certificate (HSC) in Science",
      duration: "Mar 2018 - Jun 2020",
      grade: "Grade: 95.23%",
      link: "https://drive.google.com/file/d/1aZaGh6GzZTHhBmpxyW6Dn8LeImSrjIq-/view?usp=sharing",
      linkText: "View Grade Card"
    },
    {
      institution: "Mahatma Gandhi Vidyalaya, Kadegaon",
      degree: "Secondary School Certificate",
      duration: "Jun 2013 - May 2018",
      grade: "Grade: 96.60%",
      link: "https://drive.google.com/file/d/1aSoIqCCqMKX0wMnGpAjx3G2vlkGV1UEb/view?usp=sharing",
      linkText: "View Grade Card"
    }
  ],
  story: "Born and raised in At Po-Tondoli, Kadegaon, I developed leadership and teamwork skills early as a captain of my school football team and through various activities in school. My passion for technology, combined with extracurricular excellence, drives my pursuit of innovative solutions.",
  professionalOverview: {
    title: "Professional Overview",
    description: "I am a Generative AI Engineer and Full Stack Developer specializing in building advanced AI-driven applications and full-stack solutions. I leverage technologies such as Microsoft Copilot Studio, Hugging Face, and LangChain while maintaining strong problem-solving, leadership, and communication skills.",
    points: [
      "Developing AI-driven solutions and Large Language Models (LLMs)",
      "Building full-stack applications using the MERN stack and other modern frameworks",
      "Delivering innovative projects while excelling in teamwork and leadership",
      "Consistent focus on continuous learning and professional growth"
    ],
    languages: ["English", "Hindi", "Marathi", "Sanskrit"]
  }
};

export const experiences = [
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
    ],
    certificate: "https://drive.google.com/file/d/13o5JrYRNUu7wdFjTHWmsipjB1tQ6WusE/view?usp=sharing"
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

export const projects = [
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

export const skillCategories = [
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
    skills: [
      "Generative AI", 
      "Large Language Models", 
      "Microsoft Copilot Studio", 
      "Hugging Face", 
      "Ollama", 
      "LangChain", 
      "Prompt Engineering",
      "RAG"
    ],
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

export const certifications = [
  {
    title: "Generative AI for Beginners",
    date: "Nov 2024",
    id: "UC-4b7934c1-df3c-4291-9c80-62da15f6a3af",
    link: "https://drive.google.com/file/d/1qrAaILcOWt8epOHGYDDh9VRZxWgiTlTi/view?usp=sharing"
  },
  {
    title: "Microsoft Copilot Studio - The Copilot Studio Masterclass",
    date: "Jan 2025",
    id: "UC-5fb90533-f016-4938-9d72-fee40558d308",
    link: "https://drive.google.com/file/d/1qW46JD9lzwxW2PUukDiQ5c_K8_tWEjle/view?usp=sharing"
  },
  {
    title: "Introduction to Generative AI and Prompt Engineering",
    date: "Oct 2024",
    id: "11372998",
    link: "https://skillsoft.digitalbadges-eu.skillsoft.com/c4990f3c-3162-48ae-9709-d63fc7bc25aa"
  },
  {
    title: "Prompt Engineering for Git: Leveraging Prompt Engineering to Learn Git",
    date: "Oct 2024",
    link: "https://skillsoft.digitalbadges-eu.skillsoft.com/61e2e90a-f52a-434f-b11e-cdcdfaf92875#acc.IG2x8ZaP"
  },
  {
    title: "Blockchain and its Applications",
    date: "Apr 2024",
    institution: "NPTEL",
    link: "https://drive.google.com/file/d/18RnVa-Kwx4aRBkAm1YiqjQnjiuAMMJ9C/view?usp=sharing"
  },
  {
    title: "NVIDIA DLI Certificate - Fundamentals of Accelerated Computing with CUDA C/C++",
    date: "Oct 2023",
    id: "lvJd0zL0RlSjzSQlEwMfjg",
    link: "https://courses.nvidia.com/certificates/8ac39494550b4be68780471093919082"
  }
];

export const navLinks = [
  { name: 'About', to: 'about' },
  { name: 'Experience', to: 'experience' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
];

export const chatbotConfig = {
  welcomeMessage: "Hello! I'm here to help you learn more about this portfolio. Feel free to ask me about:\n\n- **Technical Skills**\n- **Projects & Achievements**\n- **Professional Experience**\n- Any other questions you have!",
  localApiUrl: "http://localhost:8000",
  prodApiUrl: "https://shreyasm007-myjarvis.hf.space",
  onboardingTooltip: "Hey! Talk to my AI assistant."
};
