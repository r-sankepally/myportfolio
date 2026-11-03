import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
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
    return localStorage.getItem('portfolio-theme') || 'light';
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
    <div className="portfolio-app-root">
      {/* Background Ambient Glow */}
      <div className="ambient-glow" aria-hidden="true">
        <div className="ambient-orb ambient-orb-1" />
        <div className="ambient-orb ambient-orb-2" />
      </div>

      {/* Dashed Outer Container Frame (As per blueprint wireframe design) */}
      <div className="blueprint-outer-frame">
        {/* Top-Right Navigation Bar */}
        <Navbar
          activePage={activePage}
          setActivePage={handlePageChange}
          theme={theme}
          toggleTheme={toggleTheme}
        />

        {/* Main Content Area */}
        <main className="blueprint-main-content">
          {activePage === 'home' ? (
            <HeroSection
              onSelectArtifact={setSelectedArtifact}
              onOpenArtifactsPage={() => handlePageChange('artifacts')}
            />
          ) : (
            <ArtifactsPage
              onSelectArtifact={setSelectedArtifact}
              onBackHome={() => handlePageChange('home')}
            />
          )}
        </main>

        {/* Footer in bottom-left */}
        <Footer setActivePage={handlePageChange} />
      </div>

      {/* Artifact Detailed Modal */}
      {selectedArtifact && (
        <ArtifactModal
          artifact={selectedArtifact}
          onClose={() => setSelectedArtifact(null)}
        />
      )}
    </div>
  );
}
