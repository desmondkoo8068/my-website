import type { Resume } from '../types';

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;
const logo = (file: string) => asset(`logos/${file}`);
const game = (file: string) => asset(`games/${file}`);

/** Everything on the site comes from this file. */
export const resume: Resume = {
  name: 'Desmond Koo',
  title: 'Frontend Developer',
  location: 'Malaysia',
  photo: asset('desmond.webp'),
  intro:
    'I build animation-driven interfaces for web and mobile. Four years of production frontend, on top of a 2D/3D animation background.',
  email: 'desmond8068@gmail.com',
  cvUrl: asset('resume.pdf'),

  links: [
    { label: 'GitHub', url: 'https://github.com/desmondkoo8068' },
    { label: 'Behance', url: 'https://www.behance.net/desmondkoo' },
    { label: 'LinkedIn', url: '' }, // add your LinkedIn URL (empty = hidden)
  ],

  about: [
    'I work across production frontend (TypeScript, React, Laravel) and real-time interactive UI in Cocos Creator. My animation background shapes how I build motion: an interface should feel responsive, not just work.',
    'I’m comfortable end to end, from a Figma spec to production UI, wiring up analytics, and squeezing frame budgets on low-end devices.',
  ],

  facts: [
    { label: 'Based in', value: 'Malaysia' },
    { label: 'Studied', value: 'BSc (Hons) Game Development, UTAR' },
    { label: 'Speaks', value: 'English, Malay, Chinese, Cantonese' },
  ],

  tracks: [
    { id: 'web', label: 'Web', line: 'I build web apps, from Figma to launch.', keys: [4, 12, 20, 28, 36] },
    { id: 'games', label: 'Games', line: 'I build game UI in Cocos Creator.', keys: [44, 52, 58, 68, 76] },
    { id: '3d', label: '3D', line: 'I animate in 2D and 3D.', keys: [84, 92, 100, 108, 116] },
  ],

  projects: [
    { name: 'Dementia Singapore', url: 'https://dementia.org.sg/', kind: 'Nonprofit website', status: 'Live', logo: logo('dsg-logo.png') },
    { name: 'Borneo Wildlife Cruise', url: 'https://uat.borneowildlifecruise.com/', kind: 'Cruise booking with map-based selection', status: 'Staging', logo: logo('bwc-logo.png') },
    { name: 'Shine Children & Youth Services', url: 'https://uat.shinenii.pepnco.com.sg/', kind: 'Social services website', status: 'Staging', logo: logo('shine-logo.png'), logoTone: 'dark' },
    { name: 'True Chiropractic', url: 'https://uat.tcg.pepnco.com.sg/', kind: 'Clinic website', status: 'Staging', logo: logo('tcg-logo.png') },
    { name: 'Heyya Braised Duck', url: 'https://uat.heyya.sg/', kind: 'Restaurant website', status: 'Staging', logo: logo('heyya-logo.png') },
    { name: 'Digital4IT', url: 'https://uat.digital4it.co/', kind: 'IT services website', status: 'Staging', logo: logo('d4-logo.png') },
    { name: '6ev', url: 'https://uat.6ev.dev/', kind: 'Company website', status: 'Staging', logo: logo('6ev-logo.png') },
    { name: 'PS9 City', url: 'https://ps9city.esoft8888.com/', kind: 'Gaming platform', status: 'Staging', logo: logo('ps9-logo.png') },
  ],

  // Newest first. Set hidden: true on any game to take it off the page.
  games: [
    { name: 'Bots of Fortune', url: 'https://m13.kingdomhall729.com/games/CZyh4FO_OF/index.html?test=1&currency=usd', cover: game('bots-of-fortune.webp') },
    { name: 'Pigs of Fortune', url: 'https://m13.kingdomhall729.com/games/d2_ze1tdrZ/index.html?test=1&currency=usd', cover: game('pigs-of-fortune.webp') },
    { name: 'Aztec Rush Bonanza', url: 'https://m13.kingdomhall729.com/games/ZAtsqdNx4B/index.html?test=1&currency=usd', cover: game('aztec-rush-bonanza.webp') },
    { name: 'Bengal Legend 500', url: 'https://m13.kingdomhall729.com/games/uHd7EJ25ca/index.html?test=1&currency=usd', cover: game('bengal-legend.webp') },
    { name: 'Wonder Ace', url: 'https://m13.ns86.kingdomhall729.com/games/dnrFpuKVaz/index.html?test=1&currency=usd', cover: game('wonder-ace.webp') },
    { name: 'Tides of Fortune', url: 'https://m13.ns86.kingdomhall729.com/games/ydILHIYCKp/index.html?test=1&currency=usd', cover: game('tides-of-fortune.webp') },
    { name: 'Flame of Fortune', url: 'https://m13.ns86.kingdomhall729.com/games/zvnbN51owO/index.html?test=1&currency=usd', cover: game('flame-of-fortune.webp') },
  ],

  experience: [
    {
      role: 'Frontend Developer',
      org: 'Dynamite Games',
      start: 'Jun 2025',
      end: 'Present',
      points: [
        'Build cross-platform interactive interfaces in Cocos Creator and TypeScript for web and mobile.',
        'Keep frame rates stable on entry-level phones with lazy asset loading, ASTC texture compression and fewer draw calls.',
        'Built reusable, event-driven UI modules with state machines and animation sequencing, so new features don’t need new interaction logic.',
        'Integrate Spine 2D animation, audio and VFX into the interface layer.',
        'Set up product analytics with AWS API Gateway and Athena, with dashboards in QuickSight.',
      ],
    },
    {
      role: 'Web Developer',
      org: 'Cipher Technology & 6EV (Pep & Co)',
      start: 'Jul 2022',
      end: 'Jun 2025',
      points: [
        'Shipped and maintained Laravel web apps across a client portfolio.',
        'Built responsive interfaces with Bootstrap, HTML5, CSS3 and jQuery.',
        'Owned MySQL schemas and query tuning, plus automated email and notification workflows.',
        'Delivered a Three.js open-world 3D web experience with camera control and asset streaming.',
      ],
      note: 'Builds included a healthcare booking system, a student portal, a wildlife cruise booking site, an HR portal, a food ordering platform and a donation platform.',
    },
    {
      role: 'Video Editor & Animator',
      org: 'Creator Studio (contract)',
      start: 'Apr 2017',
      end: 'Jan 2019',
      points: [
        '2D/3D character animation, rigging and motion assets, including UI transitions and splash sequences for a mobile web platform.',
        'Storyboards, motion graphics and early visual concepts for product launches.',
        'Edited long- and short-form video with sound design and motion graphics for a YouTube food-vlog channel.',
      ],
    },
  ],

  education: [
    { award: 'BSc (Hons) Game Development', school: 'Universiti Tunku Abdul Rahman (UTAR)', start: '2019', end: '2022', note: 'CGPA 3.39' },
    { award: 'Diploma in Creative Multimedia', school: 'SEGi College Subang Jaya', start: '2016', end: '2019' },
  ],

  skills: [
    { label: 'Languages', items: 'TypeScript, JavaScript, PHP, HTML5, CSS3' },
    { label: 'Frameworks', items: 'Cocos Creator, React, Laravel, Three.js, Bootstrap, jQuery' },
    { label: 'Game & web', items: 'Spine 2D, WebGL, REST APIs' },
    { label: 'Data & cloud', items: 'MySQL, AWS (API Gateway, Athena, QuickSight), Postman' },
    { label: 'Tooling', items: 'Git, SourceTree, Jenkins, phpMyAdmin, FileZilla' },
    { label: 'Design & motion', items: 'Blender, After Effects, Photoshop, Illustrator, Premiere Pro' },
  ],
};
