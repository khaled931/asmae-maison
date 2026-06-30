"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeLabels, locales, type Locale, removeLocaleFromPath } from "@/lib/i18n";

export function LocaleSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const pathWithoutLocale = removeLocaleFromPath(pathname);

  return (
    <div className="locale-switcher" aria-label="Language switcher">
      {locales.map((targetLocale) => (
        <Link
          key={targetLocale}
          className={targetLocale === locale ? "active" : ""}
          href={`/${targetLocale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`}
          aria-current={targetLocale === locale ? "page" : undefined}
        >
          {localeLabels[targetLocale]}
        </Link>
      ))}
    </div>
  );
}
