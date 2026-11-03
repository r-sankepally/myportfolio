import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import ArtifactsFeed from './ArtifactsFeed';
import PortfolioBlocks from './PortfolioBlocks';

/**
 * Resolves profile photo URLs cleanly, handling leading slashes,
 * accidental 'public/' prefixes, and URL-encoding filenames with spaces.
 */
function resolvePhotoUrl(photo) {
  if (!photo) return './avatar.svg';
  let clean = String(photo).trim();

  // If user accidentally included "public/", strip it because Vite serves public/ at root
  if (clean.startsWith('public/')) {
    clean = './' + clean.slice(7);
  } else if (clean.startsWith('/public/')) {
    clean = '.' + clean.slice(7);
  }

  // Ensure relative prefix for GitHub Pages compatibility
  if (!clean.startsWith('./') && !clean.startsWith('/') && !clean.startsWith('http')) {
    clean = './' + clean;
  }

  return encodeURI(clean);
}

export default function HeroSection({ onSelectArtifact, onOpenArtifactsPage }) {
  // Graceful fallback chain if user path or format has an issue
  const [photoErrorCount, setPhotoErrorCount] = useState(0);

  const fallbackChain = [
    resolvePhotoUrl(personalInfo.photo),
    './avatar.jpeg',
    './avatar.jpg',
    './avatar.png',
    './avatar.svg'
  ];

  const currentPhotoSrc = fallbackChain[photoErrorCount] || './avatar.svg';

  const handlePhotoError = () => {
    if (photoErrorCount < fallbackChain.length - 1) {
      setPhotoErrorCount((prev) => prev + 1);
    }
  };

  return (
    <div className="hero-wireframe-layout">
      {/* ==============================================================
          TOP SECTION: Profile Header + Passion Box (Left) & Artifacts Feed (Right)
          ============================================================== */}
      <div className="hero-top-grid">
        {/* Left Column: Avatar + Greeting + Dashed Passion Box */}
        <div className="hero-left-column">
          {/* Header Row: Circular Avatar + Name/Role */}
          <div className="hero-profile-row">
            {/* Blue Outline Circular Avatar */}
            <div className="hero-avatar-circle">
              <img
                src={currentPhotoSrc}
                alt={personalInfo.photoAlt || personalInfo.name}
                className="hero-avatar-img"
                onError={handlePhotoError}
              />
            </div>

            {/* Title & Role */}
            <div className="hero-title-group">
              <h1 className="hero-greeting">
                Hi, I'm <span className="hero-name-highlight">{personalInfo.name}</span>
              </h1>
              <p className="hero-role-tag">
                {personalInfo.titleDisplay || personalInfo.role}
              </p>
            </div>
          </div>

          {/* Dashed Passion Box */}
          <div className="passion-dashed-box">
            {personalInfo.passionTitle && (
              <h2 className="passion-heading">{personalInfo.passionTitle}</h2>
            )}
            <div className="passion-lines">
              {personalInfo.passionLines.map((line, idx) => (
                <p key={idx} className="passion-line">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Artifacts Feed (Directly under top nav) */}
        <div className="hero-right-column">
          <ArtifactsFeed
            onSelectArtifact={onSelectArtifact}
            onOpenArtifactsPage={onOpenArtifactsPage}
          />
        </div>
      </div>

      {/* ==============================================================
          LOWER SECTION: Stacked Blocks (block 02, block 03)
          ============================================================== */}
      <PortfolioBlocks />
    </div>
  );
}
