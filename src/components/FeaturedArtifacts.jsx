import React from 'react';
import { ArrowRight, ExternalLink, Sparkles, Eye } from 'lucide-react';
import { artifacts } from '../data/portfolioData';

export default function FeaturedArtifacts({ onSelectArtifact, onViewAll }) {
  const featuredList = artifacts.filter((a) => a.featured).slice(0, 3);

  return (
    <section style={{ padding: '3.5rem 0' }}>
      <div className="section-header" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <span className="section-tag">// Spotlight Work</span>
          <h2 className="section-title">Featured Artifacts</h2>
          <p className="section-subtitle">
            A curated selection of technical architectures, open-source systems, and full-stack projects.
          </p>
        </div>

        <button
          onClick={onViewAll}
          className="btn btn-secondary"
          style={{ whiteSpace: 'nowrap' }}
        >
          <span>View All Artifacts ({artifacts.length})</span>
          <ArrowRight size={16} />
        </button>
      </div>

      <div className="artifacts-grid">
        {featuredList.map((artifact) => (
          <div
            key={artifact.id}
            className="glass-card artifact-card"
            onClick={() => onSelectArtifact(artifact)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectArtifact(artifact);
              }
            }}
          >
            {/* Image Thumbnail Preview */}
            <div className="artifact-thumb-wrapper">
              <img
                src={artifact.image}
                alt={artifact.title}
                className="artifact-thumb"
                loading="lazy"
              />
              <span className="artifact-badge-status">
                {artifact.status}
              </span>
            </div>

            {/* Card Content Body */}
            <div className="artifact-body">
              <span className="artifact-category">{artifact.category}</span>
              <h3 className="artifact-title">{artifact.title}</h3>
              <p className="artifact-desc">{artifact.shortDescription}</p>

              {/* Technology Tags */}
              <div className="artifact-tags">
                {artifact.tags.slice(0, 4).map((tag, idx) => (
                  <span key={idx} className="artifact-tag">
                    {tag}
                  </span>
                ))}
                {artifact.tags.length > 4 && (
                  <span className="artifact-tag">+{artifact.tags.length - 4}</span>
                )}
              </div>

              {/* Footer with action */}
              <div className="artifact-footer">
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Eye size={15} />
                  <span>Inspect Details</span>
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  {artifact.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

