import React from 'react';
import { personalInfo } from '../data/portfolioData';
import ArtifactsFeed from './ArtifactsFeed';
import PortfolioBlocks from './PortfolioBlocks';

export default function HeroSection({ onSelectArtifact, onOpenArtifactsPage }) {
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
                src={personalInfo.photo}
                alt={personalInfo.name}
                className="hero-avatar-img"
                onError={(e) => {
                  e.currentTarget.src = './avatar.svg';
                }}
              />
            </div>

            {/* Title & Role */}
            <div className="hero-title-group">
              <h1 className="hero-greeting">
                Hi, I'm <span className="hero-name-highlight">{personalInfo.name}</span>
              </h1>
              <p className="hero-role-tag">
                &lt;{personalInfo.role}&gt;
              </p>
            </div>
          </div>

          {/* Dashed Passion Box */}
          <div className="passion-dashed-box">
            <h2 className="passion-heading">{personalInfo.passionTitle}</h2>
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
          LOWER SECTION: Stacked Blocks (block 01, block 02, block 03)
          ============================================================== */}
      <PortfolioBlocks
        onSelectArtifact={onSelectArtifact}
        onOpenArtifactsPage={onOpenArtifactsPage}
      />
    </div>
  );
}
