import React, { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ReactGA from 'react-ga4';
import Header from './components/Header';
import Hero from './components/Hero';
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
      <div className="App">
        <Helmet>
          <title>Akila Anuranga Millagahawatta - Software Engineer</title>
          <meta name="description" content="Software Engineer specializing in AI-driven solutions, web development, and automation. Experienced in React, Python, PHP, and modern web technologies." />
          <meta name="keywords" content="Software Engineer, AI Developer, React Developer, Python Developer, Web Development, Automation, Laravel, Node.js" />
          <meta name="author" content="Akila Anuranga Millagahawatta" />

          {/* Open Graph */}
          <meta property="og:title" content="Akila Anuranga Millagahawatta - Software Engineer" />
          <meta property="og:description" content="Software Engineer specializing in AI-driven solutions, web development, and automation." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://akila-portfolio.com" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Akila Anuranga Millagahawatta - Software Engineer" />
          <meta name="twitter:description" content="Software Engineer specializing in AI-driven solutions, web development, and automation." />
        </Helmet>

        <Header />
        <main>
          <Hero />
          <Experience />
          <Education />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
