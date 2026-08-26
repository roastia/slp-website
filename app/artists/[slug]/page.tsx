import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { artists, getArtistBySlug } from "@/data/artists";
import { releases } from "@/data/releases";
import { pageMetadata } from "@/lib/metadata";
import { Button } from "@/components/ui/button";
import { ReleaseCard } from "@/components/release-card";
import { JsonLd } from "@/components/json-ld";
import { musicGroupJsonLd } from "@/lib/structured-data";

export function generateStaticParams() {
  return artists
    .filter((artist) => artist.legacyUrl.startsWith("/artists/"))
    .map((artist) => ({ slug: artist.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);
  if (!artist) return {};
  return pageMetadata(
    `${artist.name} | Artists`,
    `${artist.name}のプロフィール、作品、活動情報を紹介します。`,
    artist.legacyUrl,
    { url: artist.image, alt: artist.name },
  );
}

export default async function ArtistDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);
  if (!artist || !artist.legacyUrl.startsWith("/artists/")) notFound();

  const artistReleases = releases.filter((release) => artist.releaseSlugs.includes(release.slug));

  return (
    <main className="detail-page">
      <JsonLd data={musicGroupJsonLd(artist)} />
      <section className="detail-hero wrap">
        <Link className="detail-back" href="/artists" data-reveal>← artists</Link>
        <div className="detail-grid">
          <figure className="detail-media" data-reveal>
            <Image
              src={artist.image}
              alt={artist.name}
              width={1024}
              height={1024}
              sizes="(max-width: 820px) 100vw, 50vw"
              priority
            />
          </figure>
          <div className="detail-intro" data-reveal>
            <p className="detail-kicker">artist</p>
            <h1>{artist.name}</h1>
            <p className="detail-lead">{artist.lead}</p>
            {artist.profile ? (
              <p className="detail-members" style={{ whiteSpace: "pre-line" }}>{artist.profile}</p>
            ) : null}
            {artist.links.length > 0 ? (
              <div className="detail-actions" aria-label="Artist links">
                {artist.links.map((link) => (
                  <Button key={link.label} asChild variant="ghost" className="detail-action">
                    <a href={link.href}>{link.label} ↗</a>
                  </Button>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {artist.dialogues && artist.dialogues.length > 0 ? (
        <section className="dialogue wrap">
          <p className="section-label" data-reveal>dialogue</p>
          <div className="dialogue-list">
            {artist.dialogues.map((item) => (
              <p key={item.href} data-reveal>
                <Link href={item.href}>{item.label}</Link>
                {item.date ? <span className="dialogue-date">{item.date}</span> : null}
              </p>
            ))}
          </div>
        </section>
      ) : null}

      {artistReleases.length > 0 ? (
        <section className="related wrap">
          <p className="section-label" data-reveal>selected releases</p>
          <div className="card-grid detail-card-grid">
            {artistReleases.map((release) => (
              <ReleaseCard key={release.slug} release={release} showDate />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
