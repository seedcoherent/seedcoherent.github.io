import type { Metadata } from "next";
import { GITHUB_URL, NPM_URL, SITE_URL } from "../landing-pages";

export const metadata: Metadata = {
  title: "Comparisons · seedcoherent",
  description:
    "How seedcoherent compares to Faker, Snaplet, Mockaroo, and hand-rolled pg_dump sampling.",
  alternates: { canonical: `${SITE_URL}/compare/` },
};

const comparisons = [
  { title: "vs Faker", blurb: "Faker generates values; seedcoherent generates coherent rows that respect your foreign keys and constraints." },
  { title: "vs Snaplet", blurb: "Where each fits for seeding and for anonymized production subsets." },
  { title: "vs Mockaroo", blurb: "Schema-driven introspection versus manually configured field types." },
  { title: "vs pg_dump sampling", blurb: "Why a referentially-complete subset beats hand-rolled sampling that breaks foreign keys." },
];

export default function Compare() {
  return (
    <main>
      <section className="hero">
        <nav className="nav">
          <a className="wordmark" href="/">
            seedcoherent
          </a>
          <div className="nav-links">
            <a href={GITHUB_URL}>GitHub</a>
            <a href={NPM_URL}>npm</a>
          </div>
        </nav>
        <h1>Comparisons</h1>
        <p className="tagline">
          Honest, feature-by-feature comparisons centered on referential
          correctness. Detailed pages are on the way — the summaries below are
          what each will cover.
        </p>
      </section>

      <section className="section">
        <div className="feature-grid">
          {comparisons.map((c) => (
            <div className="feature-card" key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.blurb}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <a className="wordmark" href="/">
          seedcoherent
        </a>
        <div className="footer-links">
          <a href={GITHUB_URL}>GitHub</a>
          <a href={NPM_URL}>npm</a>
        </div>
        <p className="footer-meta">MIT License · © 2026 Jacob Jensen</p>
      </footer>
    </main>
  );
}
