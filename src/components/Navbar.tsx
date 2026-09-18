'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { COMPANY_INFO } from '@/data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['services', 'projects', 'about', 'contact'];
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection('home');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => {
    setIsMobileOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="container">
          <Link href="#home" className="nav-brand" onClick={closeMobile}>
            <strong>{COMPANY_INFO.name}</strong> — {COMPANY_INFO.tagline}
          </Link>

          <div className="nav-links">
            <Link
              href="#services"
              className={activeSection === 'services' ? 'active' : ''}
            >
              Services
            </Link>
            <Link
              href="#projects"
              className={activeSection === 'projects' ? 'active' : ''}
            >
              Projects
            </Link>
            <Link
              href="#about"
              className={activeSection === 'about' ? 'active' : ''}
            >
              About
            </Link>
            <Link
              href="#contact"
              className={activeSection === 'contact' ? 'active' : ''}
            >
              Contact
            </Link>
            <Link href="#contact" className="btn btn-primary nav-cta">
              Book Now
            </Link>
          </div>

          <button
            className="mobile-toggle"
            aria-label="Open navigation menu"
            onClick={() => setIsMobileOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-overlay ${isMobileOpen ? 'active' : ''}`}
        onClick={closeMobile}
        aria-hidden={!isMobileOpen}
      />

      {/* Mobile Drawer */}
      <div className={`mobile-nav ${isMobileOpen ? 'open' : ''}`}>
        <button
          className="mobile-nav-close"
          aria-label="Close menu"
          onClick={closeMobile}
        >
          <X size={20} />
        </button>

        <Link href="#home" onClick={closeMobile}>
          Home
        </Link>
        <Link href="#services" onClick={closeMobile}>
          Services
        </Link>
        <Link href="#projects" onClick={closeMobile}>
          Projects
        </Link>
        <Link href="#about" onClick={closeMobile}>
          About
        </Link>
        <Link href="#contact" onClick={closeMobile}>
          Contact
        </Link>

        <Link
          href="#contact"
          className="btn btn-primary"
          style={{ marginTop: '24px', justifyContent: 'center' }}
          onClick={closeMobile}
        >
          Book Now
        </Link>
      </div>
    </>
  );
}
