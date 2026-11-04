import type { MetadataRoute } from "next";
import { SITE_URL, hubPages, landingPages } from "./landing-pages";

// Built from the same data as the pages, so new landing/hub pages appear
// automatically. Exported to out/sitemap.xml by the static build.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const slugs = [
    "", // home
    ...landingPages.map((p) => p.slug),
    ...hubPages.map((h) => h.slug),
  ];
  return slugs.map((slug) => ({
    url: slug ? `${SITE_URL}/${slug}/` : `${SITE_URL}/`,
    lastModified: now,
  }));
}
