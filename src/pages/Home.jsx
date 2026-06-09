import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight, Code, Terminal, Network, Cpu, Brain, Laptop,
  Briefcase, Calendar, MapPin, ExternalLink, Target, Zap,
  Mail, Phone, Award, GraduationCap, ChevronRight, CheckCircle2,
  Database, ShieldCheck, Heart, User, ChevronDown
} from 'lucide-react';

// 3D Tilt Card Component
const TiltCard = ({ children, style = {}, className = "" }) => {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowX, setGlowX] = useState(0);
  const [glowY, setGlowY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Smooth tilt angles
    const rX = -(mouseY / (height / 2)) * 10;
    const rY = (mouseX / (width / 2)) * 10;
    setRotateX(rX);
    setRotateY(rY);

    // Glow position
    setGlowX(e.clientX - rect.left);
    setGlowY(e.clientY - rect.top);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
        transformPerspective: 1000
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`glass-panel ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        ...style
      }}
    >
      {/* Dynamic Glow Spotlight */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(350px circle at ${glowX}px ${glowY}px, rgba(249, 115, 22, 0.12), transparent 80%)`,
          borderRadius: 'inherit',
          pointerEvents: 'none',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.5s ease',
          zIndex: 1
        }}
      />
      <div style={{ position: 'relative', zIndex: 2, height: '100%' }}>
        {children}
      </div>
    </motion.div>
  );
};

// Hero Section
const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section
      ref={containerRef}
      style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '120px',
        display: 'flex',
        alignItems: 'center',
        background: 'radial-gradient(circle at 50% 50%, rgba(249, 115, 22, 0.08) 0%, transparent 60%), radial-gradient(circle at 10% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)'
      }}
    >
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', justifyContent: 'center', zIndex: 2, margin: '0 auto', maxWidth: '800px' }}>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}
        >
          <h1 style={{
            fontSize: 'max(3.5rem, 5vw)',
            fontWeight: '800',
            lineHeight: '1.1',
            letterSpacing: '-1.5px',
            fontFamily: 'var(--font-accent)'
          }}>
            SANDESH <br />
            <span className="gradient-text">POKHARKAR</span>
          </h1>

          <h2 style={{
            fontSize: 'max(1.8rem, 2.5vw)',
            fontWeight: '600',
            color: 'var(--text-primary)',
            opacity: 0.95
          }}>
            Full Stack Developer
          </h2>

          <p style={{
            fontSize: '1.15rem',
            color: 'var(--text-secondary)',
            lineHeight: '1.8',
            maxWidth: '600px'
          }}>
            I am a highly motivated developer and B.Sc. IT student with a strong passion for designing, coding, and optimizing end-to-end web architectures.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)' }}>
            <MapPin size={18} color="var(--accent-color)" />
            <span style={{ fontSize: '0.95rem', fontWeight: '500' }}>Dombivli West, Maharashtra, India</span>
          </div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '16px', justifyContent: 'center' }}>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: 'linear-gradient(135deg, var(--accent-color) 0%, #ea580c 100%)',
                color: 'white',
                padding: '16px 32px',
                borderRadius: '16px',
                fontSize: '0.95rem',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 10px 20px -10px rgba(249, 115, 22, 0.4)'
              }}
            >
              Explore Projects <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, borderColor: 'var(--text-primary)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                color: 'white',
                padding: '16px 32px',
                borderRadius: '16px',
                fontSize: '0.95rem',
                fontWeight: '700',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              Contact Details
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

