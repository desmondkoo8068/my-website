import { useState } from 'react';
import { resume } from '../data/resume';
import { DopeSheet, activeTrackAt } from './DopeSheet';

export function Hero() {
  const [frame, setFrame] = useState(0);
  const active = activeTrackAt(frame, resume.tracks);

  return (
    <header className="hero" id="top">
      <div className="wrap">
        <h1 className="hero-name">{resume.name}</h1>

        {/* Changes as the playhead moves; the static intro below carries the same info for screen readers. */}
        <p className="hero-line" aria-hidden="true" key={active.id}>
          {active.line}
        </p>

        <div className="hero-meta">
          <p className="hero-intro">{resume.intro}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#work">
              See my work
            </a>
            <a className="btn" href={resume.cvUrl} download>
              Download CV
            </a>
          </div>
          {resume.availability && (
            <p className="hero-status">
              <span className="dot" aria-hidden="true" />
              {resume.availability} · {resume.location}
            </p>
          )}
        </div>

        <DopeSheet tracks={resume.tracks} frame={frame} onFrame={setFrame} />
      </div>
    </header>
  );
}
