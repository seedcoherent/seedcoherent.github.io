import type { Metadata } from "next";
import { GITHUB_URL, NPM_URL, SITE_URL } from "../landing-pages";

export const metadata: Metadata = {
  title: "Writing · seedcoherent",
  description:
    "Engineering writeups on how seedcoherent generates coherent, referentially-correct data.",
  alternates: { canonical: `${SITE_URL}/blog/` },
};

// Posts currently live as markdown in the main repo; linked here until they are
// rendered on the site (issues #49 / #50).
const posts = [
  {
    title: "Walking the foreign-key graph for referentially-correct data",
    blurb:
      "Topological ordering of inserts, composite and self-referential foreign keys, and avoiding orphan rows inside one transaction.",
    href: `${GITHUB_URL}/blob/main/blog/how-we-walk-the-fk-graph.md`,
  },
  {
    title: "Constraint-aware generation: CHECK, composite UNIQUE, enums",
    blurb:
      "How generated values are shaped to satisfy CHECK constraints, composite UNIQUE, enums, varchar(n), and domains, with before/after examples.",
    href: `${GITHUB_URL}/blob/main/blog/constraint-aware-generation.md`,
  },
];

export default function Blog() {
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
        <h1>Writing</h1>
        <p className="tagline">
          Problem-first engineering writeups on how seedcoherent works under the
          hood.
        </p>
      </section>

      <section className="section">
        <div className="feature-grid">
          {posts.map((p) => (
            <a className="feature-card" key={p.title} href={p.href}>
              <h3>{p.title}</h3>
              <p>{p.blurb}</p>
            </a>
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