// About / Education Section (with interactive tabs)
const About = () => {
  const [activeTab, setActiveTab] = useState('summary');

  const profileHighlights = [
    "Developed and deployed multiple live web applications on Vercel.",
    "Completed a professional, hands-on web development internship.",
    "Strong attention to clean architecture, MVC design patterns, and Git workflows.",
    "B.Sc. in IT student with an academic record of 8.50 CGPA at Mumbai University."
  ];

  const education = [
    {
      degree: "B.Sc. in Information Technology",
      institution: "University of Mumbai",
      status: "Completed / Year 2026",
      score: "CGPA: 8.50",
      details: "Focused on Software Engineering, Database Systems, Web Architectures, and Object-Oriented Development."
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Maharashtra State Board",
      status: "Completed / Year 2023",
      score: "76.33%",
      details: "Specialized in Science streams, including Core Mathematics, Physics, and IT concepts."
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Maharashtra State Board",
      status: "Completed / Year 2021",
      score: "75.80%",
      details: "Completed core foundational schooling with a strong academic output."
    }
  ];

  const softSkills = [
    "Problem Solving & Analytical Thinking",
    "Team Collaboration & Agile Working",
    "Technical Presentation & Communication",
    "Task & Project Management",
    "Leadership & Task Allocation"
  ];

  return (
    <section id="about" style={{ padding: '100px 0', background: 'var(--bg-secondary)' }}>
      <div className="container">

        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', fontFamily: 'var(--font-accent)' }}>
            About <span className="gradient-text">Me</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '8px', fontSize: '1rem' }}>
            Who I am, my academic track, and my foundational goals
          </p>
        </div>

        {/* Content Box */}
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>

          {/* Tabbed Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', maxWidth: '800px' }}>

            {/* Tabs */}
            <div style={{
              display: 'flex',
              background: 'rgba(255, 255, 255, 0.02)',
              padding: '6px',
              borderRadius: '16px',
              border: '1px solid var(--border-color)',
              gap: '8px'
            }}>
              {['summary', 'education', 'skills'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    flex: 1,
                    padding: '12px',
                    borderRadius: '12px',
                    fontSize: '0.9rem',
                    fontWeight: '700',
                    textTransform: 'capitalize',
                    background: activeTab === tab ? 'var(--accent-color)' : 'transparent',
                    color: activeTab === tab ? 'white' : 'var(--text-secondary)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {tab === 'skills' ? 'Soft Skills' : tab}
                </button>
              ))}
            </div>

            {/* Tab content wrapper */}
            <div style={{ minHeight: '280px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

              {/* Tab: Summary */}
              {activeTab === 'summary' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                >
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '700' }}>Professional Journey</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                    Motivated Full Stack Developer and B.Sc. IT student with hands-on experience in designing, developing, and deploying responsive web applications. Skilled in frontend-backend integration, REST APIs, and database management. Passionate about clean code architecture, scalable development, and performance optimization.
                  </p>

                  {/* Highlights checklist */}
                  <div style={{ display: 'grid', gap: '12px' }}>
                    {profileHighlights.map((highlight, index) => (
                      <div key={index} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                        <CheckCircle2 size={16} color="var(--accent-color)" style={{ marginTop: '4px', flexShrink: 0 }} />
                        <span style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Tab: Education */}
              {activeTab === 'education' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {education.map((item, index) => (
                      <div key={index} style={{
                        background: 'rgba(255,255,255,0.02)',
                        padding: '16px',
                        borderRadius: '16px',
                        border: '1px solid rgba(255,255,255,0.04)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px'
                      }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                          <h4 style={{ fontWeight: '700', fontSize: '1.05rem', color: 'white' }}>{item.degree}</h4>
                          <span style={{
                            background: 'rgba(59, 130, 246, 0.1)',
                            color: 'var(--accent-secondary)',
                            padding: '2px 8px',
                            borderRadius: '6px',
                            fontSize: '0.75rem',
                            fontWeight: '700'
                          }}>{item.score}</span>
                        </div>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>yes {item.institution} &bull; <span style={{ color: 'var(--accent-color)' }}>{item.status}</span></p>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', opacity: 0.8 }}>{item.details}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Tab: Soft Skills */}
              {activeTab === 'skills' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                >
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '700' }}>Collaborative Competence</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                    Beyond writeups and repositories, I focus on project management, team synergy, and modern software development cycles.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                    {softSkills.map((skill, index) => (
                      <div key={index} style={{
                        background: 'rgba(255,255,255,0.02)',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        border: '1px solid rgba(255,255,255,0.04)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                      }}>
                        <Award size={16} color="var(--accent-color)" />
                        <span style={{ fontSize: '0.9rem', color: 'white', fontWeight: '500' }}>{skill}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

// Skills Section (Grid of 3D tilt cards)
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Laptop,
      skills: ["React.js", "Angular", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "Responsive Web Design"]
    },
    {
      title: "Backend Development",
      icon: Terminal,
      skills: ["Node.js", "Express.js", "PHP", "ASP.NET", "RESTful API Dev", "Auth & Token Systems"]
    },
    {
      title: "Databases & Storage",
      icon: Database,
      skills: ["MongoDB", "MySQL", "SQL Server"]
    },
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C#", "JavaScript", "Python", "PHP", "C", "C++"]
    },
    {
      title: "Tools & Cloud Platforms",
      icon: Cpu,
      skills: ["Git", "GitHub", "Vercel", "Netlify", "WordPress", "Antigravity IDE", "VS Code", "Cursor AI", "cPanel"]
    },
    {
      title: "Methodologies & Specialities",
      icon: Brain,
      skills: ["MERN Stack", "MVC Architecture", "OOP / Data Structures", "API Integration", "UI/UX & Speed Optimizations"]
    }
  ];

  return (
    <section id="skills" style={{ padding: '100px 0' }}>
      <div className="container">

        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', fontFamily: 'var(--font-accent)' }}>
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '8px', fontSize: '1rem' }}>
            My full-stack toolkit and developer specifications
          </p>
        </div>

        {/* Grid of Categories */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '30px' }}>
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <TiltCard key={idx} style={{ padding: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                  <div style={{
                    background: 'rgba(249, 115, 22, 0.1)',
                    color: 'var(--accent-color)',
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'white' }}>{cat.title}</h3>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        color: 'var(--text-secondary)',
                        padding: '6px 12px',
                        borderRadius: '8px',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.borderColor = 'var(--accent-color)';
                        e.target.style.color = 'white';
                        e.target.style.background = 'rgba(249, 115, 22, 0.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                        e.target.style.color = 'var(--text-secondary)';
                        e.target.style.background = 'rgba(255, 255, 255, 0.03)';
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </TiltCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};

// Experience Timeline Section
const Experience = () => {
  const experiences = [
    {
      role: "Web Development Intern",
      company: "Kryoss Softech Private Limited",
      duration: "April 2025 – April 2026",
      location: "Dombivli West, India",
      details: [
        "Developed responsive and user-friendly web applications using React.js, Express, and node environments.",
        "Integrated secure RESTful APIs and database schemas (MongoDB, MySQL) to support high-performance user features.",
        "Implemented clean, modular, and maintainable frontend architectures following MVC guidelines.",
        "Performed debugging, browser testing, speed auditing, and SEO optimizations to scale application loads.",
        "Worked in close team environments leveraging Git version controls and Agile scrum pipelines."
      ]
    }
  ];

  return (
    <section id="experience" style={{ padding: '100px 0', background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">

        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', fontFamily: 'var(--font-accent)' }}>
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '8px', fontSize: '1rem' }}>
            Professional developer internship history
          </p>
        </div>

        {/* Timeline Layout */}
        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>

          {/* Vertical central line */}
          <div style={{
            position: 'absolute',
            left: '20px',
            top: '0',
            bottom: '0',
            width: '2px',
            background: 'linear-gradient(to bottom, var(--accent-color) 0%, var(--accent-secondary) 100%)'
          }} />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                position: 'relative',
                paddingLeft: '50px',
                marginBottom: '40px'
              }}
            >
              {/* Pin indicator */}
              <div style={{
                position: 'absolute',
                left: '11px',
                top: '6px',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: 'var(--bg-secondary)',
                border: '3px solid var(--accent-color)',
                boxShadow: '0 0 10px var(--accent-color)',
                zIndex: 3
              }} />

              {/* Experience Box */}
              <TiltCard style={{ padding: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
                  <div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: 'white' }}>{exp.role}</h3>
                    <p style={{ color: 'var(--accent-color)', fontWeight: '700', fontSize: '0.95rem', marginTop: '4px' }}>
                      {exp.company}
                    </p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '600' }}>
                      <Calendar size={14} color="var(--accent-secondary)" />
                      {exp.duration}
                    </span>
                    <span style={{ marginTop: '4px' }}>{exp.location}</span>
                  </div>
                </div>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingLeft: '16px', color: 'var(--text-secondary)' }}>
                  {exp.details.map((bullet, bIdx) => (
                    <li key={bIdx} style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

// Projects Section
const Projects = () => {
  const projects = [
    {
      title: "Kryoss Interior",
      desc: "A responsive, high-end web platform showcasing premium interior design profiles, spatial layouts, and portfolio aesthetics.",
      link: "https://kryoss-interior.vercel.app",
      tags: []
    },
    {
      title: "Universal Studio",
      desc: "A fully integrated web workspace containing document manipulation utilities, photo/video layout editors, and conversion tools.",
      link: "https://universalstudio-one.vercel.app",
      tags: []
    },
    {
      title: "VyomBiz",
      desc: "A corporate digital portal built to organize business intelligence pipelines, user client relations, and operational tools.",
      link: "https://vyombiz-three.vercel.app/",
      tags: []
    },
    {
      title: "C-Link HR",
      desc: "A robust HR suite facilitating modern hiring pipelines, candidate interview tracking, payroll records, and employee accounts.",
      link: "https://clink-hr-2.vercel.app",
      tags: []
    },
    {
      title: "Kryoss-Work",
      desc: "A real-time workspace task manager showing project assignments, logs, ticket status boards, and team tracking components.",
      link: "https://kryoss-work.vercel.app/",
      tags: []
    }
  ];

  return (
    <section id="projects" style={{ padding: '100px 0' }}>
      <div className="container">

        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', fontFamily: 'var(--font-accent)' }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '8px', fontSize: '1rem' }}>
            Click on the external link icons to visit the live vercel deployments
          </p>
        </div>

        {/* Project Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {projects.map((proj, idx) => (
            <TiltCard key={idx} style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '32px' }}>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'white' }}>{proj.title}</h3>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--border-color)',
                      width: '40px',
                      height: '40px',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-color)'
                    }}
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                  {proj.desc}
                </p>
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '24px' }}>
                {proj.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      background: 'rgba(59, 130, 246, 0.1)',
                      color: 'var(--accent-secondary)',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      border: '1px solid rgba(59, 130, 246, 0.2)'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormState({ name: '', email: '', subject: '', message: '' });
      }, 4000);
    }
  };

  return (
    <section id="contact" style={{ padding: '100px 0', background: 'var(--bg-secondary)' }}>
      <div className="container">

        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', fontFamily: 'var(--font-accent)' }}>
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '8px', fontSize: '1rem' }}>
            Reach out via form or use direct communication details
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'start' }}>

          {/* Left: Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>

            <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: 'white' }}>Let's work together!</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8' }}>
              I am open to internships, projects, and junior full-stack developer roles. If you have any inquiries, proposals, or just want to connect, feel free to contact me.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

              {/* Phone */}
              <a href="tel:+919152600509" style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="contact-item">
                <div style={{
                  background: 'rgba(249, 115, 22, 0.1)',
                  color: 'var(--accent-color)',
                  width: '50px',
                  height: '50px',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Phone size={20} />
                </div>
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Phone / WhatsApp</p>
                  <p style={{ fontSize: '1rem', color: 'white', fontWeight: '700' }}>+91 91526 00509</p>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:sandeshpokharkar5248@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="contact-item">
                <div style={{
                  background: 'rgba(59, 130, 246, 0.1)',
                  color: 'var(--accent-secondary)',
                  width: '50px',
                  height: '50px',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Mail size={20} />
                </div>
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Email Address</p>
                  <p style={{ fontSize: '1rem', color: 'white', fontWeight: '700' }}>sandeshpokharkar5248@gmail.com</p>
                </div>
              </a>

              {/* Location */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-color)',
                  width: '50px',
                  height: '50px',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)'
                }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Address Coordinates</p>
                  <p style={{ fontSize: '1rem', color: 'white', fontWeight: '700' }}>Dombivli West, Maharashtra, India</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Contact Form */}
          <TiltCard style={{ padding: '40px' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: '700', color: 'white' }}>Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: '700', color: 'white' }}>Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: '700', color: 'white' }}>Subject</label>
                <input
                  type="text"
                  placeholder="Freelance Project / Hiring"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: '700', color: 'white' }}>Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Let's build something amazing together..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                style={{
                  background: 'linear-gradient(135deg, var(--accent-color) 0%, #ea580c 100%)',
                  color: 'white',
                  padding: '16px',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  fontWeight: '700',
                  marginTop: '8px',
                  boxShadow: '0 8px 16px -8px rgba(249, 115, 22, 0.4)'
                }}
              >
                Send Message
              </motion.button>
            </form>

            {/* Success Overlay Popup */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(3, 7, 18, 0.95)',
                  backdropFilter: 'blur(8px)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '16px',
                  padding: '24px',
                  textAlign: 'center',
                  borderRadius: 'inherit',
                  zIndex: 10
                }}
              >
                <motion.div
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 10 }}
                  style={{
                    background: 'rgba(249, 115, 22, 0.1)',
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-color)'
                  }}
                >
                  <CheckCircle2 size={32} />
                </motion.div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'white' }}>Message Sent Successfully!</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '6px' }}>
                    Thank you for reaching out, Sandesh will get back to you shortly.
                  </p>
                </div>
              </motion.div>
            )}
          </TiltCard>

        </div>

        {/* Footer info */}
        <div style={{ marginTop: '20px', borderTop: '1px solid var(--border-color)', paddingTop: '10px', textAlign: 'center' }}>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            © 2026 Sandesh Pokharkar. All rights reserved.
          </p>
        </div>

      </div>

      {/* Visual touch-up styles for contact link transitions */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .contact-item:hover p:last-child {
          color: var(--accent-color) !important;
          transition: color 0.3s ease;
        }
      `}} />
    </section>
  );
};

// Home Main Orchestrator
const Home = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
