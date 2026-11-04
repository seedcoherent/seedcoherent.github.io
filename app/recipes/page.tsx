import type { Metadata } from "next";
import { GITHUB_URL, NPM_URL, SITE_URL } from "../landing-pages";

export const metadata: Metadata = {
  title: "Recipes · seedcoherent",
  description:
    "Copy-paste recipes for seeding your database from your ORM, framework, or CI pipeline.",
  alternates: { canonical: `${SITE_URL}/recipes/` },
};

const recipes = [
  { title: "ORMs & frameworks", blurb: "Prisma, Drizzle, Django, Rails, and Supabase — drop seedcoherent into the seed step you already have." },
  { title: "CI & ephemeral databases", blurb: "GitHub Actions that spins up Postgres and seeds it, plus Testcontainers and docker-compose fixtures." },
];

export default function Recipes() {
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
        <h1>Recipes</h1>
        <p className="tagline">
          Copy-paste snippets for using seedcoherent with your stack. Full
          recipes are on the way — the summaries below are what each will cover.
        </p>
      </section>

      <section className="section">
        <div className="feature-grid">
          {recipes.map((r) => (
            <div className="feature-card" key={r.title}>
              <h3>{r.title}</h3>
              <p>{r.blurb}</p>
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
