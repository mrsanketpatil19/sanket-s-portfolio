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
  FaChartBar,
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
  SiGooglecloud,
  SiAmazonwebservices,
  SiApachespark,
  SiR,
  SiLeetcode
} from 'react-icons/si';
import beyondCallDutyAward from './assets/figmd-beyond-call-duty-award.png';
import valuesAward from './assets/figmd-values-award.png';

// Geometric Shapes Component
const GeometricShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="geometric-circle top-20 left-10 animate-float"></div>
      <div className="geometric-x top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>×</div>
      <div className="geometric-plus bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>+</div>
      <div className="geometric-circle bottom-20 right-10 animate-float" style={{ animationDelay: '0.5s' }}></div>
      <div className="geometric-x top-60 left-1/4 animate-float" style={{ animationDelay: '1.5s' }}>×</div>
      <div className="geometric-plus top-1/3 right-1/3 animate-float" style={{ animationDelay: '0.8s' }}>+</div>
    </div>
  );
};

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'certifications', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-dark-card/95 backdrop-blur-sm shadow-soft py-3' : 'bg-transparent py-4'
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
          >
            <h1 className="text-2xl font-bold text-white">Sanket</h1>
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

// Hero Section
const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Data Scientist & AI Engineer";

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
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-dark relative overflow-hidden">
      <GeometricShapes />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hello Everyone!<br />
              I'm <span className="gradient-text">Sanket</span>
            </motion.h1>
            
            <motion.h2
              className="text-2xl md:text-3xl font-semibold text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {text}
              <span className="animate-pulse">|</span>
            </motion.h2>
            
            <motion.p
              className="text-lg text-gray-400 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I use data science and AI as a third dimension to simplify complex problems and guide through each and every interaction. I'm not just building models, but creating intelligent solutions that make a real impact.
            </motion.p>
            
            <motion.div
              className="flex items-center space-x-2 text-lg text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <FaMapMarkerAlt className="text-primary" />
              <span>Chicago, IL</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="space-y-4"
            >
              <button className="btn-primary">
                Contact
              </button>
              
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/mrsanketpatil19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link text-2xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/sanket-patil-844281190/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link text-2xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  href="https://leetcode.com/u/sanketpraveenpatil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link text-2xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <SiLeetcode />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary rounded-full transform rotate-12 scale-110 opacity-20 animate-glow"></div>
              <img
                src={`${process.env.PUBLIC_URL}/work_experience/WhatsApp Image 2025-07-04 at 12.05.58.jpeg`}
                alt="Sanket Patil"
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover shadow-large border-4 border-primary/30"
              />
            </div>
          </motion.div>
        </div>
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
    <section id="about" className="py-20 bg-dark-card" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Passionate about turning data into meaningful insights</p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="card card-hover p-8">
              <div className="flex items-center mb-4">
                <FaGraduationCap className="text-primary text-2xl mr-3" />
                <h3 className="text-2xl font-semibold text-white">Education</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Master's in Data Science at DePaul University (Sep 2023 - Jun 2025) with a GPA of 3.87. 
                Focusing on advanced machine learning, deep learning, and AI systems development.
              </p>
            </div>
            
            <div className="card card-hover p-8">
              <div className="flex items-center mb-4">
                <FaBriefcase className="text-primary text-2xl mr-3" />
                <h3 className="text-2xl font-semibold text-white">Experience</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Previously worked as a Data Analyst at MRO Corp (Jan 2021 - Aug 2023), where I developed 
                expertise in data analysis, visualization, and business intelligence solutions.
              </p>
            </div>
            
            <div className="card card-hover p-8">
              <div className="flex items-center mb-4">
                <FaRocket className="text-primary text-2xl mr-3" />
                <h3 className="text-2xl font-semibold text-white">Passion</h3>
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
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 animate-glow"></div>
              <div className="absolute inset-4 bg-dark-card rounded-full flex items-center justify-center shadow-large border border-primary/30">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <p className="text-xl font-semibold gradient-text">Data Scientist</p>
                  <p className="text-gray-300">AI Engineer</p>
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
      color: "primary",
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
      color: "primary",
      skills: [
        { name: "PySpark", icon: SiApachespark, level: 88 },
        { name: "BigQuery", icon: FaDatabase, level: 85 },
        { name: "GCP", icon: SiGooglecloud, level: 87 },
        { name: "AWS", icon: SiAmazonwebservices, level: 85 },
        { name: "SQL", icon: FaDatabase, level: 90 },
        { name: "ETL", icon: FaDatabase, level: 88 },
      ]
    },
    {
      title: "Visualization",
      color: "primary",
      skills: [
        { name: "Tableau", icon: SiTableau, level: 88 },
        { name: "PowerBI", icon: FaChartBar, level: 85 },
        { name: "Matplotlib", icon: FaChartLine, level: 90 },
        { name: "Seaborn", icon: FaChartLine, level: 87 },
      ]
    },
    {
      title: "GenAI & LLMs",
      color: "primary",
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
    <section id="skills" className="py-20 bg-dark-bg" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">Technical expertise across data science and AI</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="card card-hover p-6"
            >
              <h3 className="text-xl font-semibold mb-6 text-primary">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <skill.icon className="text-primary text-lg" />
                      <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
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

// Project Modal Component
const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4" onClick={onClose}>
      <div className="relative max-w-4xl max-h-[90vh] overflow-y-auto">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          className="relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute -top-2 -right-2 z-10 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
          >
            ×
          </button>
          <div className="card p-8">
            {/* Project Header */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">{project.emoji}</div>
                <h3 className="text-3xl font-bold text-white">{project.title}</h3>
              </div>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="text-primary font-semibold">{project.date}</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-300 text-sm">{project.technologies}</span>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">{project.description}</p>
            </div>

            {/* Project Image */}
            <div className="mb-8">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded-lg shadow-medium"
              />
            </div>

            {/* Problem Statement */}
            <div className="mb-8">
              <h4 className="text-2xl font-bold text-primary mb-4">🔧 Problem</h4>
              <p className="text-gray-300 leading-relaxed">{project.problem}</p>
            </div>

            {/* What I Built */}
            <div className="mb-8">
              <h4 className="text-2xl font-bold text-primary mb-6">🏗️ What I Built</h4>
              <div className="grid md:grid-cols-2 gap-6">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-dark-bg p-6 rounded-lg border border-gray-700"
                  >
                    <h5 className="text-lg font-semibold text-white mb-3">{feature.title}</h5>
                    <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance & Optimization */}
            <div className="mb-8">
              <h4 className="text-2xl font-bold text-primary mb-4">⚙️ Performance & Optimization</h4>
              <ul className="space-y-2">
                {project.optimizations.map((opt, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-300">{opt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Impact */}
            <div className="border-t border-gray-700 pt-6">
              <h4 className="text-2xl font-bold text-primary mb-4">🎯 Impact</h4>
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
      image: `${process.env.PUBLIC_URL}/work_experience/ChatGPT Image Jul 3, 2025, 09_58_12 PM.png`,
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
      image: `${process.env.PUBLIC_URL}/work_experience/image.png`,
      emoji: "🏥"
    },
    {
      id: 3,
      title: "Fashion Recommender System",
      technologies: "Python, ResNet50, CNN, KNN, Streamlit, AWS EC2, S3",
      date: "Feb 2025",
      description: "A scalable visual fashion recommender system that provides intuitive, visually similar product recommendations based on deep learning image embeddings and real-time similarity matching.",
      problem: "Fashion e-commerce platforms struggle to provide intuitive, visually similar product recommendations based on images. Most systems rely on text-based filters or tags, which often fail to capture a user's actual visual preference. The challenge was to build a scalable visual recommender that understands style similarity across thousands of fashion items and runs interactively in real time.",
      features: [
        {
          title: "Image Feature Extraction",
          description: "Curated a dataset of 44,000+ fashion images across 20 categories. Used pre-trained ResNet50 (without the final classification layer) to extract 2048-dimensional feature embeddings for each image. Normalized embeddings to enable cosine similarity–based recommendations."
        },
        {
          title: "Similarity Engine",
          description: "Implemented a K-Nearest Neighbors (KNN) model to find top visually similar items based on embeddings. Built a function to return N similar items given a query image or product."
        },
        {
          title: "Web Interface",
          description: "Developed a fully interactive app using Streamlit to let users upload an image or select from gallery items. Displayed top 5–10 visually similar fashion products with category, similarity score, and download links."
        },
        {
          title: "Deployment",
          description: "Deployed the entire system on AWS EC2, using S3 for image storage and retrieval. Ensured the system could handle concurrent requests and scale based on user traffic."
        }
      ],
      optimizations: [
        "Used batch preprocessing and lazy loading of embeddings to reduce memory usage",
        "Reduced inference latency to under 1.2 seconds per query, even on EC2 t2.medium instances",
        "Enabled caching with Streamlit and NumPy memmaps to accelerate repeat queries",
        "Filtered corrupt or low-resolution images using a custom validation script before model processing"
      ],
      impact: "Delivered a lightweight, deployable fashion recommender system that could be integrated into any e-commerce website. Eliminated the need for manual tagging or curation by using deep visual embeddings. Enhanced user experience by offering intuitive, visual product discovery, helping bridge the gap between style and search. Demonstrated the power of combining deep learning + KNN + cloud deployment in real-world recommender systems.",
      image: `${process.env.PUBLIC_URL}/work_experience/ChatGPT Image Jul 4, 2025, 06_44_13 PM.png`,
      emoji: "👗"
    },
    {
      id: 4,
      title: "Property Price Prediction",
      technologies: "Python, Scikit-learn, XGBoost, Random Forest, GridSearchCV",
      date: "Feb 2025",
      description: "A robust machine learning model for accurate real estate price predictions using advanced feature engineering and ensemble methods on over 1 million property records.",
      problem: "Real estate companies need accurate price predictions to drive better investments, optimize listings, and estimate market value. However, housing data is high-dimensional and often noisy—with inconsistencies, outliers, missing values, and complex feature interactions. The challenge was to build a robust model that generalizes well across diverse property types using more than 1 million records.",
      features: [
        {
          title: "Data Preparation",
          description: "Preprocessed over 1 million rows of real estate data containing 83+ numeric and categorical features (e.g., area, location, amenities, year built). Applied feature engineering techniques such as polynomial features, interaction terms, and composite features (e.g., price per sq.ft). Handled missing data, outliers, and extreme skewness through capping and log transformation."
        },
        {
          title: "Model Development",
          description: "Trained and evaluated multiple regression models including Linear Regression, Ridge, Lasso, Random Forest, and XGBoost. Tuned hyperparameters using GridSearchCV with K-fold cross-validation (k=5) for each model. Implemented an ensemble strategy to evaluate performance consistency across models."
        }
      ],
      optimizations: [
        "Boosted R-squared by 8% after hyperparameter tuning and advanced feature engineering",
        "Used feature importance plots and permutation importance to reduce dimensionality while preserving accuracy",
        "Scaled numeric features using StandardScaler and applied one-hot encoding for categorical variables",
        "Benchmarked models using metrics like RMSE, MAE, and adjusted R² to ensure model generalization"
      ],
      impact: "Delivered a high-accuracy property pricing model ready for integration with real estate platforms or valuation tools. Made the model interpretable by tracking top predictive features (e.g., location, size, year). Showcased the ability to build scalable ML pipelines for noisy, real-world tabular data. Demonstrated proficiency in model selection, tuning, and deployment preparation for predictive analytics.",
      image: `${process.env.PUBLIC_URL}/work_experience/ChatGPT Image Jul 4, 2025, 07_07_31 PM.png`,
      emoji: "🏘️"
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
    <section id="projects" className="py-20 bg-dark-bg" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">My Top Projects</h2>
          <p className="section-subtitle">Showcasing my technical expertise and problem-solving skills</p>
        </motion.div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mb-8">
            <motion.button
              className="w-12 h-12 bg-dark-card border border-gray-700 rounded-full flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                const container = document.getElementById('projects-scroll');
                if (container) {
                  container.scrollLeft -= 400;
                }
              }}
            >
              ←
            </motion.button>
            <motion.button
              className="w-12 h-12 bg-dark-card border border-gray-700 rounded-full flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                const container = document.getElementById('projects-scroll');
                if (container) {
                  container.scrollLeft += 400;
                }
              }}
            >
              →
            </motion.button>
          </div>
          
          {/* Scrollable Projects Container */}
          <div 
            id="projects-scroll"
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card project-card-hover p-6 cursor-pointer border border-gray-700 flex-shrink-0 w-80"
                onClick={() => openModal(project)}
              >
                {/* Project Image */}
                <div className="relative mb-4">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover shadow-medium transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white text-lg border-2 border-dark-card shadow-glow transition-all duration-300 hover:scale-110 hover:shadow-glow">
                    {project.emoji}
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white transition-colors duration-300 hover:text-primary">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-primary font-semibold text-sm">{project.date}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-300 text-xs font-medium">{project.technologies}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm line-clamp-3">{project.description}</p>
                  <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-primary bg-opacity-10 rounded-full border border-primary transition-all duration-300 hover:bg-primary hover:text-white group">
                    <span className="text-primary font-semibold text-sm group-hover:text-white transition-colors">Click to explore</span>
                    <span className="text-primary group-hover:text-white transition-colors group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4" onClick={onClose}>
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
            className="absolute -top-2 -right-2 z-10 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
          >
            ×
          </button>
          <div className="card p-4">
            {certificate?.image ? (
              <img
                src={certificate.image}
                alt={`${certificate.title} Certificate`}
                className="w-full h-auto rounded-lg shadow-medium"
              />
            ) : (
              <div className="w-full h-96 bg-dark-bg rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <certificate.icon className="text-6xl text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2 text-white">{certificate.title}</h3>
                  <p className="text-primary text-lg font-semibold mb-4">{certificate.issuer}</p>
                  <p className="text-gray-400">Certificate image will be displayed here</p>
                </div>
              </div>
            )}
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-white mb-2">{certificate.title}</h3>
              <p className="text-primary font-semibold">{certificate.issuer}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Award Modal Component
