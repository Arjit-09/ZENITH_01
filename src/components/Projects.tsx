'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS, Project } from '@/data/portfolioData';

type FilterType = 'all' | 'aiml' | 'chatbot' | 'fullstack' | 'ecommerce' | 'blockchain' | 'iot';

const FILTER_OPTIONS: { label: string; value: FilterType }[] = [
  { label: 'All Projects', value: 'all' },
  { label: 'AI / ML', value: 'aiml' },
  { label: 'Chatbot', value: 'chatbot' },
  { label: 'Full-Stack', value: 'fullstack' },
  { label: 'E-Commerce', value: 'ecommerce' },
  { label: 'Blockchain', value: 'blockchain' },
  { label: 'IoT', value: 'iot' }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects-header">
          <div>
            <span className="section-label">Our Work</span>
            <h2 className="section-title">
              Project <span>Portfolio</span>
            </h2>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs reveal visible">
          {FILTER_OPTIONS.map((tab) => (
            <button
              key={tab.value}
              className={`filter-tab ${activeFilter === tab.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(tab.value)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project: Project, idx: number) => {
            const cardContent = (
              <>
                <div className="project-image">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={240}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div className="project-image-overlay" />
                  <span className="project-category-badge">
                    {project.categoryLabel}
                  </span>
                  <span className="project-link-badge">
                    {project.linkText}
                  </span>
                </div>

                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            );

            return project.isExternal ? (
              <a
                key={project.id}
                href={project.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`project-card reveal visible delay-${(idx % 3) + 1}`}
              >
                {cardContent}
              </a>
            ) : (
              <Link
                key={project.id}
                href={project.linkUrl}
                className={`project-card reveal visible delay-${(idx % 3) + 1}`}
              >
                {cardContent}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
