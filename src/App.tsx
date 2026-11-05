import { About } from './components/About';
import { Contact } from './components/Contact';
import { Games } from './components/Games';
import { Experience } from './components/Experience';
import { Hero } from './components/Hero';
import { Nav } from './components/Nav';
import { Skills } from './components/Skills';
import { Work } from './components/Work';
import { resume } from './data/resume';

export default function App() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <Hero />
      <main id="main">
        <About />
        <Work />
        <Games />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <div className="wrap">
          © {new Date().getFullYear()} {resume.name}. Built with React and TypeScript.
        </div>
      </footer>
    </>
  );
}
