import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { experienceTimeline } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" style={{ padding: '4rem 0' }}>
      <div className="section-header">
        <span className="section-tag">// Career Milestones</span>
        <h2 className="section-title">Experience & Journey</h2>
        <p className="section-subtitle">
          Roles where I designed production architectures, led teams, and solved mission-critical problems.
        </p>
      </div>

      <div className="timeline">
        {experienceTimeline.map((item, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-dot" />
            <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span className="badge" style={{ color: 'var(--accent-primary)', borderColor: 'var(--border-glow)' }}>
                  <Calendar size={13} />
                  {item.period}
                </span>
                <span className="badge" style={{ fontSize: '0.75rem' }}>
                  {item.badge}
                </span>
              </div>

              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {item.role}
                </h3>
                <span style={{ color: 'var(--text-highlight)', fontWeight: 600, fontSize: '0.95rem' }}>
                  {item.company}
                </span>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.55 }}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
