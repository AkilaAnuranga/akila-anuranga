import { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ReactGA from 'react-ga4';
import { MotionConfig } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Initialize Google Analytics
  useEffect(() => {
    ReactGA.initialize('G-Z0PDJ80QBE');

    // Track initial page view
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
  }, []);

  return (
    <HelmetProvider>
      <MotionConfig reducedMotion="user">
        <div className="App">
          <Helmet>
            <title>Akila Anuranga Millagahawatta - Agentic AI & Automation Developer</title>
            <meta name="description" content="Agentic AI & Automation Developer building production-ready AI agents and automation with Python, UiPath and Power Automate, plus full-stack web development with React, Node.js and Laravel." />
            <meta name="keywords" content="Agentic AI Developer, Automation Developer, Python Developer, AI Agents, Claude Code, Claude Code Architect Foundation, UiPath, Power Automate, Software Engineer, AI Developer, React Developer, Web Development, Automation, Laravel, Node.js" />
            <meta name="author" content="Akila Anuranga Millagahawatta" />

            {/* Open Graph */}
            <meta property="og:title" content="Akila Anuranga Millagahawatta - Agentic AI & Automation Developer" />
            <meta property="og:description" content="Agentic AI & Automation Developer building production-ready AI agents and automation with Python, UiPath and Power Automate." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://akilaanuranga.github.io/akila-anuranga/" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Akila Anuranga Millagahawatta - Agentic AI & Automation Developer" />
            <meta name="twitter:description" content="Agentic AI & Automation Developer building production-ready AI agents and automation with Python, UiPath and Power Automate." />
          </Helmet>

          <Header />
          <main>
            <Hero />
            <Marquee />
            <Experience />
            <Skills />
            <Education />
            <Contact />
          </main>
          <Footer />
        </div>
      </MotionConfig>
    </HelmetProvider>
  );
}

export default App;
