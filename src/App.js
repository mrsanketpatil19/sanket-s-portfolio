import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaPython,
  FaDatabase,
  FaChartLine,
  FaAward,
  FaGraduationCap,
  FaBriefcase,
  FaRocket
} from 'react-icons/fa';
import { 
  SiTensorflow, 
  SiPytorch, 
  SiScikitlearn, 
  SiTableau, 
  SiPowerbi,
  SiGooglecloud,
  SiAmazonaws,
  SiApachespark,
  SiR,
  SiLeetcode
} from 'react-icons/si';

// Particle Component
const Particles = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

// Contact Info Modal Component
const ContactInfoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-start pt-20 pl-6" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: -20 }}
        className="relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="glass-card p-6 rounded-lg shadow-2xl min-w-[300px]">
          <div className="flex items-center mb-4">
            <img
              src="/work_experience/WhatsApp Image 2025-07-03 at 21.44.35.jpeg"
              alt="Sanket Patil"
              className="w-12 h-12 rounded-full mr-3 border-2 border-neon-red"
            />
            <div>
              <h3 className="text-lg font-bold red-gradient-text">Sanket Patil</h3>
              <p className="text-sm text-neon-blue">Data Scientist & AI Engineer</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-neon-red text-lg" />
              <span className="text-sm">sanketpraveenpatil@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhone className="text-neon-green text-lg" />
              <span className="text-sm">464-300-9543</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-neon-blue text-lg" />
              <span className="text-sm">Chicago, IL</span>
            </div>
          </div>
          
          <div className="flex space-x-3 mt-4 pt-4 border-t border-dark-border">
            <motion.a
              href="https://github.com/mrsanketpatil19"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-dark-card rounded-full hover-glow"
              whileHover={{ scale: 1.1 }}
            >
              <FaGithub size={16} className="text-neon-blue" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/sanketpraveenpatil"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-dark-card rounded-full hover-glow"
              whileHover={{ scale: 1.1 }}
            >
              <FaLinkedin size={16} className="text-neon-blue" />
            </motion.a>
            <motion.a
              href="https://leetcode.com/u/sanketpraveenpatil/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-dark-card rounded-full hover-glow"
              whileHover={{ scale: 1.1 }}
            >
              <SiLeetcode size={16} className="text-neon-green" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'];

  const toggleContactModal = () => {
    setIsContactModalOpen(!isContactModalOpen);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'glass-card py-2' : 'py-4'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <motion.div
              className="cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleContactModal}
            >
              <img
                src="/work_experience/WhatsApp Image 2025-07-03 at 21.44.35.jpeg"
                alt="Sanket Patil"
                className="w-10 h-10 rounded-full border-2 border-neon-red hover:border-neon-green transition-colors duration-300"
              />
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-neon-blue transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>
      
      <ContactInfoModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};

// Hero Section
const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Turning data into decisions...";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img
              src="/work_experience/WhatsApp Image 2025-07-03 at 21.44.35.jpeg"
              alt="Sanket Patil"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full mx-auto object-cover shadow-2xl border-4 border-neon-red"
            />
          </motion.div>
          
          <motion.h1
            className="text-6xl md:text-8xl font-bold red-gradient-text"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Sanket Patil
          </motion.h1>
          
          <motion.h2
            className="text-2xl md:text-4xl text-neon-blue glow-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Data Scientist & AI Engineer
          </motion.h2>
          
          <motion.div
            className="flex items-center justify-center space-x-2 text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <FaMapMarkerAlt className="text-neon-green" />
            <span>Chicago, IL</span>
          </motion.div>
          
          <motion.p
            className="text-xl md:text-2xl text-neon-green h-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            {text}
            <span className="animate-pulse">|</span>
          </motion.p>
          
          <motion.div
            className="flex justify-center space-x-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <motion.a
              href="https://github.com/mrsanketpatil19"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass-card hover-glow rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={24} className="text-neon-blue" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/sanketpraveenpatil"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass-card hover-glow rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin size={24} className="text-neon-blue" />
            </motion.a>
            <motion.a
              href="https://leetcode.com/u/sanketpraveenpatil/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass-card hover-glow rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <SiLeetcode size={24} className="text-neon-green" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// About Section
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-red to-light-red mx-auto"></div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 rounded-lg hover-glow">
              <div className="flex items-center mb-4">
                <FaGraduationCap className="text-neon-green text-2xl mr-3" />
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Master's in Data Science at DePaul University (Sep 2023 - Jun 2025) with a GPA of 3.87. 
                Focusing on advanced machine learning, deep learning, and AI systems development.
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-lg hover-glow">
              <div className="flex items-center mb-4">
                <FaBriefcase className="text-neon-blue text-2xl mr-3" />
                <h3 className="text-2xl font-semibold">Experience</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Previously worked as a Data Analyst at MRO Corp (Jan 2021 - Aug 2023), where I developed 
                expertise in data analysis, visualization, and business intelligence solutions.
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-lg hover-glow">
              <div className="flex items-center mb-4">
                <FaRocket className="text-neon-red text-2xl mr-3" />
                <h3 className="text-2xl font-semibold">Passion</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Passionate about Large Language Models (LLMs), Natural Language Processing (NLP), 
                and Generative AI systems. Always exploring the latest developments in AI technology.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="w-80 h-80 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-red to-light-red rounded-full animate-glow"></div>
              <div className="absolute inset-2 bg-dark-bg rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <p className="text-xl font-semibold gradient-text">Data Scientist</p>
                  <p className="text-neon-blue">AI Engineer</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Skills Section
