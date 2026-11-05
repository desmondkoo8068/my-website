import { resume } from '../data/resume';

const LINKS = [
  { href: '#experience', label: 'Experience' },
  { href: '#games', label: 'Games' },
  { href: '#work', label: 'Client sites' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export function Nav() {
  return (
    <nav className="nav" aria-label="Main">
      <div className="wrap nav-inner">
        <a className="nav-brand" href="#top">
          <span className="diamond" aria-hidden="true" />
          {resume.name}
        </a>
        <ul className="nav-links">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
        <a className="btn btn-small" href={resume.cvUrl} download="Desmond_Koo_Resume.pdf">
          CV
        </a>
      </div>
    </nav>
  );
}
