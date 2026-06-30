import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, localizedPath } from "@/lib/i18n";
import { journalPosts, siteContent } from "@/content/site";
import { PageHero, SurfaceCard } from "@/components/ui";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: siteContent[locale].letters.title,
    description: siteContent[locale].letters.intro
  };
}

export default async function LettersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const content = siteContent[locale].letters;
  const posts = journalPosts[locale];

  return (
    <>
      <PageHero eyebrow={content.eyebrow} title={content.title} intro={content.intro} />
      <div className="journal-list">
        {posts.length === 0 ? <p>{content.empty}</p> : null}
        {posts.map((post) => (
          <Link key={post.slug} href={localizedPath(locale, `/letters/${post.slug}`)}>
            <SurfaceCard>
              <article className="journal-card">
                <div className="journal-meta">
                  <span>{post.category}</span>
                  <span>{post.readingTime}</span>
                  <time dateTime={post.date}>{post.date}</time>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </article>
            </SurfaceCard>
          </Link>
        ))}
      </div>
    </>
  );
}
