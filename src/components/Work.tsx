import { resume } from '../data/resume';
import { Logo } from './Logo';
import { Section } from './Section';

export function Work() {
  const projects = resume.projects.filter((p) => !p.hidden);

  return (
    <Section id="work" title="Client sites" lead="Built at Cipher Technology and 6EV. Most link to the staging build.">
      <ul className="work">
        {projects.map((p) => (
          <li key={p.url}>
            <a className="work-row" href={p.url} target="_blank" rel="noopener noreferrer">
              <Logo src={p.logo} name={p.name} tone={p.logoTone} />
              <span className="work-text">
                <span className="work-name">{p.name}</span>
                <span className="work-kind">{p.kind}</span>
              </span>
              <span className="work-status" data-status={p.status}>
                {p.status}
              </span>
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