const AwardModal = ({ isOpen, onClose, award }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4" onClick={onClose}>
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
            className="absolute -top-2 -right-2 z-10 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
          >
            ×
          </button>
          <div className="card p-4">
            {award?.image ? (
              <img
                src={award.image}
                alt={`${award.awardName} Award`}
                className="w-full h-auto rounded-lg shadow-medium"
              />
            ) : (
              <div className="w-full h-96 bg-dark-bg rounded-lg flex items-center justify-center border border-gray-700">
                <div className="text-center">
                  <FaAward className="text-6xl text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2 text-white">{award.awardName}</h3>
                  <p className="text-gray-400">Award image will be displayed here</p>
                </div>
              </div>
            )}
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-white mb-2">{award.awardName}</h3>
              <p className="text-gray-300">{award.text}{award.afterText}</p>
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

  const [selectedAward, setSelectedAward] = useState(null);
  const [isAwardModalOpen, setIsAwardModalOpen] = useState(false);

  const experiences = [
    {
      title: "Research Assistant",
      company: "DePaul University",
      location: "Chicago, IL",
      duration: "Mar 2024 – Present",
      description: "Conducting research in machine learning and AI systems, focusing on natural language processing and deep learning applications.",
      color: "primary",
      image: `${process.env.PUBLIC_URL}/work_experience/DePaul.jpeg`,
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
      color: "primary",
      image: `${process.env.PUBLIC_URL}/work_experience/MRO.jpg`,
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
        {
          text: "Recognized with the ",
          awardName: "Beyond the Call of Duty",
          afterText: " award for driving innovation in registry data architecture",
          image: beyondCallDutyAward,
          hasImage: true
        },
        {
          text: "Received ",
          awardName: "FIGmd Values Award",
          afterText: " for exceptional client collaboration and technical excellence",
          image: valuesAward,
          hasImage: true
        },
        {
          text: "Reduced reporting delays by 25% through optimized SQL pipeline architecture",
          hasImage: false
        },
        {
          text: "Improved workflow efficiency by 40%+ through advanced query optimization techniques",
          hasImage: false
        }
      ]
    }
  ];

  const openAwardModal = (award) => {
    setSelectedAward(award);
    setIsAwardModalOpen(true);
  };

  const closeAwardModal = () => {
    setIsAwardModalOpen(false);
    setSelectedAward(null);
  };

  return (
    <section id="experience" className="py-20 bg-dark-card" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">Professional journey and achievements</p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative pl-20 pb-12"
              >
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-medium"></div>
                
                <div className="card card-hover p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary">{exp.title}</h3>
                      <p className="text-xl text-gray-300">{exp.company}</p>
                      <p className="text-gray-400 flex items-center mt-2">
                        <FaMapMarkerAlt className="mr-2" />
                        {exp.location}
                      </p>
                    </div>
                    <div className="text-primary font-semibold mt-2 md:mt-0">
                      {exp.duration}
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">{exp.description}</p>
                  
                  {exp.project && (
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-primary mb-2">📚 {exp.project}</h4>
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    {exp.details?.slice(0, 3).map((detail, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 leading-relaxed text-sm">{detail}</p>
                      </div>
                    ))}
                  </div>
                  
                  {exp.achievements && (
                    <div className="mt-6 p-4 bg-dark-bg rounded-lg border border-gray-700">
                      <h4 className="text-lg font-semibold text-primary mb-3">🏆 Key Achievements</h4>
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-300 text-sm">
                              {achievement.text}
                              {achievement.hasImage ? (
                                <span 
                                  className="cursor-pointer hover:text-primary transition-colors underline decoration-primary/50 hover:decoration-primary font-semibold"
                                  onClick={() => openAwardModal(achievement)}
                                >
                                  "{achievement.awardName}"
                                </span>
                              ) : (
                                <span className="font-semibold text-primary">
                                  {achievement.awardName}
                                </span>
                              )}
                              {achievement.afterText}
                              {achievement.hasImage && (
                                <span className="ml-2 text-primary">🏆</span>
                              )}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <AwardModal 
          isOpen={isAwardModalOpen} 
          onClose={closeAwardModal} 
          award={selectedAward} 
        />
      </div>
    </section>
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
      color: "primary",
      image: `${process.env.PUBLIC_URL}/certificates/hackerrank-python-sql.jpg`
    },
    {
      title: "Data Analytics & ML",
      issuer: "Imarticus Learning",
      icon: FaChartLine,
      color: "primary",
      image: `${process.env.PUBLIC_URL}/certificates/Imarticus Certificate.jpg`
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
    <section id="certifications" className="py-20 bg-dark-card" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Professional certifications and achievements</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="card card-hover p-8 text-center cursor-pointer"
              onClick={() => openModal(cert)}
            >
              <cert.icon className="text-6xl text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-white">{cert.title}</h3>
              <p className="text-primary text-lg font-semibold mb-4">{cert.issuer}</p>
              <FaAward className="text-primary text-2xl mx-auto mb-2" />
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
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-dark-bg" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's discuss opportunities and collaborations</p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="card card-hover p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Let's Connect</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-primary text-2xl" />
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p className="text-lg text-white">sanketpraveenpatil@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FaPhone className="text-primary text-2xl" />
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <p className="text-lg text-white">464-300-9543</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="text-primary text-2xl" />
                  <div>
                    <p className="text-gray-400">Location</p>
                    <p className="text-lg text-white">Chicago, IL</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card card-hover p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Social Links</h3>
              <div className="flex space-x-6">
                <motion.a
                  href="https://github.com/mrsanketpatil19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link text-2xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/sanket-patil-844281190/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link text-2xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  href="https://leetcode.com/u/sanketpraveenpatil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link text-2xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <SiLeetcode />
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="card card-hover p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Send Message</h3>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="form-textarea"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="btn-primary w-full"
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
    <footer className="py-8 bg-dark-card border-t border-gray-700">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-gray-300">
            © 2024 Sanket Patil. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 mt-2">
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