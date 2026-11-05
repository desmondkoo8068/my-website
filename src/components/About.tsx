import { resume } from '../data/resume';
import { Section } from './Section';

export function About() {
  return (
    <Section id="about" title="About">
      <div className="about">
        <div className="about-copy">
          {resume.about.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <dl className="facts">
          {resume.facts.map((f) => (
            <div key={f.label} className="fact">
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
