import React from 'react';
import ParticleCanvas from '@/components/ParticleCanvas';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <main>
      {/* Particle Canvas Background */}
      <ParticleCanvas />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Key Numbers / Stats */}
      <Stats />

      {/* Capabilities & Services */}
      <Services />

      {/* About Section */}
      <About />

      {/* Project Portfolio */}
      <Projects />

      {/* Strategic Consultation / Contact */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Scroll-to-Top Action */}
      <BackToTop />
    </main>
  );
}
