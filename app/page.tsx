import CopyCommand from "./CopyCommand";

const GITHUB_URL = "https://github.com/seedcoherent/seedcoherent";
const NPM_URL = "https://www.npmjs.com/package/seedcoherent";

const features = [
  {
    title: "Referentially correct",
    body: "Children reference parents that exist. Zero orphan rows, including composite and self-referential foreign keys.",
  },
  {
    title: "Constraint-aware",
    body: "Respects NOT NULL, UNIQUE (single + composite), enums, varchar(n) length, identity/serial PKs, and common CHECK constraints.",
  },
  {
    title: "Looks real",
    body: "Column names drive content — email gets emails, price gets money, created_at gets plausible timestamps. Not lorem ipsum.",
  },
  {
    title: "Coherent within a row",
    body: "full_name, email, and username all derive from the row's own name; zip, city, and state agree. Timestamps respect causality.",
  },
  {
    title: "Deterministic",
    body: "--seed 42 gives byte-identical output every run. Repeatable fixtures for tests and CI.",
  },
  {
    title: "Fast",
    body: "~300k rows/sec end-to-end on SQLite — a 1.1M-row, 5-table graph seeds in under 4 seconds on a laptop.",
  },
  {
    title: "Four databases, one tool",
    body: "Postgres, MySQL, SQLite, and SQL Server, selected from the connection string — same flags, same behavior.",
  },
  {
    title: "Subset + anonymize",
    body: "Pull a referentially-complete slice of real production data and scrub the PII on the way out, straight into staging or CI.",
  },
];

const generateExamples = `# Generate against any supported database
npx seedcoherent postgres://localhost/mydb --rows users=1000 orders=5000
npx seedcoherent ./mydb.sqlite --rows users=1000 orders=5000

# Preview without writing a single row
npx seedcoherent $DATABASE_URL --rows users=1000 --dry-run

# Offline from a DDL file — no DB connection needed (great for CI)
npx seedcoherent --schema-file schema.sql --rows users=1000 -o seed.sql

# Deterministic, and localized
npx seedcoherent $DATABASE_URL --rows users=100 --seed 42 --locale de`;

const subsetExamples = `# 500 orders and everything they reference (users, products, categories…),
# anonymized, inserted into a separate staging DB.
npx seedcoherent $PROD_URL --subset orders=500 --to $STAGING_URL --seed 42

# Print a privacy report first — which columns look like PII — and exit.
npx seedcoherent $PROD_URL --subset orders=500 --scan`;

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <nav className="nav">
          <span className="wordmark">seedcoherent</span>
          <div className="nav-links">
            <a href={GITHUB_URL}>GitHub</a>
            <a href={NPM_URL}>npm</a>
          </div>
        </nav>
        <h1>
          Point it at your schema, get{" "}
          <span className="accent">coherent</span> fake data.
        </h1>
        <p className="tagline">
          Faker doesn&apos;t understand your schema. <code>seedcoherent</code>{" "}
          reads your live Postgres, MySQL, SQLite, or SQL Server database, walks
          the foreign-key graph, and generates data that actually fits — real
          parent rows, holding constraints, realistic content.
        </p>
        <CopyCommand command="npx seedcoherent $DATABASE_URL --rows users=1000 orders=5000" />
        <div className="hero-cta">
          <a className="btn btn-primary" href={GITHUB_URL}>
            View on GitHub
          </a>
          <a className="btn" href="#examples">
            See examples
          </a>
        </div>
      </section>

      {/* Problem */}
      <section className="section problem">
        <p>
          No config, no schema annotations, no per-column mapping. It
          introspects everything and inserts in dependency order inside a single
          transaction. FKs point at real parent rows, unique constraints hold,
          enums use their real values, and column <em>names</em> drive the
          content.
        </p>
      </section>

      {/* Features */}
      <section className="section">
        <h2>Why it&apos;s different</h2>
        <div className="feature-grid">
          {features.map((f) => (
            <div className="feature-card" key={f.title}>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Demo */}
      <section className="section demo">
        <h2>See it run</h2>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="./demo.gif" alt="seedcoherent terminal demo" />
      </section>

      {/* Examples */}
      <section className="section" id="examples">
        <h2>Generate synthetic data</h2>
        <p className="section-lead">
          Fill an empty or existing schema with realistic, referentially-correct
          rows. Zero install — one <code>npx</code> command.
        </p>
        <pre className="code-block">
          <code>{generateExamples}</code>
        </pre>

        <h2 className="mt">Subset &amp; anonymize real data</h2>
        <p className="section-lead">
          Point it at a real database, pull a small, referentially-complete
          slice, and scrub the PII on the way out — perfect for filling a
          staging or CI database with realistic-but-fake data.
        </p>
        <pre className="code-block">
          <code>{subsetExamples}</code>
        </pre>
      </section>

      {/* Footer */}
      <footer className="footer">
        <span className="wordmark">seedcoherent</span>
        <div className="footer-links">
          <a href={GITHUB_URL}>GitHub</a>
          <a href={NPM_URL}>npm</a>
        </div>
        <p className="footer-meta">
          MIT License · © 2026 Jacob Jensen
        </p>
      </footer>
    </main>
  );
}