const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: "ML & Data Science",
      color: "neon-blue",
      skills: [
        { name: "Python", icon: FaPython, level: 90 },
        { name: "R", icon: SiR, level: 85 },
        { name: "TensorFlow", icon: SiTensorflow, level: 88 },
        { name: "Scikit-learn", icon: SiScikitlearn, level: 90 },
        { name: "PyTorch", icon: SiPytorch, level: 87 },
        { name: "XGBoost", icon: FaChartLine, level: 85 },
      ]
    },
    {
      title: "Data Engineering",
      color: "neon-green",
      skills: [
        { name: "PySpark", icon: SiApachespark, level: 88 },
        { name: "BigQuery", icon: FaDatabase, level: 85 },
        { name: "GCP", icon: SiGooglecloud, level: 87 },
        { name: "AWS", icon: SiAmazonaws, level: 85 },
        { name: "SQL", icon: FaDatabase, level: 90 },
        { name: "ETL", icon: FaDatabase, level: 88 },
      ]
    },
    {
      title: "Visualization",
      color: "neon-blue",
      skills: [
        { name: "Tableau", icon: SiTableau, level: 88 },
        { name: "PowerBI", icon: SiPowerbi, level: 85 },
        { name: "Matplotlib", icon: FaChartLine, level: 90 },
        { name: "Seaborn", icon: FaChartLine, level: 87 },
      ]
    },
    {
      title: "GenAI & LLMs",
      color: "neon-green",
      skills: [
        { name: "RAG", icon: FaRocket, level: 85 },
        { name: "GenAI", icon: FaRocket, level: 88 },
        { name: "LangChain", icon: FaRocket, level: 85 },
        { name: "Prompt Engineering", icon: FaRocket, level: 87 },
        { name: "Vector DBs", icon: FaDatabase, level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-red to-light-red mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="glass-card p-6 rounded-lg hover-glow"
            >
              <h3 className={`text-xl font-semibold mb-6 text-${category.color}`}>
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <skill.icon className={`text-${category.color} text-lg`} />
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-${category.color}`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Work Experience Modal Component
const WorkExperienceModal = ({ isOpen, onClose, experience }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4" onClick={onClose}>
      <div className="relative max-w-6xl max-h-[90vh] overflow-y-auto">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          className="relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute -top-2 -right-2 z-10 w-8 h-8 bg-neon-red text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
          >
            ×
          </button>
          <div className="glass-card p-8 rounded-lg">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                {experience?.image ? (
                  <img
                    src={experience.image}
                    alt={`${experience.company} workplace`}
                    className="w-full h-64 object-cover rounded-lg shadow-2xl mb-6"
                  />
                ) : (
                  <div className="w-full h-64 bg-dark-card rounded-lg flex items-center justify-center mb-6">
                    <FaBriefcase className={`text-6xl text-${experience?.color}`} />
                  </div>
                )}
                <div className="text-center lg:text-left">
                  <h3 className={`text-3xl font-bold text-${experience?.color} mb-2`}>{experience?.title}</h3>
                  <p className="text-2xl text-gray-300 mb-2">{experience?.company}</p>
                  <p className="text-gray-400 flex items-center justify-center lg:justify-start mb-2">
                    <FaMapMarkerAlt className="mr-2" />
                    {experience?.location}
                  </p>
                  <p className={`text-${experience?.color} font-semibold text-lg`}>{experience?.duration}</p>
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  {experience?.project && (
                    <div>
                      <h4 className="text-xl font-semibold text-neon-blue mb-3">📚 {experience.project}</h4>
                    </div>
                  )}
                  
                  <div className="space-y-4">
                    {experience?.details?.map((detail, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className={`w-2 h-2 bg-${experience.color} rounded-full mt-2 flex-shrink-0`}></div>
                        <p className="text-gray-300 leading-relaxed">{detail}</p>
                      </div>
                    ))}
                  </div>
                  
                  {experience?.achievements && (
                    <div className="mt-6 p-4 bg-dark-card rounded-lg">
                      <h4 className="text-lg font-semibold text-neon-green mb-3">🏆 Key Achievements</h4>
                      <div className="space-y-2">
                        {experience.achievements.map((achievement, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-neon-green rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-300 text-sm">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Experience Section
const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedExperience, setSelectedExperience] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const experiences = [
    {
      title: "Research Assistant",
      company: "DePaul University",
      location: "Chicago, IL",
      duration: "Mar 2024 – Present",
      description: "Conducting research in machine learning and AI systems, focusing on natural language processing and deep learning applications.",
      color: "neon-blue",
      image: "/work_experience/DePaul.jpeg",
      project: "Semantic Analysis of Scholarly Literature Using OpenAlex & SciBERT",
      details: [
        "Spearheaded the creation of a large-scale bibliographic research database using OpenAlex, ingesting metadata for 50M+ scholarly articles.",
        "Automated the ETL pipeline to extract, clean, and structure bibliographic records into a searchable and research-ready format, ensuring over 99% data integrity.",
        "Applied SciBERT (a transformer-based NLP model fine-tuned on scientific text) to compute dense vector embeddings for 20M+ journal abstracts, enabling downstream semantic similarity and retrieval tasks.",
        "Tokenized and chunked large abstracts to meet transformer input limits while preserving semantic context for accurate embedding generation.",
        "Developed a semantic relationship analysis module that compared embedding clusters across time and topics.",
        "Detected semantic drift in high-impact terms (e.g., \"Generative AI,\" \"Language Models\") using vector space modeling and dispersion plots.",
        "Contributed to internal research tooling using Python, PyTorch, Pandas, UMAP, and custom visualization dashboards for data scientists and professors."
      ]
    },
    {
      title: "Data Analyst",
      company: "MRO Corp",
      location: "Pune, India",
      duration: "Jan 2021 – Aug 2023",
      description: "Developed data analysis pipelines, created business intelligence dashboards, and provided actionable insights to drive business decisions.",
      color: "neon-green",
      image: "/work_experience/MRO.jpg",
      project: "EHR Data Engineering for Clinical Registries & National Reporting",
      details: [
        "Led clinical data integration initiatives using Epic's Reporting Workbench (RPC) and ACEP's CEDR registry, extracting quality metrics and encounter data from EHRs like Caboodle.",
        "Engineered complex SQL pipelines to transform high-volume clinical data including lab results, diagnoses (ICD/CPT), procedures, and medications, reducing reporting delays by 25%.",
        "Applied query optimization techniques like indexing, CTE refactoring, and execution plan tuning to boost efficiency by 40%+ across workflows.",
        "Built robust ETL pipelines on Google Cloud Platform (GCP) using BigQuery and Cloud Storage, enabling scalable ingestion and processing of multi-gigabyte healthcare datasets.",
        "Enforced compliance with CMS reporting standards, automating validation layers to ensure registry-compatible formats for hospital clients.",
        "Oversaw a 30-member data operations team; implemented JIRA-based agile workflows, daily stand-ups, and sprint retrospectives to improve throughput and error resolution.",
        "Automated data quality validation checks using custom Python scripts, significantly reducing transfer-related errors and manual QA overhead."
      ],
      achievements: [
        "Recognized with the \"Beyond the Call of Duty\" award for driving innovation in registry data architecture",
        "Received \"FIGmd Values Award\" for exceptional client collaboration and technical excellence",
        "Reduced reporting delays by 25% through optimized SQL pipeline architecture",
        "Improved workflow efficiency by 40%+ through advanced query optimization techniques"
      ]
    }
  ];

  const openModal = (experience) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedExperience(null);
  };

  return (
    <section id="experience" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-red to-light-red mx-auto"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-red to-light-red"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative pl-20 pb-12"
              >
                <div className={`absolute left-6 w-4 h-4 bg-${exp.color} rounded-full border-4 border-dark-bg animate-pulse`}></div>
                
                <div 
                  className="glass-card p-8 rounded-lg hover-glow cursor-pointer transform transition-all duration-300 hover:scale-105"
                  onClick={() => openModal(exp)}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className={`text-2xl font-bold text-${exp.color}`}>{exp.title}</h3>
                      <p className="text-xl text-gray-300">{exp.company}</p>
                      <p className="text-gray-400 flex items-center mt-2">
                        <FaMapMarkerAlt className="mr-2" />
                        {exp.location}
                      </p>
                    </div>
                    <div className={`text-${exp.color} font-semibold mt-2 md:mt-0`}>
                      {exp.duration}
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">{exp.description}</p>
                  <p className="text-sm text-gray-400 text-center">Click to view detailed experience</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <WorkExperienceModal 
          isOpen={isModalOpen}
          onClose={closeModal}
          experience={selectedExperience}
        />
      </div>
    </section>
  );
};

// Project Details Modal Component
const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4" onClick={onClose}>
      <div className="relative max-w-6xl max-h-[90vh] overflow-y-auto">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          className="relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute -top-2 -right-2 z-10 w-8 h-8 bg-neon-red text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
          >
            ×
          </button>
          <div className="glass-card p-8 rounded-lg">
            {/* Project Header */}
            <div className="mb-8">
              <h3 className="text-3xl font-bold red-gradient-text mb-4">{project.title}</h3>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="text-neon-blue font-semibold">{project.date}</span>
                <span className="text-gray-400">•</span>
                <span className="text-neon-green">{project.technologies}</span>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">{project.description}</p>
            </div>

            {/* Problem Statement */}
            <div className="mb-8">
              <h4 className="text-2xl font-bold text-neon-red mb-4">🔧 Problem</h4>
              <p className="text-gray-300 leading-relaxed">{project.problem}</p>
            </div>

            {/* What I Built */}
            <div className="mb-8">
              <h4 className="text-2xl font-bold text-neon-blue mb-6">🏗️ What I Built</h4>
              <div className="grid md:grid-cols-2 gap-6">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-dark-card p-6 rounded-lg border border-dark-border"
                  >
                    <h5 className="text-lg font-semibold text-neon-green mb-3">{feature.title}</h5>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance & Optimization */}
            <div className="mb-8">
              <h4 className="text-2xl font-bold text-neon-green mb-4">⚙️ Performance & Optimization</h4>
              <ul className="space-y-2">
                {project.optimizations.map((opt, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-neon-red mr-2">•</span>
                    <span className="text-gray-300">{opt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Impact */}
            <div className="border-t border-dark-border pt-6">
              <h4 className="text-2xl font-bold text-neon-red mb-4">🎯 Impact</h4>
              <p className="text-gray-300 leading-relaxed">{project.impact}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Projects Section
const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "LLM-Based Multi-Database Chatbot System",
      technologies: "LangChain, RAG, SQL Agents, OpenAI (GPT-4), Vector DBs (FAISS), Python",
      date: "Mar 2025",
      description: "An AI-powered system that enables natural language question-answering over multiple structured and unstructured data sources using Retrieval-Augmented Generation (RAG).",
      problem: "In real-world enterprise scenarios, data is scattered across multiple formats—structured (like MySQL, PostgreSQL) and unstructured (like PDFs, DOCs). We needed an AI assistant that could ingest all of these and allow users to ask questions in natural language, regardless of where the answer was stored.",
      features: [
        {
          title: "1. Unified Ingestion Pipeline",
          description: "Created a robust pipeline that could handle structured data (SQL databases) and unstructured data (PDFs, DOCX files). Cleaned, chunked, and embedded all textual content using OpenAI's embedding model for uniform vector representation."
        },
        {
          title: "2. Vector + Relational Database Integration", 
          description: "Stored structured data in relational DBs for SQL-agent querying. Stored embedded chunks from unstructured data in Vector DB (FAISS) to power semantic search during RAG."
        },
        {
          title: "3. RAG + SQL Agent Workflow via LangChain",
          description: "Integrated LangChain to orchestrate RAG Pipeline for unstructured sources and SQL Agents for structured sources. Implemented tool-calling to auto-decide which database/tool the agent should use based on question type."
        },
        {
          title: "4. Intelligent Tool Selection & Query Routing",
          description: "Built a smart decision layer where the GPT-powered LLM would parse user intent, choose between SQL querying or semantic retrieval, and dynamically invoke the correct chain. Supported 4+ backends—2 SQL, 2 vector stores."
        }
      ],
      optimizations: [
        "Precomputed embeddings to speed up retrieval (reduced latency by ~40%)",
        "Added query caching using Redis for frequent or similar questions", 
        "Ensured security by sanitizing dynamic SQL inputs before execution"
      ],
      impact: "Enabled querying over 3,000+ embeddings and 15+ data sources with a unified natural language interface. Showcased potential for enterprise use cases like healthcare record QA, compliance document search, and multi-department business intelligence.",
      image: "/work_experience/ChatGPT Image Jul 3, 2025, 09_58_12 PM.png",
      color: "neon-red",
      emoji: "🧠"
    },
    {
      id: 2,
      title: "Medical Chatbot and Provider Dashboard",
      technologies: "Flask, LangChain, OpenAI API, Pandas, NumPy, JavaScript",
      date: "Jan 2025",
      description: "A comprehensive healthcare solution combining an AI-powered chatbot for natural language patient record queries with an intuitive provider dashboard for medical professionals.",
      problem: "Healthcare professionals often need to extract insights from scattered patient records across various departments and formats. Traditional dashboards are too rigid, and querying structured health data requires technical skills. There's also no easy way to compare similar patients or summarize long medical histories on demand.",
      features: [
        {
          title: "Medical Chatbot (LLM-Powered)",
          description: "Used LangChain and OpenAI to enable natural language queries about patient records. Enabled real-time summarization of medications, lab results, conditions, and encounters. Integrated contextual memory for smoother multi-turn conversations. Built a similar patient finder using NumPy-based embedding comparison."
        },
        {
          title: "Provider Dashboard",
          description: "Built with HTML/CSS/JS + Flask backend. Features include provider dropdown, status-based filtering, search/sortable tables, and modal popups with patient details. Floating chat assistant button links directly to patient-specific conversations."
        },
        {
          title: "Data Integration",
          description: "Parsed 6+ healthcare CSVs (Patient, Observation, MedicationRequest, etc.). Linked and visualized them in a single unified interface using get_patient_data() and generate_patient_summary() functions."
        }
      ],
      optimizations: [
        "Preloaded and cached patient embeddings to reduce response time during similarity search",
        "Optimized Flask routes and modularized functions for efficient backend performance",
        "Ensured responsive layout and smooth UX across desktop and mobile devices",
        "Used .env variables for secure API configuration and session timeout logic for better security"
      ],
      impact: "Enabled non-technical users (e.g., nurses, doctors) to interact with patient records via chat without writing code or queries. Reduced time to retrieve and compare patient information from minutes to seconds. Simulated a real-world use case for intelligent LLM-assisted EHR querying, paving the way for smarter, more accessible healthcare tools.",
      image: "/work_experience/image.png",
      color: "neon-blue",
      emoji: "🏥"
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">My Top Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-red to-light-red mx-auto"></div>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + (index * 0.3) }}
              className={`mb-10 ${index % 2 === 1 ? 'md:ml-auto md:mr-0' : 'md:ml-0 md:mr-auto'} max-w-4xl`}
            >
              <div 
                className={`glass-card p-5 rounded-lg hover-glow cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                  index % 2 === 1 ? 'hover:rotate-1' : 'hover:-rotate-1'
                }`}
                onClick={() => openModal(project)}
              >
                <div className={`flex items-start space-x-5 ${index % 2 === 1 ? 'md:flex-row-reverse md:space-x-reverse' : ''}`}>
                  <div className="flex-shrink-0">
                    <div className={`relative p-2 rounded-xl border-3 border-${project.color}`}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-24 h-24 md:w-32 md:h-32 rounded-lg object-cover"
                      />
                      <div className={`absolute -top-1 -right-1 w-8 h-8 bg-${project.color} rounded-full flex items-center justify-center text-lg border-2 border-dark-bg`}>
                        {project.emoji}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={index % 2 === 1 ? 'md:text-right' : ''}>
                      <h3 className="text-xl md:text-2xl font-bold red-gradient-text mb-2">
                        {project.emoji} {project.title}
                      </h3>
                      <div className={`flex flex-wrap items-center gap-3 mb-3 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                        <span className={`text-${project.color} font-semibold text-base`}>{project.date}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-neon-green text-xs font-medium">{project.technologies}</span>
                      </div>
                      <p className="text-gray-300 leading-relaxed mb-4 text-base">{project.description}</p>
                      <div className={`inline-flex items-center space-x-2 px-3 py-1.5 bg-${project.color} bg-opacity-20 rounded-full border border-${project.color}`}>
                        <span className={`text-${project.color} font-semibold text-sm`}>Click to explore</span>
                        <span className={`text-${project.color}`}>→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <ProjectModal 
          isOpen={isModalOpen}
          onClose={closeModal}
          project={selectedProject}
        />
      </div>
    </section>
  );
};

