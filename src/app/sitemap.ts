import type { MetadataRoute } from "next";
import { journalPosts } from "@/content/site";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://asmae-maison.vercel.app";
  const routes = ["", "/services", "/programmes", "/corporate", "/letters", "/contact"];
  const now = new Date();

  const pages = locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${siteUrl}/${locale}${route}`,
      lastModified: now
    }))
  );

  const posts = locales.flatMap((locale) =>
    journalPosts[locale].map((post) => ({
      url: `${siteUrl}/${locale}/letters/${post.slug}`,
      lastModified: new Date(post.date)
    }))
  );

  return [...pages, ...posts];
}
