import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, MessageSquare, ArrowUpRight } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socialLinks.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" style={{ padding: '4rem 0' }}>
      <div className="section-header">
        <span className="section-tag">// Get In Touch</span>
        <h2 className="section-title">Let's Build Something Great</h2>
        <p className="section-subtitle">
          Have an interesting project, architectural challenge, or role you'd like to discuss? Reach out anytime.
        </p>
      </div>

      <div className="contact-grid">
        {/* Email Card with 1-Click Copy */}
        <div className="glass-card contact-card">
          <div className="contact-icon-wrapper">
            <Mail size={24} />
          </div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Direct Email</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Best for project inquiries, technical advisory, or engineering opportunities.
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto', paddingTop: '1rem' }}>
            <a
              href={`mailto:${socialLinks.email}`}
              className="btn btn-primary btn-sm"
              style={{ flexGrow: 1 }}
            >
              <span>Send Message</span>
              <ArrowUpRight size={15} />
            </a>
            <button
              onClick={handleCopyEmail}
              className="btn btn-secondary btn-sm"
              title="Copy email to clipboard"
            >
              {copied ? <Check size={16} color="var(--accent-emerald)" /> : <Copy size={16} />}
            </button>
          </div>
        </div>

        {/* GitHub Card */}
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card contact-card"
        >
          <div className="contact-icon-wrapper">
            <Github size={24} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>GitHub</h3>
            <ArrowUpRight size={18} color="var(--text-muted)" />
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Explore open-source repositories, experiments, benchmarks, and pull requests.
          </p>
          <span style={{ marginTop: 'auto', paddingTop: '1rem', color: 'var(--accent-primary)', fontSize: '0.88rem', fontWeight: 600 }}>
            Follow & contribute &rarr;
          </span>
        </a>

        {/* LinkedIn Card */}
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card contact-card"
        >
          <div className="contact-icon-wrapper">
            <Linkedin size={24} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>LinkedIn</h3>
            <ArrowUpRight size={18} color="var(--text-muted)" />
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Connect professionally, view endorsements, and track career milestones.
          </p>
          <span style={{ marginTop: 'auto', paddingTop: '1rem', color: 'var(--accent-primary)', fontSize: '0.88rem', fontWeight: 600 }}>
            Connect with me &rarr;
          </span>
        </a>
      </div>

      {/* Copy Toast Feedback */}
      {copied && (
        <div className="toast">
          <Check size={18} color="var(--accent-emerald)" />
          <span>Email copied to clipboard!</span>
        </div>
      )}
    </section>
  );
}
