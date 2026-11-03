import React from 'react';
import { artifacts } from '../data/portfolioData';

export default function ArtifactsFeed({ onSelectArtifact, onOpenArtifactsPage }) {
  return (
    <aside className="artifacts-feed-container" aria-label="Artifacts Feed">
      {/* Header Pill / Button */}
      <button
        onClick={onOpenArtifactsPage}
        className="artifacts-feed-header"
        title="View all artifacts"
      >
        <span>Artifacts Feed</span>
      </button>

      {/* Dashed Feed Items List */}
      <div className="artifacts-feed-list">
        {artifacts.map((artifact, index) => (
          <button
            key={artifact.id}
            onClick={() => onSelectArtifact(artifact)}
            className="artifacts-feed-item"
            title={`View ${artifact.title}`}
          >
            <span className="artifacts-feed-item-title">
              {artifact.title}
            </span>
            <span className="artifacts-feed-item-date">
              {artifact.date}
            </span>
          </button>
        ))}
      </div>
    </aside>
  );
}

