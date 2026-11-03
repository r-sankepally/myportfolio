import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Zap, Calendar, Tag, ShieldCheck } from 'lucide-react';

export default function ArtifactModal({ artifact, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    // Lock scroll when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!artifact) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cover Thumbnail with Close Button */}
        <div className="modal-header-thumb">
          <img
            src={artifact.image}
            alt={artifact.title}
          />
          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close details"
          >
            <X size={20} />
          </button>
          <span className="artifact-badge-status" style={{ top: '1rem', left: '1rem', right: 'auto' }}>
            {artifact.status}
          </span>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Header Metadata */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
              <span className="artifact-category">{artifact.category}</span>
              <span style={{ color: 'var(--text-muted)' }}>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <Calendar size={13} />
                {artifact.date}
              </span>
            </div>
            <h2 id="modal-title" style={{ fontSize: '1.8rem', fontWeight: 800, lineHeight: 1.25 }}>
              {artifact.title}
            </h2>
          </div>

          {/* Performance Metrics Pill */}
          {artifact.metrics && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1rem',
                background: 'rgba(59, 130, 246, 0.08)',
                border: '1px solid var(--border-glow)',
                borderRadius: '0.75rem',
                fontSize: '0.88rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-highlight)'
              }}
            >
              <Zap size={16} />
              <span>{artifact.metrics}</span>
            </div>
          )}

          {/* Detailed Overview */}
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Overview & Architecture</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, fontSize: '0.98rem' }}>
              {artifact.fullDescription}
            </p>
          </div>

          {/* Key Engineering Features */}
          {artifact.keyFeatures && (
            <div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>Key Architectural Highlights</h3>
              <ul className="modal-features-list">
                {artifact.keyFeatures.map((feat, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={18} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.6rem' }}>Technologies & Stack</h3>
            <div className="artifact-tags">
              {artifact.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="artifact-tag"
                  style={{ fontSize: '0.82rem', padding: '0.3rem 0.7rem' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border-subtle)'
            }}
          >
            {artifact.liveUrl && (
              <a
                href={artifact.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <span>Launch Live Demo</span>
                <ExternalLink size={16} />
              </a>
            )}

            {artifact.githubUrl && (
              <a
                href={artifact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <Github size={16} />
                <span>View Source Code</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="btn btn-ghost"
              style={{ marginLeft: 'auto' }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
