import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutPage from "./components/pages/AboutPage";
import Gallery from "./components/Gallery";
import EquipeCarousel from "./components/EquipeCarousel";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
        <Route path="/" element={
            <>
              <Hero />
              <About />
              <Gallery />
              <Projects />
              <EquipeCarousel />
              <Contact />
            </>
          } />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
