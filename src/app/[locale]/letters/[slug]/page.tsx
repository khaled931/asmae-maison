import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, localizedPath, locales } from "@/lib/i18n";
import { journalPosts, siteContent } from "@/content/site";

export function generateStaticParams() {
  return locales.flatMap((locale) => journalPosts[locale].map((post) => ({ locale, slug: post.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};

  const post = journalPosts[locale].find((item) => item.slug === slug);

  return {
    title: post ? post.title : siteContent[locale].letters.title,
    description: post?.excerpt ?? siteContent[locale].letters.intro
  };
}

export default async function LetterPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const post = journalPosts[locale].find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="page-hero article-body">
      <div className="journal-meta">
        <span>{post.category}</span>
        <span>{post.readingTime}</span>
        <time dateTime={post.date}>{post.date}</time>
      </div>
      <h1>{post.title}</h1>
      <p>{post.excerpt}</p>
      {post.body.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <div className="cta-row">
        <Link className="button secondary" href={localizedPath(locale, "/letters")}>
          ← {siteContent[locale].letters.title}
        </Link>
      </div>
    </article>
  );
}
