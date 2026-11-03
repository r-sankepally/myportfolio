import React from 'react';
import { Home, Sun, Moon } from 'lucide-react';
import { artifacts } from '../data/portfolioData';

export default function Navbar({ activePage, setActivePage, theme, toggleTheme }) {
  const handleHomeClick = () => {
    setActivePage('home');
    window.location.hash = '#/';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleArtifactsClick = () => {
    setActivePage('artifacts');
    window.location.hash = '#/artifacts';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="wireframe-navbar" aria-label="Main Navigation">
      <div className="wireframe-nav-actions">
        {/* Home Icon Button (Blue Outline) */}
        <button
          onClick={handleHomeClick}
          className={`nav-icon-btn ${activePage === 'home' ? 'active' : ''}`}
          title="Home"
          aria-label="Home"
        >
          <Home size={24} strokeWidth={2.2} />
        </button>

        {/* Artifacts (6) Bordered Button */}
        <button
          onClick={handleArtifactsClick}
          className={`nav-artifacts-btn ${activePage === 'artifacts' ? 'active' : ''}`}
          title="View Artifacts"
          aria-label={`View Artifacts (${artifacts.length})`}
        >
          <span>Artifacts ({artifacts.length})</span>
        </button>

        {/* Theme Toggle Sun / Moon Icon Button */}
        <button
          onClick={toggleTheme}
          className="nav-icon-btn theme-toggle-btn"
          title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} theme`}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <Moon size={24} strokeWidth={2.2} />
          ) : (
            <Sun size={24} strokeWidth={2.2} />
          )}
        </button>
      </div>
    </header>
  );
}
