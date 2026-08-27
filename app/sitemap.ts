import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/site";
import { artists } from "@/data/artists";
import { releases } from "@/data/releases";

export default function sitemap(): MetadataRoute.Sitemap {
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
  const artistPaths = artists.map((artist) => artist.legacyUrl);
  const releasePaths = releases.map((release) => release.legacyUrl);

  const paths = [...staticPaths, ...artistPaths, ...releasePaths];

  return paths.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: path === "" || path === "/catalog/" ? "monthly" : "yearly",
    priority: path === "" ? 1 : staticPaths.includes(path) ? 0.7 : 0.6,
  }));
}
