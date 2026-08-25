import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useInView } from "react-intersection-observer";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaBars,
  FaTimes,
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPython,
  FaMicrosoft,
  FaDatabase
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiDjango,
  SiFastapi,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// --- Navigation ---
// Removed 'Experience' from navigation
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
        scrolled ? "bg-gray-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <a href="#home" className="text-xl md:text-2xl font-bold text-teal-400 hover:text-teal-300 transition-colors">
          Portfolio
        </a>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-200 hover:text-teal-400 text-sm lg:text-lg transition-colors relative group font-medium"
            >
              {link.label}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          ))}
        </div>
        {/* Mobile Hamburger */}
        <button className="md:hidden text-2xl text-gray-200 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
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
          className="md:hidden bg-gray-800 shadow-xl border-t border-gray-700"
        >
          <div className="flex flex-col space-y-2 p-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-200 hover:text-teal-400 hover:bg-gray-700/50 rounded-lg transition-colors text-lg text-center py-3"
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
    className="relative w-full min-h-screen flex items-center bg-gray-900 text-white px-4 sm:px-6 overflow-hidden"
  >
    {/* Background shapes */}
    <div className="absolute inset-0 z-0 opacity-10">
      <div className="absolute w-40 h-40 sm:w-64 sm:h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob top-10 left-10 sm:left-20"></div>
      <div className="absolute w-40 h-40 sm:w-64 sm:h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 top-0 right-10 sm:right-20"></div>
      <div className="absolute w-40 h-40 sm:w-64 sm:h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 bottom-10 left-1/2 sm:left-60"></div>
    </div>
    
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-12 relative z-10 py-16 md:py-20 mt-10">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 text-center md:text-left space-y-6"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
          Hi, I’m <span className="text-teal-400 block sm:inline mt-2 sm:mt-0">Nang Myat Mary Htun</span>
        </h1>
        {/* Updated & Cleaned up Subtitle */}
        <p className="text-base md:text-lg text-gray-300 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
          Full-Stack Web Developer passionate about building robust, scalable, and intuitive digital experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/Icyln"
            target="_blank"
            className="px-6 py-3 bg-teal-500 text-gray-900 font-bold rounded-full shadow-lg hover:bg-teal-400 transition-all text-center text-[15px] sm:text-lg"
          >
            View Projects on GitHub
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="Nang Myat Mary Htun - Web Dev.pdf"
            download
            className="px-6 py-3 border-2 border-gray-400 text-gray-200 font-semibold rounded-full shadow-lg hover:bg-gray-700 hover:border-teal-400 transition-all text-center text-[15px] sm:text-lg"
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
// Note: Background alternate to bg-gray-800
const AboutEducation = () => (
  <AnimatedSection id="about" className="py-16 md:py-24 bg-gray-800 text-gray-200">
    <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start max-w-7xl">
      {/* About Me */}
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-6 border-b-2 border-gray-700 pb-3">About Me</h2>
        <p className="text-base md:text-lg leading-relaxed text-justify text-gray-300">
          Hi, I’m <span className="font-semibold text-teal-300">Nang Myat Mary Htun</span>, an aspiring web
          developer passionate about building clean, modern, and interactive web applications. My learning journey at
          Lithan Academy and University of Roehampton has equipped me with strong skills in full-stack development. 
          Through hands-on projects, I have honed my problem-solving and technical
          abilities.
        </p>
        <p className="text-base md:text-lg leading-relaxed text-justify text-gray-300">
          My goal is to contribute to impactful real-user products. I am eager
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
            className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 transition-all duration-300 cursor-pointer"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-white">Pearson Level 3 Foundation Diploma</h3>
            <p className="text-teal-300 mt-1">Lithan Academy (Singapore)</p>
            <p className="text-gray-400 text-sm">2023 - 2024</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02, backgroundColor: "#1f2937" }}
            className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 transition-all duration-300 cursor-pointer"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-white">Pearson Level 5 Higher National Diploma in Computing</h3>
            <p className="text-teal-300 mt-1">Lithan Academy (Singapore)</p>
            <p className="text-gray-400 text-sm">2024 - 2025</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02, backgroundColor: "#1f2937" }}
            className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 transition-all duration-300 cursor-pointer"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-white">Bachelor of Science in Computing</h3>
            <p className="text-teal-300 mt-1">University of Roehampton (London)</p>
            <p className="text-gray-400 text-sm">2025 - 2026</p>
          </motion.div>
        </div>
      </div>
    </div>
  </AnimatedSection>
);

