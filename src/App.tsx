import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import EquipeCarousel from './components/EquipeCarousel';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Projects />
      <EquipeCarousel />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;