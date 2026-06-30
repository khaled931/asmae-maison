import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://asmae-maison.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Maison Asmae",
    template: "%s | Maison Asmae"
  },
  description: "Maison Asmae is a cultural intelligence, hospitality and executive refinement house.",
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
