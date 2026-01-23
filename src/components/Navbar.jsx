import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backdropFilter: 'blur(12px)',
        backgroundColor: 'rgba(10, 10, 10, 0.6)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
        <a href="/" style={{ fontSize: '1.5rem', fontWeight: '700', letterSpacing: '-0.5px' }}>
          Portfolio<span style={{ color: 'var(--accent-color)' }}>.</span>
        </a>

        <div style={{ display: 'flex', gap: '30px' }}>
          {['Skills', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', fontWeight: '500' }}
              onMouseEnter={(e) => e.target.style.color = 'white'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
            >
              {item}
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github size={20} color="var(--text-secondary)" />
          </a>
          <a href="https://www.linkedin.com/in/sandesh-pokharkar-15b4b029b" target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} color="var(--text-secondary)" />
          </a>
          <a href="mailto:sandeshpokharkar5248@gmail.com">
            <Mail size={20} color="var(--text-secondary)" />
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
