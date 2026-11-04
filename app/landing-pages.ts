// SEO landing pages, each targeting a real search phrase. The dynamic route
// app/(landing)/[slug]/page.tsx renders one page per entry, and app/sitemap.ts
// lists them, so adding a page here is all it takes to ship a new one.

export const SITE_URL = "https://seedcoherent.github.io";
export const GITHUB_URL = "https://github.com/seedcoherent/seedcoherent";
export const NPM_URL = "https://www.npmjs.com/package/seedcoherent";

export type LandingPage = {
  slug: string;
  // <title> and the H1 share the headline; meta description is separate.
  title: string;
  description: string;
  heading: string;
  // Short intro paragraph under the H1.
  intro: string;
  // The one command we want people to copy on this page.
  command: string;
  // A fuller multi-line example block.
  examples: string;
  // Why seedcoherent fits this specific need.
  points: { title: string; body: string }[];
};

export const landingPages: LandingPage[] = [
  {
    slug: "seed-postgres-with-fake-data",
    title: "Seed Postgres with fake data",
    description:
      "Seed a Postgres database with realistic, referentially-correct fake data in one command. No config, no fixtures — seedcoherent reads your schema and fills it.",
    heading: "Seed Postgres with fake data",
    intro:
      "Point seedcoherent at a Postgres connection string and it introspects the schema, walks the foreign-key graph, and inserts coherent rows in dependency order inside a single transaction. No fixtures to hand-write, no config to maintain.",
    command:
      "npx seedcoherent postgres://localhost/mydb --rows users=1000 orders=5000",
    examples: `# Seed a local Postgres database
npx seedcoherent postgres://localhost/mydb --rows users=1000 orders=5000

# Preview the plan without writing a single row
npx seedcoherent $DATABASE_URL --rows users=1000 --dry-run

# Deterministic output for repeatable test fixtures
npx seedcoherent $DATABASE_URL --rows users=100 --seed 42`,
    points: [
      {
        title: "Foreign keys point at real rows",
        body: "Every order references a user that exists. Composite and self-referential FKs included, so you get zero orphan rows.",
      },
      {
        title: "Respects your constraints",
        body: "NOT NULL, UNIQUE, enums, varchar(n) length, serial/identity PKs, and common CHECK constraints all hold.",
      },
      {
        title: "No config",
        body: "It introspects the live database. No schema annotations, no per-column mapping, nothing to install first.",
      },
    ],
  },
  {
    slug: "generate-test-data-from-schema",
    title: "Generate test data from your schema",
    description:
      "Generate test data straight from your database schema — Postgres, MySQL, SQLite, or SQL Server. seedcoherent reads the schema and produces coherent, constraint-respecting rows.",
    heading: "Generate test data from your schema",
    intro:
      "Your schema already describes the shape of valid data: types, foreign keys, unique and check constraints. seedcoherent reads it and generates test data that fits — no mapping files, no annotations. Works from a live connection or an offline DDL file.",
    command: "npx seedcoherent $DATABASE_URL --rows users=1000 orders=5000",
    examples: `# Generate from a live database
npx seedcoherent $DATABASE_URL --rows users=1000 orders=5000

# Generate offline from a DDL file — no DB connection needed (handy in CI)
npx seedcoherent --schema-file schema.sql --rows users=1000 -o seed.sql

# Localized, deterministic data
npx seedcoherent $DATABASE_URL --rows users=100 --seed 42 --locale de`,
    points: [
      {
        title: "Schema-driven, not template-driven",
        body: "Types, foreign keys, and constraints come straight from introspection. Change the schema and the data follows.",
      },
      {
        title: "Content that looks real",
        body: "Column names drive values: an email column gets emails, price gets money, created_at gets plausible timestamps. No lorem ipsum.",
      },
      {
        title: "Works offline from DDL",
        body: "Point it at a .sql schema file with --schema-file and write INSERTs to a file — no database connection required.",
      },
    ],
  },
  {
    slug: "faker-alternative-foreign-keys",
    title: "A Faker alternative that respects foreign keys",
    description:
      "Faker generates values, not coherent rows — it doesn't know your foreign keys. seedcoherent walks the FK graph so children always reference parents that exist.",
    heading: "A Faker alternative that respects foreign keys",
    intro:
      "Faker is great at single values but has no idea how your tables relate. You end up writing glue code to wire foreign keys by hand. seedcoherent reads the whole foreign-key graph and inserts in dependency order, so references are always valid.",
    command: "npx seedcoherent $DATABASE_URL --rows users=1000 orders=5000",
    examples: `# One command fills every related table in the right order
npx seedcoherent $DATABASE_URL --rows users=1000 orders=5000 line_items=20000

# Deterministic, so your tests get the same graph every run
npx seedcoherent $DATABASE_URL --rows users=1000 orders=5000 --seed 42`,
    points: [
      {
        title: "The whole graph, in order",
        body: "Topologically sorts tables and inserts parents before children. Composite and self-referential foreign keys are handled too.",
      },
      {
        title: "No glue code",
        body: "You don't wire up IDs by hand. Pick row counts per table; references resolve automatically.",
      },
      {
        title: "Coherent within a row",
        body: "full_name, email, and username all derive from the same identity; zip, city, and state agree; timestamps respect causality.",
      },
    ],
  },
  {
    slug: "seed-mysql-database-with-test-data",
    title: "Seed a MySQL database with test data",
    description:
      "Seed a MySQL database with realistic, referentially-correct test data in one command. Same tool, same flags as Postgres and SQLite — picked from the connection string.",
    heading: "Seed a MySQL database with test data",
    intro:
      "seedcoherent speaks MySQL too. Give it a mysql:// connection string and it introspects the schema, respects foreign keys and constraints, and seeds coherent rows — the same behavior and flags you'd use against Postgres or SQLite.",
    command: "npx seedcoherent mysql://root@localhost/mydb --rows users=1000 orders=5000",
    examples: `# Seed a local MySQL database
npx seedcoherent mysql://root@localhost/mydb --rows users=1000 orders=5000

# Preview first
npx seedcoherent mysql://root@localhost/mydb --rows users=1000 --dry-run

# Deterministic fixtures
npx seedcoherent mysql://root@localhost/mydb --rows users=100 --seed 42`,
    points: [
      {
        title: "One tool, four databases",
        body: "Postgres, MySQL, SQLite, and SQL Server — the engine is picked from the connection string. Same flags, same behavior.",
      },
      {
        title: "Referentially correct",
        body: "Walks the foreign-key graph and inserts in dependency order, so children reference parents that exist.",
      },
      {
        title: "Constraint-aware",
        body: "Respects NOT NULL, UNIQUE, enums, column lengths, auto-increment keys, and common CHECK constraints.",
      },
    ],
  },
  {
    slug: "sqlite-test-data-generator",
    title: "SQLite test data generator",
    description:
      "Generate realistic test data for a SQLite database — point seedcoherent at a .sqlite file and it fills the schema with coherent, referentially-correct rows.",
    heading: "SQLite test data generator",
    intro:
      "Hand seedcoherent a path to a SQLite file (or a :memory: database) and it introspects the schema and seeds coherent data — fast. Around 300k rows/sec end to end on SQLite; a 1.1M-row, 5-table graph seeds in under 4 seconds on a laptop.",
    command: "npx seedcoherent ./mydb.sqlite --rows users=1000 orders=5000",
    examples: `# Seed a SQLite file
npx seedcoherent ./mydb.sqlite --rows users=1000 orders=5000

# Any of these select SQLite too
npx seedcoherent sqlite:./mydb.sqlite --rows users=1000
npx seedcoherent ':memory:' --schema-file schema.sql --rows users=1000

# Deterministic output
npx seedcoherent ./mydb.sqlite --rows users=100 --seed 42`,
    points: [
      {
        title: "Fast",
        body: "Around 300k rows/sec end to end. Big graphs seed in seconds, so it's painless in tests and CI.",
      },
      {
        title: "Flexible input",
        body: "A .db / .sqlite / .sqlite3 path, a sqlite:/file: URL, or :memory: all select SQLite — combine with --schema-file to build from DDL.",
      },
      {
        title: "Referentially correct",
        body: "Foreign keys resolve to real parent rows and constraints hold, the same as every other supported database.",
      },
    ],
  },
  {
    slug: "anonymize-production-data-for-staging",
    title: "Anonymize production data for staging",
    description:
      "Pull a referentially-complete slice of production and scrub the PII on the way out — a safe way to fill a staging or CI database with data that behaves like production.",
    heading: "Anonymize production data for staging",
    intro:
      "A full production dump is risky and huge; a hand-built sample breaks foreign keys. seedcoherent's --subset closes over the FK graph to pull a small, referentially-complete slice, and --anonymize scrubs PII as it writes to the destination.",
    command: "npx seedcoherent $PROD_URL --subset orders=500 --to $STAGING_URL --anonymize --seed 42",
    examples: `# 500 orders and everything they reference, anonymized, into staging
npx seedcoherent $PROD_URL --subset orders=500 --to $STAGING_URL --anonymize --seed 42

# Print a privacy report first (which columns look like PII) and exit
npx seedcoherent $PROD_URL --subset orders=500 --scan`,
    points: [
      {
        title: "Referentially complete slices",
        body: "--subset closes over the foreign-key graph, so the slice you pull has every parent row it needs — no broken references.",
      },
      {
        title: "PII scrubbed on the way out",
        body: "--anonymize replaces sensitive columns with realistic fake values before they ever land in staging or CI.",
      },
      {
        title: "See what's sensitive first",
        body: "--scan prints a privacy report of which columns look like PII, so you can review before copying anything.",
      },
    ],
  },
];

export function getLandingPage(slug: string): LandingPage | undefined {
  return landingPages.find((p) => p.slug === slug);
}

// Hub sections — index pages that will host comparison pages, recipes, and blog
// posts as those land. Listed here so the sitemap and nav stay in sync.
export const hubPages = [
  { slug: "blog", title: "Writing", description: "Engineering writeups on how seedcoherent generates coherent, referentially-correct data." },
  { slug: "compare", title: "Comparisons", description: "How seedcoherent compares to Faker, Snaplet, Mockaroo, and hand-rolled pg_dump sampling." },
  { slug: "recipes", title: "Recipes", description: "Copy-paste recipes for seeding your database from your ORM, framework, or CI pipeline." },
];
