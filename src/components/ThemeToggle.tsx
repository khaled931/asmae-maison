"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { siteContent } from "@/content/site";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
}

export function ThemeToggle({ locale }: { locale: Locale }) {
  const [theme, setTheme] = useState<Theme>("light");
  const labels = siteContent[locale].theme;

  useEffect(() => {
    const stored = window.localStorage.getItem("maison-asmae-theme") as Theme | null;
    const preferred: Theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initialTheme = stored ?? preferred;
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem("maison-asmae-theme", nextTheme);
    applyTheme(nextTheme);
  }

  return (
    <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Toggle colour theme">
      <span aria-hidden="true">{theme === "dark" ? "☾" : "☼"}</span>
      {theme === "dark" ? labels.dark : labels.light}
    </button>
  );
}
