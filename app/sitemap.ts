import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/site";
import { artists } from "@/data/artists";
import { releases } from "@/data/releases";

export default function sitemap(): MetadataRoute.Sitemap {
  // ビルド時点の日時。個別の更新日を持たない静的ページ・アーティストページの
  // lastModified として使う（作品ページはリリース日をそのまま使う）。
  const buildDate = new Date();

  const staticPaths = [
    "",
    "/catalog/",
    "/artists/",
    "/movie/",
    "/radio/",
    "/about/",
    "/contact/",
    "/202608interview/",
  ];

  const staticEntries = staticPaths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: buildDate,
    changeFrequency: (path === "" || path === "/catalog/" ? "monthly" : "yearly") as "monthly" | "yearly",
    priority: path === "" ? 1 : 0.7,
  }));

  const artistEntries = artists.map((artist) => ({
    url: `${SITE_URL}${artist.legacyUrl}`,
    lastModified: buildDate,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const releaseEntries = releases.map((release) => ({
    url: `${SITE_URL}${release.legacyUrl}`,
    // "2025.11.01" -> Date
    lastModified: new Date(release.releasedAt.replaceAll(".", "-")),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...artistEntries, ...releaseEntries];
}
