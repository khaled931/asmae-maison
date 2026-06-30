import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, localizedPath } from "@/lib/i18n";
import { siteContent } from "@/content/site";
import { CardGrid, SurfaceCard } from "@/components/ui";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  return {
    title: siteContent[locale].meta.title,
    description: siteContent[locale].meta.description
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = siteContent[locale];

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">{content.home.eyebrow}</p>
          <h1>{content.home.title}</h1>
          <p>{content.home.intro}</p>
          <div className="cta-row">
            <Link className="button primary" href={localizedPath(locale, "/contact")}>
              {content.home.primaryCta}
            </Link>
            <Link className="button secondary" href={localizedPath(locale, "/programmes")}>
              {content.home.secondaryCta}
            </Link>
          </div>
        </div>
        <aside className="hero-panel" aria-label="Maison Asmae positioning statement">
          <div className="hero-panel-content">
            <p className="eyebrow">Maison Asmae</p>
            <h2>{content.home.promiseTitle}</h2>
            <p>{content.home.promiseBody}</p>
          </div>
        </aside>
      </section>

      <section>
        <div className="section-title">
          <h2>{content.home.pillarsTitle}</h2>
        </div>
        <CardGrid>
          {content.home.pillars.map((pillar) => (
            <SurfaceCard key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </SurfaceCard>
          ))}
        </CardGrid>
      </section>

      <section className="split-section">
        <div>
          <p className="eyebrow">Maison</p>
          <h2>{content.home.signatureTitle}</h2>
        </div>
        <div className="editorial-panel">
          <p>{content.home.signatureBody}</p>
          <div className="cta-row">
            <Link className="button secondary" href={localizedPath(locale, "/letters")}>
              Letters from Maison Asmae
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
