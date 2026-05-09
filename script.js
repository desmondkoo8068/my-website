// Mark <html> so CSS knows JS-driven initial states should apply.
document.documentElement.classList.add('js');

document.getElementById('year').textContent = new Date().getFullYear();

// Helper: split text into per-character spans.
function splitChars(el) {
  const text = el.dataset.text || el.textContent;
  el.textContent = '';
  return [...text].map(ch => {
    const span = document.createElement('span');
    span.className = 'char';
    span.textContent = ch === ' ' ? ' ' : ch;
    el.appendChild(span);
    return span;
  });
}

// Helper: split text into per-word spans (preserves spaces).
function splitWords(el) {
  const text = el.textContent;
  el.textContent = '';
  return text.split(/(\s+)/).map(part => {
    if (/^\s+$/.test(part)) {
      el.appendChild(document.createTextNode(part));
      return null;
    }
    const span = document.createElement('span');
    span.className = 'word';
    span.textContent = part;
    el.appendChild(span);
    return span;
  }).filter(Boolean);
}

document.addEventListener('DOMContentLoaded', () => {

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Safety net: if anime.js failed to load or animations didn't fire,
  // make sure key text remains visible after a generous delay.
  setTimeout(() => {
    document.querySelectorAll('.hero-title .char, .hero-sub, .about-text .word, .card')
      .forEach(el => {
        if (getComputedStyle(el).opacity === '0') el.style.opacity = '1';
      });
  }, 3500);

  // ---------- 1. Hero entrance (timeline) ----------
  const heroTitle = document.querySelector('.hero-title');
  splitChars(heroTitle);

  const heroTimeline = anime.timeline({
    easing: 'easeOutExpo',
  });

  heroTimeline
    .add({
      targets: '.hero-title .char',
      opacity: [0, 1],
      translateY: [80, 0],
      rotateZ: [18, 0],
      scale: [0.6, 1],
      duration: 1100,
      delay: anime.stagger(55, { start: 200 }),
      easing: 'easeOutElastic(1, .7)',
      complete: () => {
        document.querySelectorAll('.hero-title .char').forEach(c => {
          c.style.opacity = '1';
        });
      },
    })
    .add({
      targets: '.hero-sub',
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 700,
    }, '-=600')
    .add({
      targets: '.hero-underline path',
      strokeDashoffset: [600, 0],
      duration: 1400,
      easing: 'easeInOutQuad',
    }, '-=500')
    .add({
      targets: '.scroll-cue',
      opacity: [0, 0.8],
      translateY: [-10, 0],
      duration: 600,
    }, '-=600');

  // Continuous gold color/glow wave sweeping across the title letters.
  anime({
    targets: '.hero-title .char',
    color: ['#ffffff', '#ffd700', '#ffffff'],
    textShadow: [
      '0 0 0px rgba(255, 215, 0, 0)',
      '0 0 30px rgba(255, 215, 0, 0.85)',
      '0 0 0px rgba(255, 215, 0, 0)',
    ],
    translateY: [0, -8, 0],
    duration: 2000,
    delay: anime.stagger(100, { from: 'first' }),
    easing: 'easeInOutSine',
    loop: true,
  });

  // Floating micro-animations on hero title letters
  anime({
    targets: '.hero-title .char',
    rotate: () => anime.random(-2, 2),
    duration: 3000 + anime.random(0, 2000),
    delay: anime.stagger(50),
    direction: 'alternate',
    easing: 'easeInOutSine',
    loop: true,
  });

  // Bouncing scroll cue dot.
  anime({
    targets: '.scroll-cue span',
    translateY: [0, 10],
    opacity: [{ value: 1 }, { value: 0.2 }],
    duration: 1200,
    easing: 'easeInOutSine',
    direction: 'alternate',
    loop: true,
  });

  // ---------- 2. Floating background orbs ----------
  anime({
    targets: '.orb-1',
    translateX: () => anime.random(-80, 120),
    translateY: () => anime.random(-60, 100),
    scale: [1, 1.15],
    duration: 12000,
    easing: 'easeInOutSine',
    direction: 'alternate',
    loop: true,
  });
  anime({
    targets: '.orb-2',
    translateX: () => anime.random(-120, 60),
    translateY: () => anime.random(-80, 80),
    scale: [1, 1.1],
    duration: 14000,
    easing: 'easeInOutSine',
    direction: 'alternate',
    loop: true,
  });
  anime({
    targets: '.orb-3',
    translateX: () => anime.random(-100, 100),
    translateY: () => anime.random(-100, 60),
    scale: [1, 1.2],
    duration: 16000,
    easing: 'easeInOutSine',
    direction: 'alternate',
    loop: true,
  });

  // ---------- 3. Scroll-triggered reveals ----------
  const aboutText = document.querySelector('.about-text');
  if (aboutText) splitWords(aboutText);

  const animateSection = (section) => {
    if (section.dataset.animated) return;
    section.dataset.animated = 'true';

    // Animate the section title; the gold underline grows via CSS once `.is-revealed` is added.
    const title = section.querySelector('.section-title');
    if (title) {
      anime({
        targets: title,
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
        easing: 'easeOutExpo',
        complete: () => title.classList.add('is-revealed'),
      });
    }

    // About: stagger words.
    if (section.classList.contains('about')) {
      anime({
        targets: section.querySelectorAll('.about-text .word'),
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 700,
        delay: anime.stagger(35, { start: 200 }),
        easing: 'easeOutQuad',
      });
    }

    // Projects: grid stagger reveal.
    const cards = section.querySelectorAll('.card');
    if (cards.length) {
      anime({
        targets: cards,
        opacity: [0, 1],
        translateY: [40, 0],
        scale: [0.95, 1],
        duration: 800,
        delay: anime.stagger(80, { start: 250, grid: [3, 3], from: 'first' }),
        easing: 'easeOutCubic',
      });
    }

    // Reel-spin: each game image drops in like a slot reel landing.
    if (!prefersReduced && section.classList.contains('games-section')) {
      anime({
        targets: section.querySelectorAll('.card-image img'),
        translateY: ['-300%', '0%'],
        duration: 1300,
        delay: anime.stagger(200, { start: 500 }),
        easing: 'easeOutBounce',
      });
    }
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateSection(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach(s => observer.observe(s));

  // ---------- 4. Card hover: parallax glow + tilt ----------
  document.querySelectorAll('.card').forEach(card => {
    let raf = null;
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const px = (x / rect.width) * 100;
      const py = (y / rect.height) * 100;

      // Update CSS variables for the radial-gradient ::before.
      card.style.setProperty('--mx', px + '%');
      card.style.setProperty('--my', py + '%');

      // Enhanced 3D tilt with more dramatic effect.
      const rx = ((y / rect.height) - 0.5) * -8;
      const ry = ((x / rect.width) - 0.5) * 8;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-8px) scale(1.02)`;
      });
    });
    card.addEventListener('mouseleave', () => {
      anime.remove(card);
      anime({
        targets: card,
        rotateX: 0,
        rotateY: 0,
        translateY: 0,
        scale: 1,
        duration: 700,
        easing: 'spring(1, 80, 12, 0)',
      });
    });
  });

  // ---------- 5. Magnetic "View Project" buttons ----------
  if (!prefersReduced) {
    document.querySelectorAll('.card a').forEach(btn => {
      const card = btn.closest('.card');
      let raf = null;
      const radius = 160;
      const pull = 0.3;

      card.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        const dist = Math.hypot(dx, dy);

        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          if (dist < radius) {
            btn.style.transform = `translate(${dx * pull}px, ${dy * pull}px)`;
          } else {
            btn.style.transform = '';
          }
        });
      });

      card.addEventListener('mouseleave', () => {
        anime.remove(btn);
        anime({
          targets: btn,
          translateX: 0,
          translateY: 0,
          duration: 600,
          easing: 'spring(1, 80, 10, 0)',
        });
      });
    });
  }

  // ---------- 6. Gold sparkle burst on link click ----------
  document.querySelectorAll('.card a').forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (prefersReduced) return;
      const burst = document.createElement('span');
      burst.className = 'sparkle-burst';
      burst.style.left = e.clientX + 'px';
      burst.style.top = e.clientY + 'px';
      document.body.appendChild(burst);

      const dots = [];
      for (let i = 0; i < 12; i++) {
        const d = document.createElement('span');
        d.className = 'sparkle-dot';
        burst.appendChild(d);
        dots.push(d);
      }

      anime({
        targets: dots,
        translateX: () => anime.random(-80, 80),
        translateY: () => anime.random(-80, 80),
        scale: [1, 0],
        opacity: [1, 0],
        duration: 750,
        easing: 'easeOutCubic',
        complete: () => burst.remove(),
      });
    });
  });

  // ---------- 7. Cursor glow follow with enhanced effects ----------
  const glow = document.querySelector('.cursor-glow');
  if (glow && window.matchMedia('(hover: hover)').matches) {
    let mouseX = 0, mouseY = 0;
    let curX = 0, curY = 0;
    let lastX = 0, lastY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      glow.style.opacity = '1';

      // Create occasional sparkles on mouse movement
      if (!prefersReduced && Math.random() > 0.92) {
        const sparkle = document.createElement('span');
        sparkle.className = 'sparkle-dot';
        sparkle.style.position = 'fixed';
        sparkle.style.left = mouseX + 'px';
        sparkle.style.top = mouseY + 'px';
        sparkle.style.pointerEvents = 'none';
        document.body.appendChild(sparkle);

        anime({
          targets: sparkle,
          opacity: [1, 0],
          scale: [1, 0],
          translateX: () => anime.random(-30, 30),
          translateY: () => anime.random(-30, 30),
          duration: 600,
          easing: 'easeOutCubic',
          complete: () => sparkle.remove(),
        });
      }
    });
    document.addEventListener('mouseleave', () => { glow.style.opacity = '0'; });

    const tick = () => {
      curX += (mouseX - curX) * 0.15;
      curY += (mouseY - curY) * 0.15;
      glow.style.left = curX + 'px';
      glow.style.top = curY + 'px';
      lastX = curX;
      lastY = curY;
      requestAnimationFrame(tick);
    };
    tick();
  }

  // ---------- 8. Scroll-driven tilt + parallax for cards ----------
  if (!prefersReduced) {
    const slotImgs = Array.from(document.querySelectorAll('.tilt-card .card-image'));
    let lastY = window.scrollY;
    let velocity = 0;
    let pending = null;

    const applyTilt = () => {
      pending = null;
      const vh = window.innerHeight;
      velocity *= 0.85;

      slotImgs.forEach(wrap => {
        const rect = wrap.getBoundingClientRect();
        if (rect.bottom < -100 || rect.top > vh + 100) return;

        // Position: -1 near bottom of viewport, 0 at center, 1 near top.
        const progress = Math.max(-1, Math.min(1,
          (rect.top + rect.height / 2 - vh / 2) / (vh / 2)
        ));
        const baseTilt = -progress * 5;       // tilt from viewport position
        const velTilt = velocity * 0.12;      // direction-aware velocity boost
        const ty = -progress * 10;            // parallax offset
        wrap.style.transform =
          `perspective(700px) rotateX(${baseTilt + velTilt}deg) translateY(${ty}px)`;
      });

      if (Math.abs(velocity) > 0.1) {
        pending = requestAnimationFrame(applyTilt);
      }
    };

    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      velocity = y - lastY;
      lastY = y;
      if (!pending) pending = requestAnimationFrame(applyTilt);
    }, { passive: true });

    applyTilt();
  }

});
