import React from 'react';
import { skillCategories, textBlock, blockEducation } from '../data/portfolioData';
import { Terminal, Code2, Server, Cpu, Cloud } from 'lucide-react';

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
          BLOCK: Custom Text Block with Heading
          ============================================================== */}
      <section className="portfolio-block" id="block-text">
        <div className="block-content">
          <div className="block-header-info">
            <h2 className="block-title">{textBlock.heading}</h2>
            {textBlock.subheading && (
              <p className="block-subtitle">{textBlock.subheading}</p>
            )}
          </div>

          <div className="custom-text-block-body">
            {textBlock.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="custom-text-paragraph">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
      {/* ==============================================================
          BLOCK: Technical Arsenal & Skills
          ============================================================== */}
      <section className="portfolio-block" id="block-skills">
        <div className="block-content">
          <div className="block-header-info">
            <h2 className="block-title">Technical Stack</h2>
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
          BLOCK: Custom Text Block with Heading
          ============================================================== */}
      <section className="portfolio-block" id="block-education">
        <div className="block-content">
          <div className="block-header-info">
            <h2 className="block-title">Education</h2>
            {blockEducation.subheading && (
              <p className="block-subtitle">test</p>
            )}
          </div>

          <div className="custom-text-block-body">
            {blockEducation.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="custom-text-paragraph">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
