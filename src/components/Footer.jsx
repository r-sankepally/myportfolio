import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';

export default function Footer({ setActivePage }) {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = (e) => {
    // If user clicks, open mailto, and also copy to clipboard
    navigator.clipboard.writeText(socialLinks.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <footer className="wireframe-footer">
      <div className="footer-left-content">
        <div className="footer-branding-row">
          <span className="footer-name">{personalInfo.name}</span>
          <span className="footer-dot">•</span>
          <span className="footer-sub">Portfolio & Artifacts</span>

          {/* Blue Outline Mail Icon Button */}
          <a
            href={`mailto:${socialLinks.email}`}
            onClick={handleEmailClick}
            className="footer-mail-btn"
            title={`Email ${personalInfo.name} (${socialLinks.email})`}
            aria-label="Send Email"
          >
            {copied ? <Check size={18} color="var(--accent-emerald)" /> : <Mail size={18} strokeWidth={2} />}
          </a>
        </div>

        <p className="footer-copyright">
          © {new Date().getFullYear()} {personalInfo.name}. Built with Vite & React. Deployed to GitHub Pages.
        </p>
      </div>
    </footer>
  );
}
