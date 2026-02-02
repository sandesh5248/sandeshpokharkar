import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Terminal, Network, Cpu, Brain, Laptop, Briefcase, Calendar, MapPin, ExternalLink, Target, Zap, Eye, Quote } from 'lucide-react';
import profileImg from '../assets/profile.png';
import aboutImg from '../assets/about-me.png';

const sectionStyle = {
    padding: '100px 0',
    minHeight: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    scrollMarginTop: '80px'
};

const Hero = () => {
    return (
        <section style={{
            ...sectionStyle,
            minHeight: '100vh',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '80px',
            display: 'flex',
            alignItems: 'center'
        }}>
            {/* Background Gradient */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                right: '-10%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
                filter: 'blur(80px)',
                opacity: 0.6,
                zIndex: -1
            }} />

            <div className="container" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '40px',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ flex: '1', minWidth: '320px', textAlign: 'left', paddingLeft: '10%' }}
                >
                    <span style={{
                        color: 'var(--accent-color)',
                        fontWeight: '600',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        fontSize: '1rem',
                        marginBottom: '20px',
                        display: 'block'
                    }}>
                        Sandesh Pokharkar
                    </span>
                    <h1 style={{
                        fontSize: 'max(3rem, 4vw)',
                        fontWeight: '700',
                        lineHeight: '1.2',
                        marginBottom: '30px'
                    }}>
                        Full Stack Developer & <br />
                        <span className="gradient-text">System Admin</span>
                    </h1>
                    <p style={{
                        fontSize: '1.1rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '40px',
                        lineHeight: '1.8',
                        maxWidth: '600px'
                    }}>
                        IT student skilled in development, networking, and system administration.
                        Passionate about building innovative projects and applying technical knowledge in professional environments.
                        <br />
                        <span style={{ fontSize: '1rem', marginTop: '10px', display: 'block', opacity: 0.8 }}>
                            <MapPin size={16} style={{ display: 'inline', marginRight: '5px' }} /> Dombivli West, India
                        </span>
                    </p>

                    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                background: 'var(--accent-color)',
                                color: 'white',
                                padding: '16px 32px',
                                borderRadius: '50px',
                                fontSize: '1rem',
                                fontWeight: '600',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                boxShadow: '0 10px 25px -10px var(--accent-glow)',
                                cursor: 'pointer'
                            }}
                        >
                            View Work <ArrowRight size={18} />
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                background: 'transparent',
                                color: 'white',
                                padding: '16px 32px',
                                borderRadius: '50px',
                                fontSize: '1rem',
                                fontWeight: '600',
                                border: '1px solid var(--border-color)',
                                cursor: 'pointer'
                            }}
                        >
                            Contact Me
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        flex: '1',
                        maxWidth: '450px',
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <div style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
                        filter: 'blur(60px)',
                        zIndex: -1,
                        opacity: 0.3
                    }} />
                    <div style={{
                        width: '100%',
                        maxWidth: '450px',
                        height: '600px',
                        borderRadius: '30px',
                        overflow: 'hidden',
                        position: 'relative',
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border-color)',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <img
                            src={profileImg}
                            alt="Sandesh Pokharkar"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transform: 'scale(1.2)',
                                transformOrigin: 'center 25%',
                                filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.5))'
                            }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const SkillCategory = ({ title, skills, icon: Icon }) => (
    <motion.div
        whileHover={{ y: -5 }}
        style={{
            background: 'var(--bg-secondary)',
            padding: '30px',
            borderRadius: '20px',
            border: '1px solid var(--border-color)',
            height: '100%'
        }}
    >
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            marginBottom: '20px',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            paddingBottom: '15px'
        }}>
            <div style={{
                background: 'rgba(59, 130, 246, 0.1)',
                color: 'var(--accent-color)',
                padding: '10px',
                borderRadius: '10px'
            }}>
                <Icon size={24} />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '600' }}>{title}</h3>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {skills.map((skill, i) => (
                <span key={i} style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    background: 'rgba(255,255,255,0.03)',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    border: '1px solid rgba(255,255,255,0.05)'
                }}>
                    {skill}
                </span>
            ))}
        </div>
    </motion.div>
);

