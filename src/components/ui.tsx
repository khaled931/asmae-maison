import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <section className="page-hero">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{intro}</p>
    </section>
  );
}

export function CardGrid({ children }: { children: ReactNode }) {
  return <div className="card-grid">{children}</div>;
}

export function SurfaceCard({ children }: { children: ReactNode }) {
  return <article className="surface-card">{children}</article>;
}

export function SplitSection({ left, right }: { left: ReactNode; right: ReactNode }) {
  return (
    <section className="split-section">
      <div>{left}</div>
      <div>{right}</div>
    </section>
  );
}
