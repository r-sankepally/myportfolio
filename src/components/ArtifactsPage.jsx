import React, { useState, useMemo } from 'react';
import { Search, Filter, Layers, ExternalLink, Github, Eye, Sparkles, X, ArrowLeft } from 'lucide-react';
import { artifacts, artifactCategories } from '../data/portfolioData';

export default function ArtifactsPage({ onSelectArtifact, onBackHome }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter artifacts based on search query and category
  const filteredArtifacts = useMemo(() => {
    return artifacts.filter((artifact) => {
      const matchesCategory =
        selectedCategory === 'All' || artifact.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        artifact.title.toLowerCase().includes(q) ||
        artifact.shortDescription.toLowerCase().includes(q) ||
        artifact.category.toLowerCase().includes(q) ||
        artifact.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
  };

  return (
    <div style={{ padding: '1rem 0 4rem' }}>
      {onBackHome && (
        <button
          onClick={onBackHome}
          className="btn btn-ghost btn-sm"
          style={{ marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
        >
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </button>
      )}

      {/* Header */}
      <div className="section-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Layers className="text-gradient" size={24} />
          <span className="section-tag">// Digital Repository</span>
        </div>
        <h1 className="section-title">
          Artifacts & <span className="text-gradient">Engineering Systems</span>
        </h1>
        <p className="section-subtitle">
          An interactive archive of research prototypes, production software, distributed architectures, and developer tooling.
        </p>
      </div>

      {/* Search and Category Filter Controls */}
      <div className="artifacts-controls">
        {/* Search Bar */}
        <div className="search-box">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search artifacts by name, keyword, or tech stack (e.g., React, Go, Raft)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              style={{
                position: 'absolute',
                right: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer'
              }}
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="filter-pills">
          {artifactCategories.map((category) => (
            <button
              key={category}
              className={`filter-pill ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
              {category === 'All' ? ` (${artifacts.length})` : ''}
            </button>
          ))}
        </div>

        {/* Count Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
          <span>
            Showing <strong>{filteredArtifacts.length}</strong> of {artifacts.length} artifacts
          </span>
          {(searchQuery || selectedCategory !== 'All') && (
            <button
              onClick={handleResetFilters}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--accent-primary)',
                fontSize: '0.85rem',
                cursor: 'pointer',
                fontWeight: 600
              }}
            >
              Reset all filters
            </button>
          )}
        </div>
      </div>

      {/* Artifacts Grid */}
      {filteredArtifacts.length > 0 ? (
        <div className="artifacts-grid">
          {filteredArtifacts.map((artifact) => (
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
              {/* Thumbnail Cover */}
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

              {/* Body */}
              <div className="artifact-body">
                <span className="artifact-category">{artifact.category}</span>
                <h2 className="artifact-title">{artifact.title}</h2>
                <p className="artifact-desc">{artifact.shortDescription}</p>

                {/* Tech tags */}
                <div className="artifact-tags">
                  {artifact.tags.map((tag, idx) => (
                    <span key={idx} className="artifact-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metrics pill */}
                {artifact.metrics && (
                  <div
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-muted)',
                      background: 'rgba(255, 255, 255, 0.02)',
                      padding: '0.4rem 0.6rem',
                      borderRadius: '0.35rem',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    ⚡ {artifact.metrics}
                  </div>
                )}

                {/* Footer action */}
                <div className="artifact-footer">
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Eye size={16} />
                    <span>View Full Page &rarr;</span>
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {artifact.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div
          className="glass-card"
          style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: '50%',
              background: 'rgba(59, 130, 246, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-primary)'
            }}
          >
            <Filter size={24} />
          </div>
          <h3 style={{ fontSize: '1.25rem' }}>No artifacts matched your filter</h3>
          <p style={{ color: 'var(--text-muted)', maxWidth: 400 }}>
            Try adjusting your search query or picking another category filter above.
          </p>
          <button onClick={handleResetFilters} className="btn btn-secondary btn-sm">
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}

