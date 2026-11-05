import { resume } from '../data/resume';
import { Section } from './Section';

export function Education() {
  return (
    <Section id="education" title="Education">
      <ul className="study">
        {resume.education.map((s) => (
          <li key={s.award}>
            <div>
              <p className="study-award">{s.award}</p>
              <p className="study-school">
                {s.school}
                {s.note ? `, ${s.note}` : ''}
              </p>
            </div>
            <p className="job-when">
              {s.start} – {s.end}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
