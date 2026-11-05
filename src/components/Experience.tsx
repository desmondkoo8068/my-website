import { resume } from '../data/resume';
import { Section } from './Section';

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="timeline">
        {resume.experience.map((job) => (
          <li key={`${job.role}-${job.start}`} className="job">
            <p className="job-when">
              {job.start} – {job.end}
            </p>
            <div className="job-body">
              <h3>
                {job.role} <span className="job-org">at {job.org}</span>
              </h3>
              <ul>
                {job.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
