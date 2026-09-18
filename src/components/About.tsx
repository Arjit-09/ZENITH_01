import React from 'react';
import Image from 'next/image';
import { CheckCircle2, ShieldCheck, Headphones } from 'lucide-react';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content reveal-left visible">
            <span className="section-label">About Zenith</span>
            <h2 className="section-title">
              Advancing Digital <span>Performance</span>
            </h2>
            <div className="gold-divider" />
            <p>
              Zenith provides enterprise-grade technology solutions that empower clients to operate efficiently, securely, and at scale across diverse industries.
            </p>
            <p>
              <em>
                Founded by senior systems architects, the firm delivers comprehensive cloud, AI/ML, and full-stack development solutions that align technology investments with measurable business objectives.
              </em>
            </p>
            <p>
              Our specialists demonstrate proven expertise across diverse industries, implementing secure infrastructures, optimizing workflows, and facilitating seamless digital transformation. Through iterative collaboration and rigorous quality assurance, the organization ensures every deployment remains scalable, resilient, and compliant with prevailing standards.
            </p>

            <div className="about-features">
              <div className="about-feature">
                <div className="about-feature-icon">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4>End-to-End Delivery</h4>
                  <p>Complete project lifecycle from ideation to deployment and maintenance.</p>
                </div>
              </div>

              <div className="about-feature">
                <div className="about-feature-icon">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4>Quality Assured</h4>
                  <p>Rigorous testing, code reviews, and security audits on every project.</p>
                </div>
              </div>

              <div className="about-feature">
                <div className="about-feature-icon">
                  <Headphones size={20} />
                </div>
                <div>
                  <h4>Ongoing Support</h4>
                  <p>Dedicated post-launch support and continuous improvement cycles.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-image reveal-right visible">
            <Image
              src="/images/about.jpg"
              alt="Zenith Office — Modern Tech Workspace"
              width={600}
              height={550}
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
