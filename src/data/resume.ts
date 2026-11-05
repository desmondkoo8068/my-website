import type { Resume } from '../types';

const logo = (file: string) => `${import.meta.env.BASE_URL}logos/${file}`;
const game = (file: string) => `${import.meta.env.BASE_URL}games/${file}`;

/**
 * ─────────────────────────────────────────────────────────────
 *  Everything on the site comes from this file.
 *  Lines marked TODO are placeholders — replace them before going live.
 * ─────────────────────────────────────────────────────────────
 */
export const resume: Resume = {
  name: 'Desmond Koo',
  location: 'Singapore',
  intro:
    'Web developer and 3D / game animator. I build front ends that load fast and feel good to use, and I bring the same eye for motion to characters and games.',
  availability: 'Open to front-end and animation roles', // TODO: or set to '' to hide
  email: 'hello@example.com', // TODO: your real email
  cvUrl: `${import.meta.env.BASE_URL}resume.pdf`, // TODO: drop resume.pdf into /public

  links: [
    { label: 'GitHub', url: 'https://github.com/desmondkoo8068' },
    { label: 'Behance', url: 'https://www.behance.net/desmondkoo' },
    { label: 'LinkedIn', url: '' }, // TODO: add your LinkedIn URL (empty = hidden)
  ],

  about: [
    'I specialise in front-end development, with some back-end experience, and I animate in 3D. Most of my work sits where those meet: interfaces that move with purpose, and animation that has to run smoothly inside a browser or a game engine.',
    'I’ve shipped websites for businesses and nonprofits in Singapore and the region, and animated for HTML5 games. I like owning a piece of work from the first mockup to the last bug.',
  ],

  facts: [
    { label: 'Based in', value: 'Singapore' },
    { label: 'Focus', value: 'Front end, 3D animation, game animation' },
    { label: 'Stack', value: 'TypeScript, React, Blender, Cocos Creator' }, // TODO: adjust
  ],

  tracks: [
    {
      id: 'web',
      label: 'Web',
      line: 'I build websites that feel good to use.',
      keys: [4, 12, 20, 28, 36],
    },
    {
      id: '3d',
      label: '3D',
      line: 'I animate characters and objects in 3D.',
      keys: [44, 52, 58, 68, 76],
    },
    {
      id: 'games',
      label: 'Games',
      line: 'I animate for HTML5 games.',
      keys: [84, 92, 100, 108, 116],
    },
  ],

  projects: [
    { name: 'Dementia Singapore', url: 'https://dementia.org.sg/', track: 'web', kind: 'Nonprofit website', status: 'Live', logo: logo('dsg-logo.png') },
    { name: 'Borneo Wildlife Cruise', url: 'https://uat.borneowildlifecruise.com/', track: 'web', kind: 'Travel and tours website', status: 'Staging', logo: logo('bwc-logo.png') },
    { name: 'Shine Children & Youth Services', url: 'https://uat.shinenii.pepnco.com.sg/', track: 'web', kind: 'Social services website', status: 'Staging', logo: logo('shine-logo.png'), logoTone: 'dark' },
    { name: 'True Chiropractic', url: 'https://uat.tcg.pepnco.com.sg/', track: 'web', kind: 'Clinic website', status: 'Staging', logo: logo('tcg-logo.png') },
    { name: 'Heyya Braised Duck', url: 'https://uat.heyya.sg/', track: 'web', kind: 'Restaurant website', status: 'Staging', logo: logo('heyya-logo.png') },
    { name: 'Digital4IT', url: 'https://uat.digital4it.co/', track: 'web', kind: 'IT services website', status: 'Staging', logo: logo('d4-logo.png') },
    { name: '6ev', url: 'https://uat.6ev.dev/', track: 'web', kind: 'Company website', status: 'Staging', logo: logo('6ev-logo.png') },
    { name: 'PS9 City', url: 'https://ps9city.esoft8888.com/', track: 'web', kind: 'Gaming platform', status: 'Staging', logo: logo('ps9-logo.png') },
  ],

  // HTML5 games. Newest first. Set hidden: true on any game to take it off the page.
  games: [
    { name: 'Bots of Fortune', url: 'https://m13.kingdomhall729.com/games/CZyh4FO_OF/index.html?test=1&currency=usd', cover: game('bots-of-fortune.webp') },
    { name: 'Pigs of Fortune', url: 'https://m13.kingdomhall729.com/games/d2_ze1tdrZ/index.html?test=1&currency=usd', cover: game('pigs-of-fortune.webp') },
    { name: 'Aztec Rush Bonanza', url: 'https://m13.kingdomhall729.com/games/ZAtsqdNx4B/index.html?test=1&currency=usd', cover: game('aztec-rush-bonanza.webp') },
    { name: 'Bengal Legend 500', url: 'https://m13.kingdomhall729.com/games/uHd7EJ25ca/index.html?test=1&currency=usd', cover: game('bengal-legend.webp') },
    { name: 'Wonder Ace', url: 'https://m13.ns86.kingdomhall729.com/games/dnrFpuKVaz/index.html?test=1&currency=usd', cover: game('wonder-ace.webp') },
    { name: 'Tides of Fortune', url: 'https://m13.ns86.kingdomhall729.com/games/ydILHIYCKp/index.html?test=1&currency=usd', cover: game('tides-of-fortune.webp') },
    { name: 'Flame of Fortune', url: 'https://m13.ns86.kingdomhall729.com/games/zvnbN51owO/index.html?test=1&currency=usd', cover: game('flame-of-fortune.webp') },
  ],

  // TODO: replace with your real history (newest first).
  experience: [
    {
      role: 'Web Developer',
      org: 'Company name',
      start: '2024',
      end: 'Present',
      points: [
        'Built and maintained client websites from design handoff to launch.',
        'Wrote reusable front-end components and worked with the back-end team on APIs.',
      ],
    },
    {
      role: 'Game Animator',
      org: 'Company name',
      start: '2022',
      end: '2024',
      points: [
        'Animated symbols, wins and bonus sequences for HTML5 slot games.',
        'Kept animations light enough to run smoothly on mid-range phones.',
      ],
    },
    {
      role: 'Diploma / Degree',
      org: 'School name',
      start: '2019',
      end: '2022',
      points: ['Course name, notable modules or final-year project.'],
    },
  ],

  // TODO: trim or extend to match what you actually use.
  skills: {
    web: ['HTML & CSS', 'JavaScript', 'TypeScript', 'React', 'anime.js', 'Responsive design', 'REST APIs'],
    '3d': ['Blender', 'Rigging', 'Keyframe animation', 'Rendering'],
    games: ['Cocos Creator', 'Sprite & UI animation', 'Slot game effects', 'Performance on mobile'],
  },
};
