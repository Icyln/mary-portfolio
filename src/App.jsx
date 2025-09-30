import React, { useState, useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaBars, FaTimes, FaLinkedin, FaGithub, FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { SiMongodb, SiMysql, SiExpress, SiTailwindcss } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// --- Navigation ---
const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <a href="#home" className="text-xl md:text-2xl font-bold text-teal-400 hover:text-teal-300 transition-colors">
          Nang Myat Mary Htun
        </a>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-200 hover:text-teal-400 text-sm lg:text-lg transition-colors relative group"
            >
              {link.label}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          ))}
        </div>
        {/* Mobile Hamburger */}
        <button className="md:hidden text-2xl text-gray-200" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-gray-800 shadow-lg border-t border-gray-700"
        >
          <div className="flex flex-col space-y-4 p-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-200 hover:text-teal-400 transition-colors text-lg text-center py-2"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

// --- Hero Section ---
const Hero = () => (
  <section
    id="home"
    className="relative w-full min-h-screen flex items-center bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4 sm:px-6 overflow-hidden"
  >
    {/* Background shapes */}
    <div className="absolute inset-0 z-0 opacity-10">
      <div className="absolute w-40 h-40 sm:w-64 sm:h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob top-10 left-10 sm:left-20"></div>
      <div className="absolute w-40 h-40 sm:w-64 sm:h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 top-0 right-10 sm:right-20"></div>
      <div className="absolute w-40 h-40 sm:w-64 sm:h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 bottom-10 left-1/2 sm:left-60"></div>
    </div>
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-12 relative z-10 py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 text-center md:text-left space-y-6"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-4 leading-tight">
          Hi, I’m <span className="text-teal-400 block sm:inline">Nang Myat Mary Htun</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
          Aspiring Software Developer • React & Node.js Enthusiast • Full-stack Web Developer
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-6 py-3 bg-teal-500 text-gray-900 font-bold rounded-full shadow-lg hover:bg-teal-400 transition-all text-center text-lg"
          >
            Contact Me
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="Nang Myat Mary Htun - Resume.pdf"
            download
            className="px-6 py-3 border-2 border-gray-400 text-gray-200 font-semibold rounded-full shadow-lg hover:bg-gray-700 hover:border-teal-400 transition-all text-center text-lg"
          >
            Download CV
          </motion.a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex-1 flex justify-center md:justify-end"
      >
        <img
          src="/profile_3.png"
          alt="Profile"
          className="w-48 sm:w-64 md:w-80 lg:w-96 aspect-square rounded-full object-cover shadow-2xl border-4 border-teal-500 hover:border-teal-400 transition-transform transform hover:scale-105 duration-500 ease-in-out"
        />
      </motion.div>
    </div>
  </section>
);


const AnimatedSection = ({ children, id, className }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

// --- About & Education Section ---
const AboutEducation = () => (
  <AnimatedSection id="about" className="py-16 md:py-20 bg-gray-900 text-gray-200">
    <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start max-w-7xl">
      {/* About Me */}
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-6 border-b-2 border-gray-700 pb-3">About Me</h2>
        <p className="text-base md:text-lg leading-relaxed text-justify">
          Hi, I’m <span className="font-semibold text-teal-300">Nang Myat Mary Htun</span>, an aspiring software
          developer passionate about building clean, modern, and interactive web applications. My learning journey at
          Lithan Academy has equipped me with strong skills in full-stack development, including HTML, CSS, JavaScript,
          React, Node.js, and databases. Through hands-on projects, I have honed my problem-solving and technical
          abilities, allowing me to create applications that are both functional and user-friendly.
        </p>
        <p className="text-base md:text-lg leading-relaxed text-justify">
          My goal is to contribute to impactful software projects that improve everyday experiences for users. I am eager
          to continue learning, take on challenging projects, and leverage my knowledge and creativity to deliver
          solutions that make a meaningful difference in the world of technology.
        </p>
      </div>
      {/* Education */}
      <div className="space-y-8" id="education">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-6 border-b-2 border-gray-700 pb-3">Education</h2>
        <div className="space-y-6">

          <motion.div
            whileHover={{ scale: 1.02, backgroundColor: "#1f2937" }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 transition-all duration-300 cursor-pointer"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-white">High School</h3>
            <p className="text-teal-300 mt-1">B.E.H.S (1) Taunggyi</p>
            <p className="text-gray-400 text-sm">2010 - 2019</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02, backgroundColor: "#1f2937" }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 transition-all duration-300 cursor-pointer"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-white">Foundation Diploma in Information Technology</h3>
            <p className="text-teal-300 mt-1">Lithan Academy</p>
            <p className="text-gray-400 text-sm">2023 - 2024</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02, backgroundColor: "#1f2937" }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 transition-all duration-300 cursor-pointer"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-white">Higher Diploma in Software Engineering</h3>
            <p className="text-teal-300 mt-1">Lithan Academy</p>
            <p className="text-gray-400 text-sm">2024 - 2025</p>
          </motion.div>
        </div>
      </div>
    </div>
  </AnimatedSection>
);

