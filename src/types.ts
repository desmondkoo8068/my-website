export type TrackId = 'web' | '3d' | 'games';

export interface Track {
  id: TrackId;
  label: string;
  /** Line shown in the hero while the playhead is on this track. */
  line: string;
  /** Keyframe positions (0–120) drawn on the hero dope sheet. */
  keys: number[];
}

export interface Project {
  name: string;
  url: string;
  kind: string;
  status: 'Live' | 'Staging';
  logo?: string;
  /** 'dark' puts the logo on a dark tile (for white logos). */
  logoTone?: 'light' | 'dark';
  hidden?: boolean;
}

export interface Game {
  name: string;
  url: string;
  cover: string;
  hidden?: boolean;
}

export interface Job {
  role: string;
  org: string;
  start: string;
  end: string;
  points: string[];
  note?: string;
}

export interface Study {
  award: string;
  school: string;
  start: string;
  end: string;
  note?: string;
}

export interface LinkItem {
  label: string;
  url: string;
}

export interface Resume {
  name: string;
  title: string;
  location: string;
  photo: string;
  intro: string;
  email: string;
  cvUrl: string;
  links: LinkItem[];
  about: string[];
  facts: { label: string; value: string }[];
  tracks: Track[];
  projects: Project[];
  games: Game[];
  experience: Job[];
  education: Study[];
  skills: { label: string; items: string }[];
}
