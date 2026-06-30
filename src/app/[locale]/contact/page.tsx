import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { siteContent } from "@/content/site";
import { PageHero } from "@/components/ui";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: siteContent[locale].contact.title,
    description: siteContent[locale].contact.intro
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const content = siteContent[locale].contact;
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? content.emailPlaceholder;

  return (
    <>
      <PageHero eyebrow={content.eyebrow} title={content.title} intro={content.intro} />
      <section className="contact-layout">
        <aside className="contact-panel">
          <p className="eyebrow">{content.emailLabel}</p>
          <h2>{contactEmail}</h2>
          <p>{content.note}</p>
        </aside>
        <div className="contact-panel">
          <h3>{content.formTitle}</h3>
          <form className="contact-form" action={`mailto:${contactEmail}`} method="post" encType="text/plain">
            <label className="field">
              {content.name}
              <input name="name" autoComplete="name" required />
            </label>
            <label className="field">
              {content.email}
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label className="field">
              {content.message}
              <textarea name="message" required />
            </label>
            <button className="button primary" type="submit">
              {content.submit}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
