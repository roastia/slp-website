import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { releases, getReleaseBySlug } from "@/data/releases";
import { getArtistBySlug } from "@/data/artists";
import { pageMetadata } from "@/lib/metadata";
import { Button } from "@/components/ui/button";
import { ReleaseCard } from "@/components/release-card";

const release = getReleaseBySlug("from-here_impressionists")!;

export const metadata: Metadata = pageMetadata(
  `${release.title} — ${release.artist}`,
  `${release.artist}による『${release.title}』の作品情報、収録曲、配信リンクを紹介します。`,
  release.legacyUrl,
  { url: release.image, alt: `${release.title} ジャケット` },
);

export default function FromHereReleasePage() {
  const related = releases.filter(
    (item) => item.artistSlug === release.artistSlug && item.slug !== release.slug,
  );
  const artist = getArtistBySlug(release.artistSlug);

  return (
    <main className="detail-page">
      <section className="detail-hero wrap">
        <Link className="detail-back" href="/catalog" data-reveal>← catalog</Link>
        <div className="detail-grid">
          <figure className="detail-media" data-reveal>
            <Image
              src={release.image}
              alt={`${release.title} ジャケット`}
              width={1024}
              height={1024}
              sizes="(max-width: 820px) 100vw, 50vw"
              priority
            />
          </figure>
          <div className="detail-intro" data-reveal>
            <p className="detail-kicker">release</p>
            <h1>{release.title}</h1>
            <p className="detail-artist">
              {artist ? <Link href={artist.href}>{release.artist}</Link> : release.artist}
            </p>
            {release.lead ? <p className="detail-lead">{release.lead}</p> : null}
            {release.bandcampId ? (
              <div className="detail-bandcamp" data-reveal>
                <iframe
                  title={`${release.title} by ${release.artist} — Bandcamp Player`}
                  style={{ border: 0, width: "100%", height: 472 }}
                  src={`https://bandcamp.com/EmbeddedPlayer/album=${release.bandcampId}/size=large/bgcol=000000/linkcol=ffffff/tracklist=true/artwork=small/transparent=true/`}
                >
                  <a href={release.bandcampUrl}>{release.title} by {release.artist}</a>
                </iframe>
              </div>
            ) : null}
            <div className="detail-actions" aria-label="Release links">
              {release.links.map((link) => (
                <Button key={link.label} asChild variant="ghost" className="detail-action">
                  <a href={link.href}>{link.label} ↗</a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="detail-panel">
        <div className="wrap detail-content-grid">
          <article data-reveal>
            <p className="section-label">tracklist</p>
            <ol className="tracklist">
              {release.tracklist.map((track) => (
                <li key={track.title}>
                  <span>{track.title}</span>
                  <span>{track.duration}</span>
                </li>
              ))}
            </ol>
          </article>

          <dl className="detail-meta" data-reveal>
            <div>
              <dt>released</dt>
              <dd>{release.releasedAt}</dd>
            </div>
            <div>
              <dt>format</dt>
              <dd>{release.format}</dd>
            </div>
            <div>
              <dt>credits</dt>
              <dd style={{ whiteSpace: "pre-line" }}>{release.credits}</dd>
            </div>
          </dl>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="related wrap">
          <p className="section-label" data-reveal>more from slp</p>
          <div className="card-grid detail-card-grid">
            {related.map((item) => (
              <ReleaseCard key={item.slug} release={item} showDate />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
