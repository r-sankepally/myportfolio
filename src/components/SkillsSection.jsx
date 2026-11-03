import React from 'react';
import { Code2, Server, Cpu, Cloud, Terminal } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const categoryIcons = {
  "Frontend & UI": <Code2 size={20} color="#38bdf8" />,
  "Backend & Systems": <Server size={20} color="#818cf8" />,
  "AI & Autonomous Agents": <Cpu size={20} color="#c084fc" />,
  "Cloud, Data & DevOps": <Cloud size={20} color="#34d399" />
};

export default function SkillsSection() {
  return (
    <section id="skills" style={{ padding: '4rem 0' }}>
      <div className="section-header">
        <span className="section-tag">// Core Competencies</span>
        <h2 className="section-title">Technical Skills & Toolkit</h2>
        <p className="section-subtitle">
          Technologies, runtimes, and architectural patterns I work with on a daily basis.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="glass-card skill-card">
            <h3 className="skill-category-title">
              {categoryIcons[cat.category] || <Terminal size={20} />}
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
    </section>
  );
}

