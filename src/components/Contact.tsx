import { useState } from 'react';
import { resume } from '../data/resume';

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
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <h2 id="contact-title">Hiring, or have a project in mind?</h2>
        <p className="contact-lead">Email is the fastest way to reach me. I usually reply within a day.</p>
        <div className="contact-mail">
          <a className="contact-address" href={`mailto:${resume.email}`}>
            {resume.email}
          </a>
          <button type="button" className="btn btn-small" onClick={copy}>
            {copied ? 'Copied' : 'Copy email'}
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
        </ul>
      </div>
    </section>
  );
}
