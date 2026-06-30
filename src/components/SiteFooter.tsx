import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";
import { siteContent } from "@/content/site";

export function SiteFooter({ locale }: { locale: Locale }) {
  const content = siteContent[locale];

  return (
    <footer className="site-footer">
      <div>
        <p className="footer-kicker">Maison Asmae</p>
        <p>{content.footer.line}</p>
        <small>{content.footer.note}</small>
      </div>
      <div className="footer-links">
        {content.nav.map((item) => (
          <Link key={item.href} href={localizedPath(locale, item.href)}>
            {item.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