// Certificate Modal Component
const CertificateModal = ({ isOpen, onClose, certificate }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80" onClick={onClose}>
      <div className="relative max-w-4xl max-h-[90vh] p-4">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          className="relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute -top-2 -right-2 z-10 w-8 h-8 bg-neon-red text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
          >
            ×
          </button>
          <div className="glass-card p-4 rounded-lg">
            {certificate?.image ? (
              <img
                src={certificate.image}
                alt={`${certificate.title} Certificate`}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            ) : (
              <div className="w-full h-96 bg-dark-card rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <certificate.icon className={`text-6xl text-${certificate.color} mx-auto mb-4`} />
                  <h3 className="text-2xl font-bold mb-2">{certificate.title}</h3>
                  <p className={`text-${certificate.color} text-lg font-semibold mb-4`}>{certificate.issuer}</p>
                  <p className="text-gray-400">Certificate image will be displayed here</p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Certifications Section
const Certifications = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const certifications = [
    {
      title: "Python Programming & SQL",
      issuer: "HackerRank",
      icon: FaPython,
      color: "neon-green",
      image: "/certificates/hackerrank-python-sql.jpg"
    },
    {
      title: "Data Analytics & ML",
      issuer: "Imarticus Learning",
      icon: FaChartLine,
      color: "neon-blue",
      image: "/certificates/Imarticus Certificate.jpg"
    }
  ];

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  return (
    <section id="certifications" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-red to-light-red mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-card p-8 rounded-lg hover-glow text-center cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => openModal(cert)}
            >
              <cert.icon className={`text-6xl text-${cert.color} mx-auto mb-4 animate-float`} />
              <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
              <p className={`text-${cert.color} text-lg font-semibold mb-4`}>{cert.issuer}</p>
              <FaAward className="text-neon-red text-2xl mx-auto mb-2" />
              <p className="text-sm text-gray-400 mt-2">Click to view certificate</p>
            </motion.div>
          ))}
        </div>
        
        <CertificateModal 
          isOpen={isModalOpen}
          onClose={closeModal}
          certificate={selectedCertificate}
        />
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with a backend service or email service
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-red to-light-red mx-auto"></div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-lg hover-glow">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Let's Connect</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-neon-blue text-2xl" />
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p className="text-lg">sanketpraveenpatil@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FaPhone className="text-neon-green text-2xl" />
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <p className="text-lg">464-300-9543</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="text-neon-red text-2xl" />
                  <div>
                    <p className="text-gray-400">Location</p>
                    <p className="text-lg">Chicago, IL</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-lg hover-glow">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Social Links</h3>
              <div className="flex space-x-6">
                <motion.a
                  href="https://github.com/mrsanketpatil19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-dark-card rounded-full hover-glow"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub size={24} className="text-neon-blue" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/sanketpraveenpatil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-dark-card rounded-full hover-glow"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin size={24} className="text-neon-blue" />
                </motion.a>
                <motion.a
                  href="https://leetcode.com/u/sanketpraveenpatil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-dark-card rounded-full hover-glow"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <SiLeetcode size={24} className="text-neon-green" />
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-lg hover-glow">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Send Message</h3>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg focus:outline-none focus:border-neon-blue transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg focus:outline-none focus:border-neon-blue transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg focus:outline-none focus:border-neon-blue transition-colors resize-none"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-neon-red to-light-red rounded-lg font-semibold hover-glow transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="py-8 border-t border-dark-border">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-gray-400">
            © 2024 Sanket Patil. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Built with React, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="App">
      <Particles />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App; 