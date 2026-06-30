import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { siteContent } from "@/content/site";
import { CardGrid, PageHero, SurfaceCard } from "@/components/ui";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: siteContent[locale].corporate.title,
    description: siteContent[locale].corporate.intro
  };
}

export default async function CorporatePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const content = siteContent[locale].corporate;

  return (
    <>
      <PageHero eyebrow={content.eyebrow} title={content.title} intro={content.intro} />
      <CardGrid>
        <SurfaceCard>
          <h3>{content.clientsTitle}</h3>
          <ul>
            {content.clients.map((client) => (
              <li key={client}>{client}</li>
            ))}
          </ul>
        </SurfaceCard>
        <SurfaceCard>
          <h3>{content.servicesTitle}</h3>
          <ul>
            {content.services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </SurfaceCard>
        <SurfaceCard>
          <h3>Maison Asmae</h3>
          <p>{content.intro}</p>
        </SurfaceCard>
      </CardGrid>
    </>
  );
}
