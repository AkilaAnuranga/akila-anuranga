import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import ReactGA from 'react-ga4';
import akilaImage from '../assets/images/akila_millagahawatta.png';

// Animated coding background component
const CodingBackground: React.FC = () => {
  const codeSnippets = [
    {
      language: 'JavaScript',
      code: [
        'const developer = {',
        '  name: "Akila Anuranga",',
        '  skills: ["React", "Python", "AI"],',
        '  passion: "Building amazing things"',
        '};'
      ],
      position: { top: '15%', left: '15%' }
    },
    {
      language: 'Python',
      code: [
        'class AIEngineer:',
        '    def __init__(self):',
        '        self.skills = ["ML", "NLP", "CV"]',
        '        self.experience = "5+ years"',
        '    def build_solutions(self):',
        '        return "Innovative AI products"'
      ],
      position: { top: '25%', right: '15%' }
    },
    {
      language: 'React',
      code: [
        'const Portfolio = () => {',
        '  const [projects, setProjects] = useState([]);',
        '  return (',
        '    <div className="amazing-work">',
        '      {projects.map(project => (',
        '        <Project key={project.id} />',
        '      ))}',
        '    </div>',
        '  );',
        '};'
      ],
      position: { bottom: '30%', left: '12%' }
    },
    {
      language: 'CSS',
      code: [
        '.hero-section {',
        '  background: linear-gradient(135deg, #1a1a2e, #16213e);',
        '  animation: fadeIn 2s ease-in-out;',
        '}',
        '',
        '@keyframes fadeIn {',
        '  from { opacity: 0; }',
        '  to { opacity: 1; }',
        '}'
      ],
      position: { bottom: '20%', right: '12%' }
    }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {codeSnippets.map((snippet, index) => (
        <motion.div
          key={index}
          className="absolute opacity-10 hover:opacity-20 transition-opacity duration-300"
          style={snippet.position}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ delay: index * 0.5, duration: 1 }}
        >
          <div className="bg-dark-800/50 backdrop-blur-sm border border-white/10 rounded-lg p-4 max-w-xs">
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-xs text-gray-400 font-mono ml-2">{snippet.language}</span>
            </div>
            <div className="font-mono text-xs text-gray-300 leading-relaxed">
              {snippet.code.map((line, lineIndex) => (
                <motion.div
                  key={lineIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (index * 0.5) + (lineIndex * 0.1), duration: 0.3 }}
                  className="mb-1"
                >
                  {line}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}

      {/* Floating code elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 text-6xl text-primary-500/20 font-mono"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {'</>'}
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-1/3 text-4xl text-primary-300/20 font-mono"
        animate={{
          rotate: [360, 0],
          y: [0, -20, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {'{}'}
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-1/4 text-3xl text-primary-400/20 font-mono"
        animate={{
          x: [0, 30, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {'() =>'}
      </motion.div>
    </div>
  );
};

// Typewriter animation component for job roles
const TypewriterRoles: React.FC = () => {
  const roles = useMemo(() => ['Web Developer', 'Software Engineer', 'AI Engineer', 'Automation Developer'], []);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [isStarted, setIsStarted] = useState(false);

  // Start animation after component mounts
  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsStarted(true);
    }, 1000); // Start after 1 second

    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (!isStarted) return;

    const currentRole = roles[currentRoleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing phase
      if (currentText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setCurrentText(currentRole.slice(0, currentText.length + 1));
        }, 100);
      } else {
        // Finished typing, wait then start deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      // Deleting phase
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50);
      } else {
        // Finished deleting, move to next role
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 100);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex, roles, isStarted]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className="gradient-text font-semibold inline-flex items-center">
      {currentText}
      <span
        className={`inline-block w-0.5 bg-primary-500 ml-1 transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'
          }`}
        style={{ height: '1.2em' }}
      />
    </span>
  );
};

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });

      // Track "Get In Touch" button click
      ReactGA.event({
        category: 'CTA',
        action: 'Click',
        label: 'Get In Touch Button',
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />

      {/* Coding background */}
      <CodingBackground />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-300/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen relative">
          {/* Text content moved to the left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center lg:text-left lg:pr-16 relative z-10 mb-8 lg:mb-0"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-heading"
            >
              <span className="gradient-text">Akila Anuranga</span>
              <br />
              <span className="text-white">Millagahawatta</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              <span className="text-white">I am a </span>
              <TypewriterRoles />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 items-center lg:items-start"
            >
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Get In Touch
              </motion.button>

              <motion.a
                href="mailto:anurangaakila@gmail.com"
                onClick={() => {
                  // Track email button click
                  ReactGA.event({
                    category: 'Contact',
                    action: 'Click',
                    label: 'Email Button',
                  });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-card glass-card-hover px-6 py-3 rounded-lg text-white font-semibold"
              >
                anurangaakila@gmail.com
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image positioned to the right, full height */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex-1 flex justify-center lg:justify-center relative z-20 w-full"
          >
            {/* AI Engineer text behind image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute inset-0 flex items-center justify-center z-0"
            >
              <h2
                className="text-5xl sm:text-7xl lg:text-8xl xl:text-[10rem] font-black text-transparent font-heading whitespace-nowrap"
                style={{
                  WebkitTextStroke: '2px #FF014F',
                  filter: 'drop-shadow(0 0 20px rgba(255, 1, 79, 0.3))'
                }}
              >
                AI ENGINEER
              </h2>
            </motion.div>

            <motion.div
              animate={{
                scale: [1, 1.02, 1],
                y: [0, -10, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-[50vh] sm:h-[60vh] lg:h-[80vh] relative z-10"
            >
              <img
                src={akilaImage}
                alt="Akila Anuranga Millagahawatta"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-transparent rounded-full blur-xl -z-10" />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mb-4 text-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400"
          >
            <div className="w-16 h-10 mx-auto mb-2 glass-card rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <p className="text-sm">Scroll to explore</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
