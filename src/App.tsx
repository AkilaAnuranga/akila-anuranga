import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <SEO />

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
