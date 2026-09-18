'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { COMPANY_INFO } from '@/data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch(COMPANY_INFO.formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setIsSuccess(true);
      } else {
        setErrorMessage('Failed to send message. Please reach out to us directly via email or phone.');
      }
    } catch {
      setErrorMessage('Network error occurred. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info reveal-left visible">
            <span className="section-label">Get In Touch</span>
            <h2 className="section-title">
              Schedule a Strategic <span>Consultation</span>
            </h2>
            <p>
              Reserve time with a senior consultant to review requirements, assess risks, and outline an implementation roadmap for your next project.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <Phone size={18} />
                </div>
                <div className="contact-detail-text">
                  <h4>Phone</h4>
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`}>{COMPANY_INFO.phone}</a>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <Mail size={18} />
                </div>
                <div className="contact-detail-text">
                  <h4>Email</h4>
                  <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <Clock size={18} />
                </div>
                <div className="contact-detail-text">
                  <h4>Working Hours</h4>
                  <p>{COMPANY_INFO.hours}</p>
                </div>
              </div>
            </div>

            <div className="contact-image">
              <Image
                src="/images/about.jpg"
                alt="Zenith Consultation Room"
                width={500}
                height={280}
                style={{ width: '100%', height: '280px', objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper reveal-right visible">
            {isSuccess ? (
              <div className="form-success">
                <CheckCircle size={48} className="mx-auto" />
                <h4>Message Sent Successfully!</h4>
                <p>Thank you for reaching out. Our engineering leadership will get back to you within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3>Send Us a Message</h3>
                <p>Fill out the form below and we will get back to you within 24 hours.</p>

                {errorMessage && (
                  <div style={{ color: '#e74c3c', marginBottom: '16px', fontSize: '0.88rem' }}>
                    {errorMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+91 98XXXXXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="service">Service Interested In</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>Select a service</option>
                        <option value="AI/ML Projects">AI / ML Projects</option>
                        <option value="Chatbot Integration">Chatbot Integration</option>
                        <option value="Full-Stack Website">Full-Stack Website</option>
                        <option value="E-Commerce Website">E-Commerce Website</option>
                        <option value="Blockchain Solution">Blockchain Solution</option>
                        <option value="IoT Project">IoT Project</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Project Details</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project requirements, timeline, and budget..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-bronze form-submit"
                    disabled={isSubmitting}
                  >
                    <Send size={16} />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
