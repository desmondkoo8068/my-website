import { resume } from '../data/resume';
import { Section } from './Section';

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="jobs">
        {resume.experience.map((job) => (
          <li key={`${job.org}-${job.start}`} className="job">
            <div className="job-top">
              <h3>
                {job.role}
                <span className="job-org">{job.org}</span>
              </h3>
              <p className="job-when">
                {job.start} – {job.end}
              </p>
            </div>
            <ul className="job-points">
              {job.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
            {job.note && <p className="job-note">{job.note}</p>}
          </li>
        ))}
      </ol>
    </Section>
  );
}
