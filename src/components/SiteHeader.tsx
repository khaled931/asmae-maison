import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";
import { siteContent } from "@/content/site";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";

export function SiteHeader({ locale }: { locale: Locale }) {
  const content = siteContent[locale];

  return (
    <header className="site-header">
      <Link className="brand" href={localizedPath(locale, "/")} aria-label="Maison Asmae home">
        <span className="brand-mark">MA</span>
        <span>
          <strong>{content.brand.name}</strong>
          <small>{content.brand.descriptor}</small>
        </span>
      </Link>

      <nav className="site-nav" aria-label="Main navigation">
        {content.nav.map((item) => (
          <Link key={item.href} href={localizedPath(locale, item.href)}>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="header-actions">
        <LocaleSwitcher locale={locale} />
        <ThemeToggle locale={locale} />
      </div>
    </header>
  );
}
