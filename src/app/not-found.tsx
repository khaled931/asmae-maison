import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-hero">
      <p className="eyebrow">Maison Asmae</p>
      <h1>Page not found</h1>
      <p>The page you are looking for is not available.</p>
      <div className="cta-row">
        <Link className="button primary" href="/fr">
          Return home
        </Link>
      </div>
    </main>
  );
}