// --- Skills Section ---
// Note: Background alternate to bg-gray-900
const Skills = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Python", icon: <FaPython /> },
        { name: "Django", icon: <SiDjango /> },
        { name: "FastAPI", icon: <SiFastapi /> },
        { name: "REST APIs", icon: <FaDatabase /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MySQL", icon: <SiMysql /> },
      ],
    },
    {
      title: "Tools & Cloud",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Microsoft Azure", icon: <FaMicrosoft /> },
      ],
    },
  ];

  // Gets the skills array for the currently active tab
  const activeSkills = skillCategories.find((cat) => cat.title === activeTab)?.skills || [];

  return (
    <AnimatedSection
      id="skills"
      className="w-full py-16 md:py-24 px-4 sm:px-6 bg-gray-900 text-gray-200 min-h-[500px]"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-400 mb-10">
          Technical Skills
        </h2>

        {/* Custom Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.title}
              onClick={() => setActiveTab(category.title)}
              className={`px-6 py-2.5 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 border ${
                activeTab === category.title
                  ? "bg-teal-500 text-gray-900 border-teal-500 shadow-[0_0_15px_rgba(20,184,166,0.3)]"
                  : "bg-gray-800 text-gray-400 border-gray-700 hover:text-teal-400 hover:border-teal-400/50"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Tab Content Area (Cards) */}
        {/* flex-wrap & max-w controls width to elegantly enforce max 3 per row visually */}
        <motion.div
          key={activeTab} // Using the activeTab as key triggers the animation on change
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto"
        >
          {activeSkills.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ y: -8, scale: 1.05 }}
              className="bg-gray-800 border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center gap-4 shadow-lg hover:border-teal-400 transition-all duration-300 w-[140px] sm:w-[160px] md:w-[200px]"
            >
              <div className="text-5xl text-teal-400">
                {skill.icon}
              </div>
              <p className="text-white text-sm font-medium text-center">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

// --- Projects Section ---
// Note: Background alternate to bg-gray-800
const projectsData = [
  {
    title: "Radar",
    description: "Automated job discovery and tracking platform that crawls major ATS boards, matches listings to user profiles, and sends alerts via Telegram and a web dashboard.",
    image: "radar.png",
    link: "https://radar-nu-eight.vercel.app/",
    tags: ["Next.js", "React", "TypeScript", "FastAPI", "Python", "PostgreSQL", "Telegram Bot API", "ATS Collectors"],
  },
  {
    title: "Lumina",
    description: "Integrated Bible reading and productivity platform that tracks daily study habits, aligns progress with structured reading plans, and delivers motivational support.",
    image: "lumina.png",
    link: "https://lumina-orpin-five.vercel.app/",
    tags: ["Next.js", "TypeScript", "React", "Node.js", "PostgreSQL", "Prisma ORM", "Bible API Integration"],
  },
  {
    title: "CareerLens (Final Year Project)",
    description: "AI-powered career intelligence platform that evaluates CVs against ATS criteria, tailors application materials to specific roles, and manages end-to-end job tracking.",
    image: "careerlens.png",
    link: "https://career-lens-app.vercel.app/",
    tags: ["React", "Tailwind CSS", "Django", "Python", "MySQL", "Google Gemini API", "jSearch API"],
  }
];

