import React, { useState } from 'react';
import { Moon, Sun, Github, Menu, X, Layers, Home, Sparkles } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';

export default function Navbar({ activePage, setActivePage, theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        {/* Brand / Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="nav-brand"
          style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
        >
          <img
            src={personalInfo.photo}
            alt={personalInfo.name}
            className="nav-brand-avatar"
            onError={(e) => {
              // Fallback to avatar.svg if custom photo fails
              e.currentTarget.src = './avatar.svg';
            }}
          />
          <div>
            <span style={{ display: 'block', lineHeight: 1.1 }}>{personalInfo.name}</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>
              Portfolio & Artifacts
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav>
          <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <li>
              <button
                className={`nav-link ${activePage === 'home' ? 'active' : ''}`}
                onClick={() => handleNavClick('home')}
              >
                <Home size={16} />
                <span>Home</span>
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${activePage === 'artifacts' ? 'active' : ''}`}
                onClick={() => handleNavClick('artifacts')}
              >
                <Layers size={16} />
                <span>Artifacts</span>
                <span className="badge" style={{ padding: '0.1rem 0.45rem', fontSize: '0.7rem' }}>
                  6
                </span>
              </button>
            </li>
            {activePage === 'home' && (
              <>
                <li>
                  <a href="#skills" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                    <span>Skills</span>
                  </a>
                </li>
                <li>
                  <a href="#experience" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                    <span>Experience</span>
                  </a>
                </li>
                <li>
                  <a href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                    <span>Contact</span>
                  </a>
                </li>
              </>
            )}
          </ul>
        </nav>

        {/* Action Buttons: Theme Toggle & GitHub */}
        <div className="nav-actions">
          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-sm"
            aria-label="Toggle Dark / Light Theme"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
            aria-label="GitHub Profile"
          >
            <Github size={16} />
            <span style={{ display: 'none', md: 'inline' }}>GitHub</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}
