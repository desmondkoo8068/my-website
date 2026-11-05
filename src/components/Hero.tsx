import { useState } from 'react';
import { resume } from '../data/resume';
import { DopeSheet, activeTrackAt } from './DopeSheet';

export function Hero() {
  const [frame, setFrame] = useState(0);
  const active = activeTrackAt(frame, resume.tracks);

  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div className="hero-id">
          <img className="hero-photo" src={resume.photo} alt={`Photo of ${resume.name}`} width={480} height={480} />
          <div>
            <h1 className="hero-name">{resume.name}</h1>
            <p className="hero-title">
              {resume.title}, {resume.location}
            </p>
          </div>
        </div>

        <p className="hero-intro">{resume.intro}</p>

        <div className="hero-actions">
          <a className="btn btn-primary" href={resume.cvUrl} download="Desmond_Koo_Resume.pdf">
            Download CV (PDF)
          </a>
          <a className="btn" href={`mailto:${resume.email}`}>
            Email me
          </a>
        </div>

        <div className="hero-sheet">
          {/* Changes as the playhead moves; decorative, so hidden from screen readers. */}
          <p className="hero-line" aria-hidden="true" key={active.id}>
            {active.line}
          </p>
          <DopeSheet tracks={resume.tracks} frame={frame} onFrame={setFrame} />
        </div>
      </div>
    </header>
  );
}
