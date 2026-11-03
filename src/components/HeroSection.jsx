import React, { useState } from 'react';
import { ArrowRight, Mail, Github, Linkedin, Twitter, MapPin, Sparkles, Download, Check, HelpCircle } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';

export default function HeroSection({ onExploreArtifacts }) {
  const [photoInfoOpen, setPhotoInfoOpen] = useState(false);

  return (
    <section className="hero-section">
      <div className="hero-grid">
        {/* Left Column: Bio & Intros */}
        <div className="hero-content">
          {/* Availability Status Badge */}
          <div>
            <span className="badge badge-pulse">
              <span className="pulse-dot"></span>
              {personalInfo.statusBadge}
            </span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">{personalInfo.name}</span>
          </h1>

          <p className="hero-role">
            {personalInfo.role}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            <MapPin size={15} />
            <span>{personalInfo.location}</span>
          </div>

          <div className="hero-bio">
            {personalInfo.bio.map((paragraph, idx) => (
              <p key={idx} style={{ marginBottom: idx < personalInfo.bio.length - 1 ? '0.75rem' : '0' }}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Call to Actions */}
          <div className="hero-actions">
            <button
              onClick={onExploreArtifacts}
              className="btn btn-primary"
            >
              <span>Explore Artifacts</span>
              <ArrowRight size={18} />
            </button>

            <a
              href="#contact"
              className="btn btn-secondary"
            >
              <Mail size={16} />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Links Row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.5rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>
              Connect:
            </span>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm"
              title="GitHub"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm"
              title="Twitter / X"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              className="btn btn-ghost btn-sm"
              title="Send Email"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Right Column: Hero Profile Photo with Ambient Glow */}
        <div className="hero-photo-wrapper">
          <div className="hero-photo-glow" />
          
          <div className="hero-photo-container">
            <img
              src={personalInfo.photo}
              alt={personalInfo.photoAlt}
              className="hero-photo"
              onError={(e) => {
                // If custom image is missing or broken, fallback to default svg
                e.currentTarget.src = './avatar.svg';
              }}
            />

            {/* Online / Active status indicator badge */}
            <div className="photo-badge-online">
              <span className="pulse-dot"></span>
              <span>Online</span>
            </div>
          </div>

          {/* Photo Customization Tooltip / Helper */}
          <div style={{ marginTop: '0.75rem', textAlign: 'center' }}>
            <button
              onClick={() => setPhotoInfoOpen(!photoInfoOpen)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-muted)',
                fontSize: '0.75rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                textDecoration: 'underline'
              }}
            >
              <HelpCircle size={12} />
              <span>How to change this photo?</span>
            </button>

            {photoInfoOpen && (
              <div
                style={{
                  marginTop: '0.5rem',
                  padding: '0.75rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '0.5rem',
                  fontSize: '0.75rem',
                  color: 'var(--text-secondary)',
                  textAlign: 'left',
                  boxShadow: 'var(--shadow-lg)'
                }}
              >
                <strong>To use your own picture:</strong>
                <ol style={{ paddingLeft: '1.2rem', marginTop: '0.35rem', lineHeight: '1.4' }}>
                  <li>Place your photo in <code>public/photo.jpg</code></li>
                  <li>In <code>src/data/portfolioData.js</code>, update <code>photo: "./photo.jpg"</code></li>
                </ol>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="hero-stats">
        {personalInfo.stats.map((stat, idx) => (
          <div key={idx} className="stat-item">
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
