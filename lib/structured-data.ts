import { SITE_URL, socialLinks } from "@/data/site";
import type { Artist } from "@/data/artists";
import type { Release } from "@/data/releases";
import { getArtistBySlug } from "@/data/artists";

function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}

function toISODate(dateLike: string): string {
  // "2025.11.01" -> "2025-11-01"
  return dateLike.replaceAll(".", "-");
}

function durationToISO8601(duration: string): string | undefined {
  // "07:35" -> "PT7M35S"
  const parts = duration.split(":").map((part) => Number.parseInt(part, 10));
  if (parts.some((part) => Number.isNaN(part))) return undefined;
  const [minutes, seconds] = parts.length === 2 ? parts : [0, parts[0]];
  return `PT${minutes}M${seconds}S`;
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SLP",
    url: SITE_URL,
    description:
      "SLPは福岡を拠点とするレコードレーベル。テクノ、アンビエント、ポストロックなどジャンルを横断しながら作品をリリースしています。",
    sameAs: socialLinks.map((link) => link.href),
  };
}

export function musicGroupJsonLd(artist: Artist) {
  return {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: artist.name,
    url: absoluteUrl(artist.legacyUrl),
    image: absoluteUrl(artist.image),
    description: artist.lead,
    genre: artist.genres.split("/").map((genre) => genre.trim()).filter(Boolean),
    foundingLocation: artist.basedIn,
    sameAs: artist.links.map((link) => link.href),
  };
}

export function musicAlbumJsonLd(release: Release) {
  const artist = getArtistBySlug(release.artistSlug);

  return {
    "@context": "https://schema.org",
    "@type": "MusicAlbum",
    name: release.title,
    url: absoluteUrl(release.legacyUrl),
    image: absoluteUrl(release.image),
    datePublished: toISODate(release.releasedAt),
    numTracks: release.tracklist.length,
    byArtist: {
      "@type": "MusicGroup",
      name: release.artist,
      ...(artist ? { url: absoluteUrl(artist.legacyUrl) } : {}),
    },
    recordLabel: {
      "@type": "Organization",
      name: "SLP",
      url: SITE_URL,
    },
    track: release.tracklist.map((track, index) => ({
      "@type": "MusicRecording",
      position: index + 1,
      name: track.title,
      ...(durationToISO8601(track.duration) ? { duration: durationToISO8601(track.duration) } : {}),
    })),
  };
}
