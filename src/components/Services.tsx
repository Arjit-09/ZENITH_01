'use client';

import React from 'react';
import { SERVICES, Service } from '@/data/portfolioData';
import { Brain, Bot, Code2, ShoppingCart, Boxes, Cpu } from 'lucide-react';

export default function Services() {
  const getIcon = (iconName: Service['iconName']) => {
    switch (iconName) {
      case 'brain':
        return <Brain size={28} />;
      case 'bot':
        return <Bot size={28} />;
      case 'code':
        return <Code2 size={28} />;
      case 'cart':
        return <ShoppingCart size={28} />;
      case 'cubes':
        return <Boxes size={28} />;
      case 'cpu':
        return <Cpu size={28} />;
      default:
        return <Code2 size={28} />;
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -3;
    const rotateY = ((x - centerX) / centerX) * 3;

    card.style.transform = `translateY(-6px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = 'translateY(0) perspective(1000px) rotateX(0) rotateY(0)';
  };

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-header reveal visible">
          <span className="section-label">Our Expertise</span>
          <h2 className="section-title">
            Comprehensive Digital <span>Solutions</span>
          </h2>
          <p className="section-subtitle">
            From intelligent automation to decentralized systems — end-to-end technology solutions for every digital challenge.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={`service-card reveal visible delay-${(index % 3) + 1}`}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="service-icon">
                {getIcon(service.iconName)}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
