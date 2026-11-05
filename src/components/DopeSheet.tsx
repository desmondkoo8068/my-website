import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from 'react';
import type { Track } from '../types';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

export const TOTAL_FRAMES = 120;
const REST_FRAME = 20;
const TICKS = [0, 20, 40, 60, 80, 100, 120];

const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));
const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const pad = (n: number) => String(n).padStart(3, '0');

/** Which track the playhead is "on": the one whose key range is nearest. */
export function activeTrackAt(frame: number, tracks: Track[]): Track {
  let best = tracks[0];
  let bestDist = Infinity;
  for (const t of tracks) {
    const lo = Math.min(...t.keys);
    const hi = Math.max(...t.keys);
    const d = frame < lo ? lo - frame : frame > hi ? frame - hi : 0;
    if (d < bestDist) {
      best = t;
      bestDist = d;
    }
  }
  return best;
}

interface Props {
  tracks: Track[];
  frame: number;
  onFrame: (frame: number) => void;
}

/**
 * An animator's dope sheet used as the hero. On load the playhead plays
 * through once and settles; visitors can then drag it, click a lane, or use
 * the arrow keys to scrub between Web, 3D and Games.
 */
export function DopeSheet({ tracks, frame, onFrame }: Props) {
  const lanesRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const touched = useRef(false);
  const [playing, setPlaying] = useState(false);
  const reduced = usePrefersReducedMotion();
  const active = activeTrackAt(frame, tracks);

  // One orchestrated moment: play 0 → 120, then ease back to the Web track.
  useEffect(() => {
    if (reduced) {
      onFrame(REST_FRAME);
      return;
    }
    let raf = 0;
    const PLAY_MS = 2600;
    const SETTLE_MS = 900;
    const startAt = performance.now() + 500;
    setPlaying(true);

    const step = (now: number) => {
      if (touched.current) return setPlaying(false);
      const t = now - startAt;
      if (t < 0) {
        onFrame(0);
      } else if (t < PLAY_MS) {
        onFrame(Math.round(easeInOutCubic(t / PLAY_MS) * TOTAL_FRAMES));
      } else if (t < PLAY_MS + SETTLE_MS) {
        const s = easeInOutCubic((t - PLAY_MS) / SETTLE_MS);
        onFrame(Math.round(TOTAL_FRAMES + (REST_FRAME - TOTAL_FRAMES) * s));
      } else {
        onFrame(REST_FRAME);
        return setPlaying(false);
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [reduced, onFrame]);

  const frameFromX = useCallback((clientX: number) => {
    const rect = lanesRef.current!.getBoundingClientRect();
    return clamp(Math.round(((clientX - rect.left) / rect.width) * TOTAL_FRAMES), 0, TOTAL_FRAMES);
  }, []);

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    touched.current = true;
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    onFrame(frameFromX(e.clientX));
  };
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (dragging.current) onFrame(frameFromX(e.clientX));
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const keys = tracks.flatMap((t) => t.keys).sort((a, b) => a - b);
    let next: number | null = null;
    if (e.key === 'ArrowRight') next = e.shiftKey ? (keys.find((k) => k > frame) ?? TOTAL_FRAMES) : frame + 1;
    if (e.key === 'ArrowLeft') next = e.shiftKey ? ([...keys].reverse().find((k) => k < frame) ?? 0) : frame - 1;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = TOTAL_FRAMES;
    if (next === null) return;
    e.preventDefault();
    touched.current = true;
    onFrame(clamp(next, 0, TOTAL_FRAMES));
  };

  const pct = (f: number) => `${(f / TOTAL_FRAMES) * 100}%`;

  return (
    <figure className="sheet" aria-label="Animation timeline showing my three disciplines">
      <figcaption className="sheet-bar">
        <span className="sheet-frame">
          Frame <output>{pad(frame)}</output>
          <span className="sheet-total"> / {TOTAL_FRAMES}</span>
        </span>
        <span className="sheet-hint">{playing ? 'Playing…' : 'Drag the playhead'}</span>
      </figcaption>

      <div className="sheet-grid">
        <div className="sheet-labels" aria-hidden="true">
          <span className="sheet-ruler-spacer" />
          {tracks.map((t) => (
            <span key={t.id} className="sheet-label" data-active={t.id === active.id}>
              {t.label}
            </span>
          ))}
        </div>

        <div
          ref={lanesRef}
          className="sheet-lanes"
          role="slider"
          tabIndex={0}
          aria-label="Timeline playhead"
          aria-valuemin={0}
          aria-valuemax={TOTAL_FRAMES}
          aria-valuenow={frame}
          aria-valuetext={`Frame ${frame}, ${active.label} track`}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onKeyDown={onKeyDown}
        >
          <div className="sheet-ruler" aria-hidden="true">
            {TICKS.map((t) => (
              <span key={t} className="tick" style={{ left: pct(t) }}>
                {t}
              </span>
            ))}
          </div>

          {tracks.map((t) => (
            <div key={t.id} className="lane" data-active={t.id === active.id} aria-hidden="true">
              <span
                className="lane-span"
                style={{ left: pct(Math.min(...t.keys)), width: pct(Math.max(...t.keys) - Math.min(...t.keys)) }}
              />
              {t.keys.map((k) => (
                <span key={k} className="key" data-hit={k <= frame} style={{ left: pct(k) }} />
              ))}
            </div>
          ))}

          <div className="playhead" style={{ left: pct(frame) }} aria-hidden="true">
            <span className="playhead-cap">{frame}</span>
          </div>
        </div>
      </div>
    </figure>
  );
}
