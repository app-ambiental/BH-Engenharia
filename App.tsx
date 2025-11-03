
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import AboutUs from './components/AboutUs';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-50 font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <Features />
        <ServicesSection />
        <ProjectsSection />
        <AboutUs />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