// --- Skills Section with Progress Bars ---
const Skills = () => {
  const [activeTab, setActiveTab] = useState("tech");
  
  const techSkills = [
    { name: "HTML", level: 90, icon: <FaHtml5 color="#E44D26" /> },
    { name: "CSS", level: 90, icon: <FaCss3Alt color="#1572B6" /> },
    { name: "JavaScript", level: 75, icon: <FaJs color="#F7DF1E" /> },
    { name: "React", level: 70, icon: <FaReact color="#61DAFB" /> },
    { name: "Node.js", level: 75, icon: <FaNodeJs color="#339933" /> },
    { name: "Express.js", level: 70, icon: <SiExpress color="#68A063" /> },
    { name: "MongoDB", level: 75, icon: <SiMongodb color="#47A248" /> },
    { name: "MySQL", level: 70, icon: <SiMysql color="#00758F" /> },
    { name: "Git/GitHub", level: 75, icon: <FaGitAlt color="#F05032" /> },
    { name: "Tailwind CSS", level: 80, icon: <SiTailwindcss color="#06B6D4" /> },
  ];
  
  const softSkills = [
    "Problem Solving",
    "Team Collaboration",
    "Time Management",
    "Adaptability",
    "Communication",
    "Critical Thinking",
    "Attention to Detail",
  ];

  return (
    <AnimatedSection id="skills" className="w-full py-16 md:py-20 px-4 sm:px-6 bg-gray-800 text-gray-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-teal-400">Skills</h2>
        
        {/* Tabs */}
        <div className="flex justify-center gap-4 md:gap-6 mb-8 md:mb-12">
          <button
            onClick={() => setActiveTab("tech")}
            className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold text-base md:text-lg transition-all duration-300 ${
              activeTab === "tech"
                ? "bg-teal-600 text-white shadow-lg"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            Technical Skills
          </button>
          <button
            onClick={() => setActiveTab("soft")}
            className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold text-base md:text-lg transition-all duration-300 ${
              activeTab === "soft"
                ? "bg-teal-600 text-white shadow-lg"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            Soft Skills
          </button>
        </div>
        
        {/* Technical Skills with Progress Bars */}
        {activeTab === "tech" && (
          <motion.div
            key="tech-skills"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {techSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    {skill.icon}
                    <span className="text-white font-medium text-base md:text-lg">{skill.name}</span>
                  </div>
                  <span className="text-gray-300 text-sm md:text-base font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <motion.div 
                    className="bg-teal-500 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
        
        {/* Soft Skills */}
        {activeTab === "soft" && (
          <motion.div
            key="soft-skills"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900 p-4 md:p-5 rounded-xl shadow-lg border border-gray-700 text-center font-medium text-gray-100 text-base md:text-lg hover:bg-gray-700 transition-colors h-24 flex items-center justify-center"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </AnimatedSection>
  );
};

// --- Projects Section ---
const projectsData = [
  {
    title: "SkillMine",
    description: "A Learning Management System website, mainly focusing on design and frontend.",
    image: "learning.jpg", 
    link: "https://github.com/Icyln/learning-website",
    tags: ["Frontend", "Responsive Design", "React", "Tailwind CSS", "JavaScript", "HTML"],
  },
  {
    title: "Book Library",
    description: "A Library App where users can sign up, log in, search, add, update, and delete books.",
    image: "book1.jpg", 
    link: "https://github.com/Icyln/library-mern",
    tags: ["Full Stack", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "Blog App",
    description: "A full stack Blog App where users can sign up, log in, create posts, and update them.",
    image: "blog.jpg", 
    link: "https://github.com/Icyln/mern-blog",
    tags: ["Full Stack", "React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "ReelTime",
    description: "A movie info app where users can see trending movies, search specific ones, add reviews.",
    image: "reeltime.png", 
    link: "https://github.com/Icyln/reeltime-movie",
    tags: ["Frontend", "TMDB API", "React", "Tailwind CSS", "JavaScript", "HTML"],
  },
  {
    title: "DuBu Martial Arts",
    description: "A branded, multi-page website for DuBo Martial Arts, supported with realistic content.",
    image: "dubu.jpg", 
    link: "https://github.com/Icyln/DuBu",
    tags: ["Frontend", "HTML5", "CSS3", "JavaScript", "Web Design"],
  },
  {
    title: "Portfolio",
    description: "A personal porfolio website deployed on vercel with clean user interface.",
    image: "porfolio.jpg", 
    link: "https://github.com/Icyln/my-portfolio",
    tags: ["Frontend", "React", "Tailwind CSS", "JavaScript", "Formspree"],
  },
];

const ProjectCard = ({ title, description, image, link, tags }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.02, boxShadow: "0 10px 20px rgba(0,0,0,0.4)" }}
    className="bg-gray-800 shadow-xl rounded-lg overflow-hidden flex flex-col cursor-pointer border border-gray-700 hover:border-teal-500 transition-all duration-300 h-full"
  >
    <div className="relative overflow-hidden">
      <img src={image} alt={title} className="w-full aspect-video object-cover transition-transform duration-500 hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 font-bold text-lg flex items-center gap-2">
          View Project <FaGithub />
        </a>
      </div>
    </div>
    <div className="p-4 sm:p-6 flex flex-col flex-grow">
      <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 mb-4 flex-grow text-sm sm:text-base">{description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <span key={tag} className="bg-teal-700/30 text-teal-300 px-3 py-1 rounded-full text-xs font-medium">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Projects = () => (
  <AnimatedSection id="projects" className="w-full py-16 md:py-20 px-4 sm:px-6 bg-gray-900 text-gray-200">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-teal-400">My Projects</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        className="pb-12"
      >
        {projectsData.map((project) => (
          <SwiperSlide key={project.title}>
            <ProjectCard {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </AnimatedSection>
);

// --- Contact Section with Formspree ---
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace with your Formspree endpoint
      const response = await fetch('https://formspree.io/f/xvgbdbkl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatedSection id="contact" className="w-full py-16 md:py-20 px-4 sm:px-6 bg-gray-800 text-gray-200">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-teal-400">Get In Touch</h2>
        <p className="text-base md:text-lg text-gray-300 mb-8 md:mb-10 max-w-2xl mx-auto">
          I'm currently open to internship and job opportunities. Feel free to connect with me!
        </p>
        
        {/* Status Message */}
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-900/30 border border-green-700 rounded-lg text-green-300">
            Thank you for your message! I'll get back to you soon.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-900/30 border border-red-700 rounded-lg text-red-300">
            Oops! Something went wrong. Please try again later.
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-900 p-6 md:p-8 rounded-xl shadow-xl border border-gray-700 text-left"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="shadow appearance-none border border-gray-600 rounded w-full py-3 px-4 text-gray-100 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-700"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow appearance-none border border-gray-600 rounded w-full py-3 px-4 text-gray-100 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-700"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="shadow appearance-none border border-gray-600 rounded w-full py-3 px-4 text-gray-100 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-700"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
                className={`bg-teal-500 hover:bg-teal-600 text-gray-900 font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition-colors text-lg w-full ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-900 p-6 md:p-8 rounded-xl shadow-xl border border-gray-700 space-y-8 flex flex-col justify-center items-center h-full"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">Find Me Here</h3>
            <div className="flex flex-col gap-6 w-full max-w-xs">
              <a
                 href="https://mail.google.com/mail/?view=cm&to=mayyihtun0@gmail.com"
                 target="_blank"
                 rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-teal-400 transition-colors text-lg"
              >
                <FaEnvelope size={30} /> mayyihtun0@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/myatmaryhtun"

                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-teal-400 transition-colors text-lg"
              >
                <FaLinkedin size={30} /> LinkedIn
              </a>
              <a
                href="https://github.com/Icyln"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-teal-400 transition-colors text-lg"
              >
                <FaGithub size={30} /> GitHub
              </a>

               <a
              href="tel:+959123456789"
              className="flex items-center gap-4 hover:text-teal-400 transition-colors"
              >
             <FaPhone size={30} /> +959444472964
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 hover:text-teal-400 transition-colors">
            <FaMapMarkerAlt size={30} /> Taunggyi, Myanmar
            </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

// --- Footer ---
const Footer = () => (
  <footer className="w-full bg-gray-900 border-t border-gray-700 py-8 text-center text-gray-400">
    <p className="text-base">© {new Date().getFullYear()} Nang Myat Mary Htun. All rights reserved.</p>
    <p className="text-sm mt-2">Built with <span className="text-teal-400">React</span> & <span className="text-teal-400">Tailwind CSS</span></p>
  </footer>
);

// --- Main App ---
export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <AboutEducation />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}