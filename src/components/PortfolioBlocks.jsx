import React from 'react';
import { artifacts, skillCategories, experienceTimeline } from '../data/portfolioData';
import { Eye, Calendar, Sparkles, Terminal, Code2, Server, Cpu, Cloud, Briefcase } from 'lucide-react';

const categoryIcons = {
  "Frontend & UI": <Code2 size={18} color="var(--accent-primary)" />,
  "Backend & Systems": <Server size={18} color="#818cf8" />,
  "AI & Autonomous Agents": <Cpu size={18} color="#c084fc" />,
  "Cloud, Data & DevOps": <Cloud size={18} color="#34d399" />
};

export default function PortfolioBlocks({ onSelectArtifact, onOpenArtifactsPage }) {
  const featuredArtifacts = artifacts.filter(a => a.featured).slice(0, 3);

  return (
    <div className="portfolio-blocks-container">
      {/* ==============================================================
          BLOCK 01: Featured Systems & Artifacts
          ============================================================== */}
      <section className="portfolio-block" id="block-01">
        <div className="block-label-badge">
          <span>block 01</span>
        </div>

        <div className="block-content">
          <div className="block-header-info">
            <h2 className="block-title">Featured Systems & Architectures</h2>
            <p className="block-subtitle">
              Selected production systems, agentic workflow engines, and distributed software.
            </p>
          </div>

          <div className="block-artifacts-grid">
            {featuredArtifacts.map((artifact) => (
              <div
                key={artifact.id}
                className="block-artifact-card"
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
                <div className="block-artifact-thumb-wrapper">
                  <img
                    src={artifact.image}
                    alt={artifact.title}
                    className="block-artifact-thumb"
                    loading="lazy"
                  />
                  <span className="block-artifact-status">
                    {artifact.status}
                  </span>
                </div>

                <div className="block-artifact-body">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="artifact-category">{artifact.category}</span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{artifact.date}</span>
                  </div>
                  <h3 className="block-artifact-title">{artifact.title}</h3>
                  <p className="block-artifact-desc">{artifact.shortDescription}</p>

                  <div className="artifact-tags">
                    {artifact.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="artifact-tag">{tag}</span>
                    ))}
                    {artifact.tags.length > 3 && (
                      <span className="artifact-tag">+{artifact.tags.length - 3}</span>
                    )}
                  </div>

                  <div className="block-artifact-footer">
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Eye size={15} />
                      <span>Inspect Artifact</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <button
              onClick={onOpenArtifactsPage}
              className="btn btn-secondary btn-sm"
            >
              <span>Explore All {artifacts.length} Artifacts &rarr;</span>
            </button>
          </div>
        </div>
      </section>

      {/* ==============================================================
          BLOCK 02: Technical Arsenal & Skills
          ============================================================== */}
      <section className="portfolio-block" id="block-02">
        <div className="block-label-badge">
          <span>block 02</span>
        </div>

        <div className="block-content">
          <div className="block-header-info">
            <h2 className="block-title">Technical Arsenal & Core Stack</h2>
            <p className="block-subtitle">
              Languages, runtimes, distributed tools, and frameworks used to engineer resilient systems.
            </p>
          </div>

          <div className="skills-grid">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="skill-card glass-card">
                <h3 className="skill-category-title">
                  {categoryIcons[cat.category] || <Terminal size={18} />}
                  <span>{cat.category}</span>
                </h3>
                <div className="skill-pills">
                  {cat.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==============================================================
          BLOCK 03: Experience & Engineering Milestones
          ============================================================== */}
      <section className="portfolio-block" id="block-03">
        <div className="block-label-badge">
          <span>block 03</span>
        </div>

        <div className="block-content">
          <div className="block-header-info">
            <h2 className="block-title">Engineering Journey & Milestones</h2>
            <p className="block-subtitle">
              Professional history scaling platforms, architecting systems, and leading engineering initiatives.
            </p>
          </div>

          <div className="timeline">
            {experienceTimeline.map((item, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-dot" />
                <div className="glass-card" style={{ padding: '1.25rem 1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <span className="badge" style={{ color: 'var(--accent-primary)', borderColor: 'var(--border-glow)' }}>
                      <Calendar size={13} />
                      {item.period}
                    </span>
                    <span className="badge" style={{ fontSize: '0.75rem' }}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {item.role} <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>@ {item.company}</span>
                  </h3>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.55, marginTop: '0.4rem' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
