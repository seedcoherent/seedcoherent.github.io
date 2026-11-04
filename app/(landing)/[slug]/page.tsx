import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CopyCommand from "../../CopyCommand";
import {
  GITHUB_URL,
  NPM_URL,
  SITE_URL,
  getLandingPage,
  hubPages,
  landingPages,
} from "../../landing-pages";

// Statically export one page per landing entry. With output: 'export', only
// these slugs are emitted, so /blog, /compare, /recipes stay separate routes.
export function generateStaticParams() {
  return landingPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) return {};
  const url = `${SITE_URL}/${page.slug}/`;
  return {
    title: `${page.title} · seedcoherent`,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      type: "article",
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}

export default async function LandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) notFound();

  // Link out to the other landing pages for internal crawl depth.
  const others = landingPages.filter((p) => p.slug !== page.slug);

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
        <h1>{page.heading}</h1>
        <p className="tagline">{page.intro}</p>
        <CopyCommand command={page.command} />
        <div className="hero-cta">
          <a className="btn btn-primary" href={GITHUB_URL}>
            View on GitHub
          </a>
          <a className="btn" href="/">
            How it works
          </a>
        </div>
      </section>

      <section className="section">
        <h2>Why seedcoherent</h2>
        <div className="feature-grid">
          {page.points.map((pt) => (
            <div className="feature-card" key={pt.title}>
              <h3>{pt.title}</h3>
              <p>{pt.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Examples</h2>
        <pre className="code-block">
          <code>{page.examples}</code>
        </pre>
      </section>

      <section className="section">
        <h2>Related</h2>
        <ul className="link-list">
          {others.map((p) => (
            <li key={p.slug}>
              <a href={`/${p.slug}/`}>{p.title}</a>
            </li>
          ))}
          {hubPages.map((h) => (
            <li key={h.slug}>
              <a href={`/${h.slug}/`}>{h.title}</a>
            </li>
          ))}
        </ul>
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
