import React from 'react';
import { ArrowUp, Github, Heart } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';

export default function Footer({ setActivePage }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
            <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{personalInfo.name}</span>
            <span style={{ color: 'var(--text-muted)' }}>•</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Portfolio & Artifacts</span>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} {personalInfo.name}. Built with Vite & React. Deployed to GitHub Pages.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <button
            onClick={() => {
              setActivePage('home');
              scrollToTop();
            }}
            className="footer-link"
            style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
          >
            Home
          </button>
          <button
            onClick={() => {
              setActivePage('artifacts');
              scrollToTop();
            }}
            className="footer-link"
            style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
          >
            Artifacts
          </button>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <button
            onClick={scrollToTop}
            className="btn btn-ghost btn-sm"
            style={{ padding: '0.3rem 0.6rem' }}
            title="Back to top"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
