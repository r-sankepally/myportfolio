import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedArtifacts from './components/FeaturedArtifacts';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import ArtifactsPage from './components/ArtifactsPage';
import ArtifactModal from './components/ArtifactModal';
import Footer from './components/Footer';

export default function App() {
  // Hash-based routing ensures full compatibility with GitHub Pages static hosting
  const getPageFromHash = () => {
    const hash = window.location.hash.toLowerCase();
    if (hash.includes('artifacts')) return 'artifacts';
    return 'home';
  };

  const [activePage, setActivePage] = useState(getPageFromHash());
  const [selectedArtifact, setSelectedArtifact] = useState(null);

  // Dark / Light Theme state with localStorage persistence
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  // Sync hash routing on browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      setActivePage(getPageFromHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handlePageChange = (page) => {
    setActivePage(page);
    window.location.hash = page === 'artifacts' ? '#/artifacts' : '#/';
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div>
      {/* Background Ambient Orbs */}
      <div className="ambient-glow" aria-hidden="true">
        <div className="ambient-orb ambient-orb-1" />
        <div className="ambient-orb ambient-orb-2" />
        <div className="ambient-orb ambient-orb-3" />
      </div>

      {/* Navigation */}
      <Navbar
        activePage={activePage}
        setActivePage={handlePageChange}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Content */}
      <main className="container">
        {activePage === 'home' ? (
          <>
            <HeroSection
              onExploreArtifacts={() => handlePageChange('artifacts')}
            />
            <FeaturedArtifacts
              onSelectArtifact={setSelectedArtifact}
              onViewAll={() => handlePageChange('artifacts')}
            />
            <SkillsSection />
            <ExperienceSection />
            <ContactSection />
          </>
        ) : (
          <ArtifactsPage
            onSelectArtifact={setSelectedArtifact}
          />
        )}
      </main>

      {/* Artifact Detailed Modal */}
      {selectedArtifact && (
        <ArtifactModal
          artifact={selectedArtifact}
          onClose={() => setSelectedArtifact(null)}
        />
      )}

      {/* Footer */}
      <Footer setActivePage={handlePageChange} />
    </div>
  );
}
