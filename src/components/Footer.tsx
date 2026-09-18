import React from 'react';
import Link from 'next/link';
import { Phone, Mail, ChevronRight, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '@/data/portfolioData';

const TECH_BADGES = [
  'React',
  'Next.js',
  'Python',
  'TensorFlow',
  'Node.js',
  'Solidity',
  'MongoDB',
  'AWS'
];

export default function Footer() {
  return (
    <footer className="footer">
      {/* CTA Banner */}
      <div className="footer-cta">
        <div className="container">
          <div>
            <h2>
              Ready to Build Your Next{' '}
              <span style={{ color: 'var(--color-bronze-light)' }}>Digital Solution?</span>
            </h2>
            <p>Contact our team for a free consultation and custom project proposal.</p>
          </div>
          <div className="footer-cta-btns">
            <Link href="#contact" className="btn btn-primary">
              <Phone size={16} /> Get Free Quote
            </Link>
            <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="btn btn-outline">
              <Phone size={16} /> Call: {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-brand">
              <Link href="#home" className="nav-brand">
                <strong>{COMPANY_INFO.name}</strong> — {COMPANY_INFO.tagline}
              </Link>
              <p>
                A premier digital solutions firm specializing in AI/ML, chatbot integration, full-stack development, e-commerce, blockchain, and IoT projects. Transforming ideas into intelligent systems.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="footer-contact-item">
                  <Phone size={14} />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
                <a href={`mailto:${COMPANY_INFO.email}`} className="footer-contact-item">
                  <Mail size={14} />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li>
                  <Link href="#services">
                    <ChevronRight size={12} /> AI & Machine Learning
                  </Link>
                </li>
                <li>
                  <Link href="#services">
                    <ChevronRight size={12} /> Chatbot Integration
                  </Link>
                </li>
                <li>
                  <Link href="#services">
                    <ChevronRight size={12} /> Full-Stack Development
                  </Link>
                </li>
                <li>
                  <Link href="#services">
                    <ChevronRight size={12} /> E-Commerce Platforms
                  </Link>
                </li>
                <li>
                  <Link href="#services">
                    <ChevronRight size={12} /> Blockchain Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#services">
                    <ChevronRight size={12} /> IoT Projects
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <Link href="#home">
                    <ChevronRight size={12} /> Home
                  </Link>
                </li>
                <li>
                  <Link href="#services">
                    <ChevronRight size={12} /> Services
                  </Link>
                </li>
                <li>
                  <Link href="#projects">
                    <ChevronRight size={12} /> Projects
                  </Link>
                </li>
                <li>
                  <Link href="#about">
                    <ChevronRight size={12} /> About Us
                  </Link>
                </li>
                <li>
                  <Link href="#contact">
                    <ChevronRight size={12} /> Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Technologies */}
            <div className="footer-col">
              <h4>Technologies</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {TECH_BADGES.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      display: 'inline-block',
                      padding: '4px 12px',
                      borderRadius: '4px',
                      background: 'rgba(166,124,82,0.12)',
                      color: 'rgba(255,255,255,0.7)',
                      fontSize: '0.73rem',
                      fontWeight: 600,
                      border: '1px solid rgba(166,124,82,0.2)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div
                style={{
                  marginTop: '28px',
                  padding: '20px',
                  background: 'rgba(255,255,255,0.04)',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.08)'
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '2rem',
                    fontWeight: 800,
                    color: 'var(--color-bronze-light)',
                    lineHeight: 1
                  }}
                >
                  50+
                </div>
                <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem', marginTop: '4px' }}>
                  Projects Delivered Successfully
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Zenith. All rights reserved. Engineering Intelligent Digital Solutions.</p>
            <div className="footer-socials">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="footer-social"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="footer-social"
                aria-label="Phone"
              >
                <Phone size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
