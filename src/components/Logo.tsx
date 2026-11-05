import { useState } from 'react';

/** Shows the project logo, or the first letter if the image is missing. */
export function Logo({ src, name, tone = 'light' }: { src?: string; name: string; tone?: 'light' | 'dark' }) {
  const [failed, setFailed] = useState(!src);
  return (
    <span className="logo" data-tone={tone} aria-hidden="true">
      {failed ? (
        <span className="logo-initial">{name.charAt(0)}</span>
      ) : (
        <img src={src} alt="" loading="lazy" onError={() => setFailed(true)} />
      )}
    </span>
  );
}
