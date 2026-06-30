import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { siteContent } from "@/content/site";
import { PageHero, SurfaceCard } from "@/components/ui";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: siteContent[locale].programmes.title,
    description: siteContent[locale].programmes.intro
  };
}

export default async function ProgrammesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const content = siteContent[locale].programmes;

  return (
    <>
      <PageHero eyebrow={content.eyebrow} title={content.title} intro={content.intro} />
      <div className="journal-list">
        {content.items.map((programme) => (
          <SurfaceCard key={programme.slug}>
            <p className="eyebrow">{programme.audience}</p>
            <h3>{programme.title}</h3>
            <p>{programme.description}</p>
            <ul>
              {programme.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </SurfaceCard>
        ))}
      </div>
    </>
  );
}