const ProjectCard = ({ title, description, image, link, tags }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.02, boxShadow: "0 10px 20px rgba(0,0,0,0.4)" }}
    className="bg-gray-900 shadow-xl rounded-lg overflow-hidden flex flex-col cursor-pointer border border-gray-700 hover:border-teal-500 transition-all duration-300 h-full"
  >
    <div className="relative overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full aspect-video object-cover transition-transform duration-500 hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-400 hover:text-teal-300 font-bold text-lg flex items-center gap-2"
        >
          View Project 
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
  <AnimatedSection id="projects" className="w-full py-16 md:py-24 px-4 sm:px-6 bg-gray-800 text-gray-200">
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
// Note: Background alternate to bg-gray-900
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
      const response = await fetch("https://formspree.io/f/xvgbdbkl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatedSection id="contact" className="w-full py-16 md:py-24 px-4 sm:px-6 bg-gray-900 text-gray-200">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-teal-400">Get In Touch</h2>
        <p className="text-base md:text-lg text-gray-300 mb-10 md:mb-14 max-w-2xl mx-auto">
          I'm currently open to internship and job opportunities. Feel free to connect with me!
        </p>

        {/* Status Message */}
        {submitStatus === "success" && (
          <div className="mb-6 max-w-4xl mx-auto p-4 bg-teal-900/30 border border-teal-700 rounded-lg text-teal-300">
            Thank you for your message! I'll get back to you soon.
          </div>
        )}
        {submitStatus === "error" && (
          <div className="mb-6 max-w-4xl mx-auto p-4 bg-red-900/30 border border-red-700 rounded-lg text-red-300">
            Oops! Something went wrong. Please try again later.
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch max-w-4xl mx-auto text-left">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 bg-gray-800 p-6 md:p-8 rounded-xl shadow-xl border border-gray-700"
          >
            <h3 className="text-2xl font-semibold text-white mb-6 border-b border-gray-700 pb-3">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                  placeholder="How can I help you?"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className={`w-full bg-teal-500 hover:bg-teal-400 text-gray-900 font-bold py-3 px-6 rounded-lg focus:outline-none transition-colors text-[15px] mt-2 ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Sending Message..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>

          {/* Compact & Professional 'Find Me Here' Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 bg-gray-800 p-6 md:p-8 rounded-xl shadow-xl border border-gray-700 flex flex-col h-full"
          >
            <h3 className="text-2xl font-semibold text-white mb-6 border-b border-gray-700 pb-3">
              Contact Info
            </h3>
            
            <div className="flex flex-col gap-6 justify-center flex-grow">
              
              <a
                href="mailto:mayyihtun0@gmail.com"
                className="flex items-center gap-4 text-gray-300 hover:text-teal-400 transition-colors group"
              >
                <div className="bg-gray-900 p-3 rounded-lg group-hover:bg-teal-500/10 transition-colors">
                  <FaEnvelope className="text-teal-400 text-xl" />
                </div>
                <span className="text-sm md:text-base font-medium break-all">mayyihtun0@gmail.com</span>
              </a>

              <a
                href="https://www.linkedin.com/in/myatmaryhtun"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-teal-400 transition-colors group"
              >
                <div className="bg-gray-900 p-3 rounded-lg group-hover:bg-teal-500/10 transition-colors">
                  <FaLinkedin className="text-teal-400 text-xl" />
                </div>
                <span className="text-sm md:text-base font-medium">LinkedIn Profile</span>
              </a>

              <a
                href="https://github.com/Icyln"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-teal-400 transition-colors group"
              >
                <div className="bg-gray-900 p-3 rounded-lg group-hover:bg-teal-500/10 transition-colors">
                  <FaGithub className="text-teal-400 text-xl" />
                </div>
                <span className="text-sm md:text-base font-medium">GitHub Profile</span>
              </a>

              <a
                href="tel:+959444472964"
                className="flex items-center gap-4 text-gray-300 hover:text-teal-400 transition-colors group"
              >
                <div className="bg-gray-900 p-3 rounded-lg group-hover:bg-teal-500/10 transition-colors">
                  <FaPhone className="text-teal-400 text-xl" />
                </div>
                <span className="text-sm md:text-base font-medium">+95 944 447 2964</span>
              </a>

              <div className="flex items-center gap-4 text-gray-300">
                <div className="bg-gray-900 p-3 rounded-lg">
                  <FaMapMarkerAlt className="text-teal-400 text-xl" />
                </div>
                <span className="text-sm md:text-base font-medium">Taunggyi, Myanmar</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </AnimatedSection>
  );
};


// --- Main App ---
export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans antialiased pb-12">
      <Navbar />
      <main>
        <Hero />
        <AboutEducation />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}