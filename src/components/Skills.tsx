import { resume } from '../data/resume';
import { Section } from './Section';

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="skills">
        {resume.skills.map((s) => (
          <div key={s.label} className="skill-row">
            <dt>{s.label}</dt>
            <dd>{s.items}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
