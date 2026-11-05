import { resume } from '../data/resume';
import { Section } from './Section';

export function Games() {
  const games = resume.games.filter((g) => !g.hidden);
  if (!games.length) return null;

  return (
    <Section
      id="games"
      title="Games"
      lead="HTML5 slot games I’ve animated for. Each one opens a playable demo build in a new tab."
    >
      <ul className="games">
        {games.map((g) => (
          <li key={g.url}>
            <a className="game" href={g.url} target="_blank" rel="noopener noreferrer">
              <img src={g.cover} alt="" loading="lazy" width={480} height={480} />
              <span className="game-name">
                {g.name}
                <span className="visually-hidden"> (opens a demo in a new tab)</span>
              </span>
              <span className="game-play" aria-hidden="true">Play demo</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
