import { resume } from '../data/resume';
import { Section } from './Section';

export function Skills() {
  return (
    <Section id="skills" title="Skills" lead="Grouped by the same three tracks as the timeline up top.">
      <div className="skills">
        {resume.tracks.map((t) => (
          <div key={t.id} className="skill-group">
            <h3>
              <span className="diamond" aria-hidden="true" />
              {t.label}
            </h3>
            <ul className="tags">
              {resume.skills[t.id].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
