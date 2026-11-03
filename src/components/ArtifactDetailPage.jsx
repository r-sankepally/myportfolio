import React, { useEffect, useState, useMemo } from 'react';
import { marked } from 'marked';
import {
  ArrowLeft,
  CheckCircle2,
  Zap,
  Calendar,
  Share2,
  Check,
  ChevronLeft,
  ChevronRight,
  FileText,
  Code
} from 'lucide-react';
import { artifacts } from '../data/portfolioData';
import { getArtifactMarkdown } from '../utils/markdownLoader';

export default function ArtifactDetailPage({
  artifact,
  onBack,
  onNavigateArtifact
}) {
  const [copied, setCopied] = useState(false);
  const [showRawMarkdown, setShowRawMarkdown] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [artifact?.id]);

  // Set up marked configuration
  marked.setOptions({
    gfm: true,
    breaks: true
  });

  // Dynamically load Markdown file content for this artifact
  const rawMarkdown = useMemo(() => {
    if (!artifact?.id) return null;
    return getArtifactMarkdown(artifact.id);
  }, [artifact?.id]);

  const renderedHtml = useMemo(() => {
    if (!rawMarkdown) return null;
    return marked.parse(rawMarkdown);
  }, [rawMarkdown]);

  if (!artifact) {
    return (
      <div style={{ textAlign: 'center', padding: '5rem 1rem' }}>
        <h2>Artifact not found</h2>
        <button onClick={onBack} className="btn btn-secondary btn-sm" style={{ marginTop: '1rem' }}>
          Back to Artifacts
        </button>
      </div>
    );
  }

  // Find index for next/previous navigation
  const currentIndex = artifacts.findIndex((a) => a.id === artifact.id);
  const prevArtifact = currentIndex > 0 ? artifacts[currentIndex - 1] : null;
  const nextArtifact = currentIndex < artifacts.length - 1 ? artifacts[currentIndex + 1] : null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <article className="artifact-detail-page">
      {/* Top Navigation Row */}
      <div className="artifact-detail-nav">
        <button
          onClick={onBack}
          className="btn btn-ghost btn-sm"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
        >
          <ArrowLeft size={16} />
          <span>Back</span>
        </button>

        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          {rawMarkdown && (
            <button
              onClick={() => setShowRawMarkdown(!showRawMarkdown)}
              className="btn btn-ghost btn-sm"
              title="Toggle Raw Markdown vs Rendered View"
            >
              <Code size={15} />
              <span>{showRawMarkdown ? 'Rendered View' : 'View .md'}</span>
            </button>
          )}

          <button
            onClick={handleShare}
            className="btn btn-ghost btn-sm"
            title="Copy URL link to this artifact"
          >
            {copied ? <Check size={15} color="var(--accent-emerald)" /> : <Share2 size={15} />}
            <span>{copied ? 'Link Copied!' : 'Share'}</span>
          </button>
        </div>
      </div>

      {/* Header Info */}
      <header className="artifact-detail-header">
        <div className="artifact-detail-meta">
          <span className="artifact-category">{artifact.category}</span>
          <span className="footer-dot">•</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <Calendar size={14} />
            {artifact.date}
          </span>
          <span className="footer-dot">•</span>
          <span className="badge" style={{ color: 'var(--accent-blue)', borderColor: 'var(--border-glow)' }}>
            {artifact.status}
          </span>
        </div>

        <h1 className="artifact-detail-title">
          {artifact.title}
        </h1>

        <p className="artifact-detail-subtitle">
          {artifact.shortDescription}
        </p>
      </header>

      {/* Hero Visual / Blueprint Architecture Cover */}
      <div className="artifact-detail-hero-image">
        <img
          src={artifact.image}
          alt={artifact.title}
          className="artifact-detail-img"
        />
      </div>

      {/* Performance Metrics Banner */}
      {artifact.metrics && (
        <div className="artifact-detail-metrics-banner">
          <Zap size={20} color="var(--accent-blue)" />
          <span>{artifact.metrics}</span>
        </div>
      )}

      {/* Deep-Dive Content Sections */}
      <div className="artifact-detail-content-grid">
        {/* Left Column: Markdown Rendered Content or Fallback */}
        <div className="artifact-detail-main-text">
          {rawMarkdown ? (
            showRawMarkdown ? (
              /* Raw Markdown View */
              <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    Raw Markdown • src/artifacts/{artifact.id}.md
                  </span>
                </div>
                <pre style={{ margin: 0, padding: '1rem', background: 'var(--bg-surface)', borderRadius: '8px', overflowX: 'auto', fontSize: '0.88rem', fontFamily: 'var(--font-mono)' }}>
                  <code>{rawMarkdown}</code>
                </pre>
              </div>
            ) : (
              /* Rendered Markdown View */
              <div
                className="markdown-rendered-content artifact-markdown-article"
                dangerouslySetInnerHTML={{ __html: renderedHtml }}
              />
            )
          ) : (
            /* Fallback if no .md file found */
            <>
              <section className="artifact-detail-section">
                <h2 className="artifact-section-heading">Overview & System Architecture</h2>
                <p className="artifact-section-p">
                  {artifact.fullDescription}
                </p>
              </section>

              {artifact.keyFeatures && artifact.keyFeatures.length > 0 && (
                <section className="artifact-detail-section">
                  <h2 className="artifact-section-heading">Key Architectural Highlights</h2>
                  <ul className="artifact-highlights-list">
                    {artifact.keyFeatures.map((feat, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={18} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </>
          )}
        </div>

        {/* Right Column: Specifications & Tech Stack Card */}
        <aside className="artifact-detail-sidebar-specs">
          <div className="glass-card" style={{ padding: '1.75rem', borderRadius: '16px' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
              Technologies & Stack
            </h3>

            <div className="artifact-tags" style={{ marginBottom: '1.5rem' }}>
              {artifact.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="artifact-tag"
                  style={{ fontSize: '0.85rem', padding: '0.35rem 0.75rem' }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Category</span>
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{artifact.category}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Status</span>
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{artifact.status}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Date</span>
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{artifact.date}</span>
              </div>
              {rawMarkdown && (
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.5rem', borderTop: '1px dashed var(--border-subtle)' }}>
                  <span style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <FileText size={13} /> Source
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-blue)' }}>
                    {artifact.id}.md
                  </span>
                </div>
              )}
            </div>
          </div>
        </aside>
      </div>

      {/* Next & Previous Artifact Pagination Footer */}
      <nav className="artifact-detail-pagination">
        {prevArtifact ? (
          <button
            onClick={() => onNavigateArtifact(prevArtifact)}
            className="artifact-pagination-btn prev"
          >
            <ChevronLeft size={20} />
            <div>
              <span className="pagination-label">Previous Artifact</span>
              <span className="pagination-title">{prevArtifact.title}</span>
            </div>
          </button>
        ) : (
          <div />
        )}

        {nextArtifact ? (
          <button
            onClick={() => onNavigateArtifact(nextArtifact)}
            className="artifact-pagination-btn next"
          >
            <div>
              <span className="pagination-label">Next Artifact</span>
              <span className="pagination-title">{nextArtifact.title}</span>
            </div>
            <ChevronRight size={20} />
          </button>
        ) : (
          <div />
        )}
      </nav>
    </article>
  );
}
