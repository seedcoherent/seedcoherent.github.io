import type { Metadata } from "next";
import "./globals.css";

const title = "seedcoherent: schema-aware synthetic data generator";
const description =
  "Point it at your Postgres, MySQL, SQLite, or SQL Server schema, get coherent, referentially-correct fake data.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://seedcoherent.github.io",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
