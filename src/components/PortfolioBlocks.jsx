import React from 'react';
import { skillCategories, experienceTimeline } from '../data/portfolioData';
import { Calendar, Terminal, Code2, Server, Cpu, Cloud } from 'lucide-react';

const categoryIcons = {
  "Frontend & UI": <Code2 size={18} color="var(--accent-primary)" />,
  "Backend & Systems": <Server size={18} color="#818cf8" />,
  "AI & Autonomous Agents": <Cpu size={18} color="#c084fc" />,
  "Cloud, Data & DevOps": <Cloud size={18} color="#34d399" />
};

export default function PortfolioBlocks() {
  return (
    <div className="portfolio-blocks-container">
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

