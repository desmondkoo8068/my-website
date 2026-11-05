import { useState } from 'react';
import { resume } from '../data/resume';
import { Section } from './Section';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const links = resume.links.filter((l) => l.url);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(resume.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${resume.email}`;
    }
  };

  return (
    <Section id="contact" title="Contact">
      <div className="contact-mail">
        <a className="contact-address" href={`mailto:${resume.email}`}>
          {resume.email}
        </a>
        <button type="button" className="btn btn-small" onClick={copy}>
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <ul className="contact-links">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.url} target="_blank" rel="noopener noreferrer">
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a href={resume.cvUrl} download="Desmond_Koo_Resume.pdf">
            CV (PDF)
          </a>
        </li>
      </ul>
    </Section>
  );
}
