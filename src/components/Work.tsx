import { resume } from '../data/resume';
import { Logo } from './Logo';
import { Section } from './Section';

export function Work() {
  const projects = resume.projects.filter((p) => !p.hidden);
  const live = projects.filter((p) => p.status === 'Live').length;

  return (
    <Section
      id="work"
      title="Selected work"
      lead={`${projects.length} sites built for clients. ${live ? `${live} live, the rest` : 'All'} on staging servers you can open and click through.`}
    >
      <ul className="work">
        {projects.map((p) => (
          <li key={p.url}>
            <a className="work-row" href={p.url} target="_blank" rel="noopener noreferrer">
              <Logo src={p.logo} name={p.name} tone={p.logoTone} />
              <span className="work-name">{p.name}</span>
              <span className="work-kind">{p.kind}</span>
              <span className="work-status" data-status={p.status}>
                {p.status}
              </span>
              <span className="work-open">
                Open site
                <span className="visually-hidden"> (opens in a new tab)</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