const About = () => {
    return (
        <section id="about" style={{ ...sectionStyle, background: 'var(--bg-primary)', padding: '80px 0' }}>
            <div className="container" style={{ paddingLeft: '2%', paddingRight: '2%', maxWidth: '1600px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{
                        background: 'white',
                        borderRadius: '30px',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                        minHeight: '650px'
                    }}
                >
                    {/* Left Column: Image Area */}
                    <div style={{
                        flex: '1.2',
                        minWidth: '400px',
                        position: 'relative',
                        background: '#000',
                        overflow: 'hidden'
                    }}>
                        <motion.img
                            src={aboutImg}
                            alt="Sandesh Pokharkar"
                            initial={{ filter: 'grayscale(100%)', opacity: 0.8 }}
                            whileHover={{ filter: 'grayscale(0%)', opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center 20%',
                                cursor: 'pointer'
                            }}
                        />
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            padding: '40px',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)',
                            color: 'white'
                        }}>
                            <div style={{ width: '60px', height: '4px', background: 'var(--accent-color)', marginBottom: '15px' }}></div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', margin: 0 }}>Sandesh Pokharkar</h2>
                            <p style={{ fontSize: '1.1rem', opacity: 0.8, marginTop: '5px', textTransform: 'uppercase', letterSpacing: '1px' }}>Full Stack Developer & Sys Admin</p>
                        </div>
                    </div>

                    {/* Right Column: Content Area */}
                    <div style={{
                        flex: '1',
                        minWidth: '350px',
                        padding: '30px 50px',
                        color: '#1a1a1a',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '15px'
                    }}>
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <Quote size={48} color="rgba(249, 115, 22, 0.2)" />
                            <h2 style={{ fontSize: '2.4rem', fontWeight: '800', lineHeight: 1.2, color: '#000' }}>
                                "Perfecting the intersection of <span style={{ color: 'var(--accent-color)' }}>Development</span> and <span style={{ color: 'var(--accent-color)' }}>Infrastructure</span>."
                            </h2>
                        </div>

                        <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: '#374151' }}>
                            Based in Dombivli, Maharashtra, I am an IT student and aspiring professional dedicated to building end-to-end digital solutions.
                            My journey is driven by a deep-seated interest in how robust software meets high-performance infrastructure.
                        </p>

                        <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: '#374151' }}>
                            Currently gaining field experience at **Kryoss Softech**, I specialize in bridging the gap between clean code and
                            secure systems. From crafting responsive web apps to configuring enterprise-grade networks, I focus on the 'how'
                            just as much as the 'why'.
                        </p>

                        {/* My Core Mission Box */}
                        <div style={{
                            background: '#f8fafc',
                            padding: '20px',
                            borderRadius: '20px',
                            position: 'relative',
                            overflow: 'hidden',
                            border: '1px solid #e2e8f0'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <Target size={24} color="var(--accent-color)" />
                                <h3 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#000' }}>My Core Mission</h3>
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <li style={{ display: 'flex', gap: '12px', alignItems: 'start', color: '#374151', fontSize: '1.1rem' }}>
                                    <span style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>•</span>
                                    Delivering seamless full-stack applications that prioritize user experience.
                                </li>
                                <li style={{ display: 'flex', gap: '12px', alignItems: 'start', color: '#374151', fontSize: '1.1rem' }}>
                                    <span style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>•</span>
                                    Building reliable, secure, and scalable system architectures from the ground up.
                                </li>
                                <li style={{ display: 'flex', gap: '12px', alignItems: 'start', color: '#374151', fontSize: '1.1rem' }}>
                                    <span style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>•</span>
                                    Leveraging IoT and automation to create smarter, more efficient hardware systems.
                                </li>
                                <li style={{ display: 'flex', gap: '12px', alignItems: 'start', color: '#374151', fontSize: '1.1rem' }}>
                                    <span style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>•</span>
                                    Developing comprehensive projects from scratch, handling everything from concept to delivery.
                                </li>
                            </ul>
                            {/* Decorative Circles */}
                            <div style={{ position: 'absolute', right: '-20px', bottom: '-20px', width: '100px', height: '100px', border: '2px solid rgba(249, 115, 22, 0.05)', borderRadius: '50%' }}></div>
                        </div>

                        {/* Two Sub-sections */}
                        <div style={{ display: 'flex', gap: '40px', marginTop: '10px' }}>
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                    <Zap size={20} color="var(--accent-color)" />
                                    <h4 style={{ fontWeight: '700', color: '#000', fontSize: '1.2rem' }}>Full-Stack Mastery</h4>
                                </div>
                                <p style={{ fontSize: '1.05rem', color: '#374151', lineHeight: 1.6 }}>
                                    I craft robust frontends and backends that ensure fluid performance and intuitive interactivity.
                                </p>
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                    <Terminal size={20} color="var(--accent-color)" />
                                    <h4 style={{ fontWeight: '700', color: '#000', fontSize: '1.2rem' }}>System Reliability</h4>
                                </div>
                                <p style={{ fontSize: '1.05rem', color: '#374151', lineHeight: 1.6 }}>
                                    I optimize server environments and networking setups to ensure 99.9% uptime and security.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginTop: 'auto', borderTop: '1px solid #e2e8f0', paddingTop: '15px' }}>
                            <p style={{ fontStyle: 'italic', color: '#111', fontSize: '1.3rem', lineHeight: 1.6, fontWeight: '500' }}>
                                "I don't just write code; I architect the technical foundations that allow digital innovation to flourish."
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const Skills = () => {
    const categories = [
        {
            title: "Programming / Web",
            icon: Code,
            skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Angular", "MERN Stack", "ASP.NET", "PHP", "MySQL", "MongoDB", "Python", "C", "C++", "Java"]
        },
        {
            title: "System Admin",
            icon: Terminal,
            skills: ["User/Group Mgmt", "Permissions & ACLs", "LVM", "File Systems", "RPM/YUM", "SSH", "Cron", "rsyslog", "iptables", "SSL/GPG", "GRUB"]
        },
        {
            title: "Networking",
            icon: Network,
            skills: ["DHCP", "DNS (BIND)", "Routing (Static/RIP)", "LAN Setup", "FTP", "NFS", "Samba", "VMware Networking"]
        },
        {
            title: "IoT & Embedded",
            icon: Cpu,
            skills: ["Arduino", "ESP32", "Raspberry Pi", "Sensors", "Motors", "IoT-App Integration"]
        },
        {
            title: "Artificial Intelligence",
            icon: Brain,
            skills: ["Search Algorithms (BFS, DFS, A*)", "Prolog", "ML Basics", "Generative AI"]
        },
        {
            title: "Tools",
            icon: Laptop,
            skills: ["GitHub", "VS Code", "Visual Studio", "Android Studio", "VMware", "Linux Terminal", "Canva"]
        }
    ];

    return (
        <section id="skills" style={{ ...sectionStyle }}>
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '50px', textAlign: 'center' }}>Technical <span className="gradient-text">Proficiency</span></h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
                    {categories.map((cat, i) => (
                        <SkillCategory key={i} {...cat} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ExperienceCard = ({ role, duration, type, details, isLeft, link }) => (
    <div style={{
        display: 'flex',
        marginBottom: '40px',
        justifyContent: isLeft ? 'flex-start' : 'flex-end',
        position: 'relative'
    }}>
        <motion.div
            whileHover={{ scale: 1.02 }}
            style={{
                width: '100%',
                maxWidth: '800px',
                margin: '0 auto',
                background: 'var(--bg-secondary)',
                padding: '30px',
                borderRadius: '16px',
                border: '1px solid var(--border-color)',
                position: 'relative'
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '15px' }}>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)' }}>{role}</h3>
                        {link && (
                            <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)' }}>
                                <ExternalLink size={18} />
                            </a>
                        )}
                    </div>
                    <span style={{ fontSize: '1rem', color: 'var(--accent-color)', fontWeight: '500' }}>{type}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    <Calendar size={16} />
                    <span>{duration}</span>
                </div>
            </div>
            <ul style={{ paddingLeft: '20px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                {details.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
            </ul>
        </motion.div>
    </div>
);

const Experience = () => {
    return (
        <section id="experience" style={{ ...sectionStyle, background: 'var(--bg-secondary)' }}>
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '60px', textAlign: 'center' }}>Experience & <span className="gradient-text">Achievements</span></h2>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <ExperienceCard
                        role="Software Developer Intern"
                        type="Kryoss Softech Pvt Ltd"
                        duration="Ongoing (3 Months)"
                        link="https://kryosssoftech.org/"
                        details={[
                            "Kryoss Softech is a leading Web and Mobile App Development company that transforms ideas into scalable digital reality.",
                            "Gaining hands-on experience in building high-performance iOS and Android applications tailoring to business growth.",
                            "Focusing on delivering clean architecture, robust networking, and user-focused solutions across custom software and CRM/CMS platforms.",
                            "Collaborating with senior engineers to implement advanced features and ensuring seamless product execution."
                        ]}
                    />
                    <ExperienceCard
                        role="Web Developer Intern"
                        type="The Skill Guru"
                        duration="4 Months (Completed)"
                        link="https://theskillguru.org/"
                        details={[
                            "The Skill Guru is a dynamic platform providing comprehensive learning resources and skill development programs for students and professionals.",
                            "Completed an intensive 4-month internship focusing on full-stack web development and responsive UI design.",
                            "Gained practical experience in designing and deploying web applications using modern frameworks.",
                            "Collaborated effectively with senior developers to implement high-performance and interactive UI components."
                        ]}
                    />
                    <ExperienceCard
                        role="Event Organizer"
                        type="Blind Typing Competition"
                        duration="Event"
                        details={[
                            "Organized a technical event and developed a custom website for participant registration and info.",
                            "Managed event logistics and ensured smooth execution of the competition.",
                            "Demonstrated leadership and organizational skills in a high-pressure environment."
                        ]}
                    />
                    <ExperienceCard
                        role="Key Achievements"
                        type=""
                        duration="Ongoing"
                        details={[
                            "Developed Universal Studio, a versatile digital suite for document management and media editing.",
                            "Built a complete IoT Smart Attendance System integrating hardware and mobile software.",
                            "Proficient in system administration tasks including DHCP, DNS, and Linux security.",
                            "Developed robust networking setups involving Routing and LAN configurations."
                        ]}
                    />
                </div>
            </div>
        </section>
    );
};

const ProjectCard = ({ title, desc, link, tags }) => (
    <motion.div
        whileHover={{ y: -10 }}
        style={{
            background: 'var(--bg-primary)',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid var(--border-color)',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
        }}
    >
        <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '15px' }}>
                <h3 style={{ fontSize: '1.4rem' }}>{title}</h3>
                {link && <a href={link} style={{ color: 'var(--accent-color)' }}><ExternalLink size={20} /></a>}
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '25px', flex: 1, fontSize: '1rem', lineHeight: '1.6' }}>{desc}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {tags.map(tag => (
                    <span key={tag} style={{
                        fontSize: '0.8rem',
                        background: 'rgba(59, 130, 246, 0.1)',
                        padding: '6px 14px',
                        borderRadius: '20px',
                        color: 'var(--accent-color)',
                        border: '1px solid rgba(59, 130, 246, 0.2)'
                    }}>
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    const projects = [
        {
            title: "Universal Studio",
            desc: "A comprehensive Digital Creative Suite featuring PDF management tools, advanced Photo and Video editors, and AI-powered media enhancement capabilities.",
            tags: ["React", "AI Enhancement", "PDF Tools", "Media Editing"],
            link: "https://universal-studio-nine.vercel.app/"
        },
        {
            title: "Smart Attendance System",
            desc: "An innovative IoT-based solution integrating mobile applications with hardware sensors to automate attendance tracking efficiently.",
            tags: ["IoT", "Mobile App", "Sensors", "Database"],
            link: "#"
        },
        {
            title: "Blind Typing Event Website",
            desc: "A custom-built website for managing registrations and information for a technical typing competition event.",
            tags: ["Web Dev", "Event Mgmt", "UI/UX"],
            link: "#"
        },
        {
            title: "IoT Mini Projects",
            desc: "A collection of various IoT experiments using Arduino and ESP32, demonstrating control over motors, sensors, and wireless communication.",
            tags: ["Arduino", "ESP32", "Hardware"],
            link: "#"
        },
        {
            title: "Android & IoT Apps",
            desc: "Development of mobile interfaces to interact with IoT devices, enabling remote monitoring and control capabilities.",
            tags: ["Android", "Java/Kotlin", "IoT"],
            link: "#"
        }
    ];

    return (
        <section id="projects" style={{ ...sectionStyle }}>
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '50px', textAlign: 'center' }}>Featured <span className="gradient-text">Projects</span></h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
                    {projects.map((p, i) => (
                        <ProjectCard key={i} {...p} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const Contact = () => {
    return (
        <section id="contact" style={{ ...sectionStyle, background: 'var(--bg-secondary)', textAlign: 'center' }}>
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Let's <span className="gradient-text">Connect</span></h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '50px', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 50px auto' }}>
                    I am currently open to new opportunities and collaborations. Feel free to reach out via email or LinkedIn.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        href="mailto:sandeshpokharkar5248@gmail.com"
                        style={{
                            fontSize: '1.5rem',
                            color: 'var(--text-primary)',
                            textDecoration: 'underline',
                            textDecorationColor: 'var(--accent-color)',
                            textUnderlineOffset: '8px'
                        }}>
                        sandeshpokharkar5248@gmail.com
                    </motion.a>
                    <div style={{ display: 'flex', gap: '30px', marginTop: '30px' }}>
                        <a href="https://www.linkedin.com/in/sandesh-pokharkar-15b4b029b" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem' }}>
                            <div style={{ background: '#0077b5', padding: '10px', borderRadius: '50%', display: 'flex' }}><Briefcase size={20} color="white" /></div>
                            <span>LinkedIn</span>
                        </a>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem' }}>
                            <div style={{ background: '#25D366', padding: '10px', borderRadius: '50%', display: 'flex' }}><MapPin size={20} color="white" /></div>
                            <span>Dombivli West (91526 00509)</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Home = () => {
    return (
        <div>
            <Hero />
            <Skills />
            <About />
            <Experience />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;
