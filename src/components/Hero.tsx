import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Layers, PhoneCall } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <Image
          src="/images/hero-bg.jpg"
          alt="Zenith Technology Workspace"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className="hero-circle hero-circle--1" />
      <div className="hero-circle hero-circle--2" />

      <div className="container hero-content">
        <div className="hero-text">
          <h1>Precision Technology Solutions</h1>
          <p>
            We engineer intelligent digital solutions — from AI-powered platforms to blockchain ecosystems — empowering businesses to innovate, scale, and lead.
          </p>
          <div className="hero-btns">
            <Link href="#projects" className="btn btn-primary">
              <Layers size={18} /> Explore Projects
            </Link>
            <Link
              href="#contact"
              className="btn btn-outline"
              style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}
            >
              <PhoneCall size={18} /> Get Free Consultation
            </Link>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
