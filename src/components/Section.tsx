import type { ReactNode } from 'react';

interface Props {
  id: string;
  title: string;
  lead?: string;
  children: ReactNode;
}

/** Résumé-style row: heading on the left, content on the right. */
export function Section({ id, title, lead, children }: Props) {
  return (
    <section className="section" id={id} aria-labelledby={`${id}-title`}>
      <div className="wrap section-grid">
        <div className="section-head">
          <h2 id={`${id}-title`}>{title}</h2>
          {lead && <p className="section-lead">{lead}</p>}
        </div>
        <div className="section-body">{children}</div>
      </div>
    </section>
  );
}
