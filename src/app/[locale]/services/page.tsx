import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { siteContent } from "@/content/site";
import { CardGrid, PageHero, SurfaceCard } from "@/components/ui";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: siteContent[locale].services.title,
    description: siteContent[locale].services.intro
  };
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const content = siteContent[locale].services;

  return (
    <>
      <PageHero eyebrow={content.eyebrow} title={content.title} intro={content.intro} />
      <CardGrid>
        {content.items.map((item) => (
          <SurfaceCard key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </SurfaceCard>
        ))}
      </CardGrid>
    </>
  );
}
