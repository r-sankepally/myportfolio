import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ArtifactsPage from './components/ArtifactsPage';
import ArtifactDetailPage from './components/ArtifactDetailPage';
import Footer from './components/Footer';
import { artifacts } from './data/portfolioData';

export default function App() {
  // Hash-based routing ensures full compatibility with GitHub Pages static hosting
  const parseRouteFromHash = () => {
    const hash = window.location.hash.toLowerCase();
    if (hash.startsWith('#/artifact/')) {
      const artifactId = hash.replace('#/artifact/', '').split('?')[0].trim();
      const found = artifacts.find((a) => a.id.toLowerCase() === artifactId);
      return { page: 'artifact-detail', artifact: found || artifacts[0] };
    }
    if (hash.includes('artifacts')) {
      return { page: 'artifacts', artifact: null };
    }
    return { page: 'home', artifact: null };
  };

  const initialRoute = parseRouteFromHash();
  const [activePage, setActivePage] = useState(initialRoute.page);
  const [selectedArtifact, setSelectedArtifact] = useState(initialRoute.artifact);
  const [previousPage, setPreviousPage] = useState('home');

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
      const route = parseRouteFromHash();
      setActivePage(route.page);
      if (route.artifact) {
        setSelectedArtifact(route.artifact);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handlePageChange = (page) => {
    setPreviousPage(activePage);
    setActivePage(page);
    if (page === 'artifacts') {
      window.location.hash = '#/artifacts';
    } else {
      window.location.hash = '#/';
    }
  };

  const handleOpenArtifactDetail = (artifact) => {
    setPreviousPage(activePage === 'artifact-detail' ? previousPage : activePage);
    setSelectedArtifact(artifact);
    setActivePage('artifact-detail');
    window.location.hash = `#/artifact/${artifact.id}`;
  };

  const handleBackFromDetail = () => {
    if (previousPage === 'artifacts') {
      handlePageChange('artifacts');
    } else {
      handlePageChange('home');
    }
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

      {/* Main Container */}
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
          {activePage === 'home' && (
            <HeroSection
              onSelectArtifact={handleOpenArtifactDetail}
              onOpenArtifactsPage={() => handlePageChange('artifacts')}
            />
          )}

          {activePage === 'artifacts' && (
            <ArtifactsPage
              onSelectArtifact={handleOpenArtifactDetail}
              onBackHome={() => handlePageChange('home')}
            />
          )}

          {activePage === 'artifact-detail' && (
            <ArtifactDetailPage
              artifact={selectedArtifact}
              onBack={handleBackFromDetail}
              onNavigateArtifact={handleOpenArtifactDetail}
            />
          )}
        </main>

        {/* Footer in bottom-left */}
        <Footer setActivePage={handlePageChange} />
      </div>
    </div>
  );
}
