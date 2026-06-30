import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, localizedPath } from "@/lib/i18n";
import { siteContent } from "@/content/site";
import { CardGrid, SurfaceCard } from "@/components/ui";

const signalLabels = {
  fr: ["Etiquette moderne", "Hospitalite de luxe", "Presence executive", "Codes Europe, Golfe et monde"],
  en: ["Modern etiquette", "Luxury hospitality", "Executive presence", "Europe, Gulf and global codes"],
  ar: ["الإتيكيت الحديث", "الضيافة الفاخرة", "الحضور التنفيذي", "رموز أوروبا والخليج والعالم"]
};

const learningLabels = {
  fr: ["Recevoir avec aisance", "Diner et reseauter", "Communiquer avec elegance", "Se presenter avec confiance"],
  en: ["Host with ease", "Dine and network", "Communicate elegantly", "Present yourself with confidence"],
  ar: ["الاستقبال بثقة", "موائد العمل وبناء العلاقات", "التواصل بأناقة", "تقديم الذات بثقة"]
};

const iconSet = ["01", "02", "03"];

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
  const signals = signalLabels[locale];
  const learning = learningLabels[locale];

  return (
    <>
      <section className="hero academy-hero">
        <div className="hero-copy">
          <p className="eyebrow">{content.home.eyebrow}</p>
          <h1>{content.home.title}</h1>
          <p className="hero-intro">{content.home.intro}</p>
          <div className="signal-row" aria-label="Maison Asmae focus areas">
            {signals.map((signal) => (
              <span key={signal}>{signal}</span>
            ))}
          </div>
          <div className="cta-row">
            <Link className="button primary" href={localizedPath(locale, "/contact")}>
              {content.home.primaryCta}
            </Link>
            <Link className="button secondary" href={localizedPath(locale, "/programmes")}>
              {content.home.secondaryCta}
            </Link>
          </div>
        </div>

        <aside className="academy-panel" aria-label="Maison Asmae academy overview">
          <div className="academy-panel-card intro-card">
            <p className="eyebrow">Maison Asmae</p>
            <h2>{content.home.promiseTitle}</h2>
            <p>{content.home.promiseBody}</p>
          </div>
          <div className="academy-symbol-grid" aria-hidden="true">
            <span>Host</span>
            <span>Table</span>
            <span>Presence</span>
            <span>Codes</span>
          </div>
        </aside>
      </section>

      <section className="purpose-strip" aria-label="What Maison Asmae teaches">
        {learning.map((item, index) => (
          <div key={item} className="purpose-item">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item}</strong>
          </div>
        ))}
      </section>

      <section>
        <div className="section-title">
          <div>
            <p className="eyebrow">Academy</p>
            <h2>{content.home.pillarsTitle}</h2>
          </div>
          <p>{content.home.signatureBody}</p>
        </div>
        <CardGrid>
          {content.home.pillars.map((pillar, index) => (
            <SurfaceCard key={pillar.title}>
              <div className="path-card-header">
                <span className="path-icon" aria-hidden="true">
                  {iconSet[index]}
                </span>
                <span className="path-number">Pathway</span>
              </div>
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </SurfaceCard>
          ))}
        </CardGrid>
      </section>

      <section className="split-section refined-split">
        <div>
          <p className="eyebrow">Positioning</p>
          <h2>{content.home.signatureTitle}</h2>
        </div>
        <div className="editorial-panel service-preview">
          {content.services.items.map((item) => (
            <div className="service-preview-item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
          <div className="cta-row">
            <Link className="button secondary" href={localizedPath(locale, "/services")}>
              {content.nav.find((item) => item.href === "/services")?.label ?? "Services"}
            </Link>
            <Link className="button secondary" href={localizedPath(locale, "/letters")}>
              Letters from Maison Asmae
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
