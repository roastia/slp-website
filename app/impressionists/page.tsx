import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getArtistBySlug } from "@/data/artists";
import { releases } from "@/data/releases";
import { pageMetadata } from "@/lib/metadata";
import { Button } from "@/components/ui/button";
import { ReleaseCard } from "@/components/release-card";

const artist = getArtistBySlug("impressionists")!;

export const metadata: Metadata = pageMetadata(
  `${artist.name} | Artists`,
  `${artist.name}のプロフィール、作品、活動情報を紹介します。山口を拠点に活動する橋本崇広を中心としたプロジェクト。`,
  artist.legacyUrl,
  { url: artist.image, alt: artist.name },
);

export default function ImpressionistsArtistPage() {
  const artistReleases = releases.filter((release) => artist.releaseSlugs.includes(release.slug));

  return (
    <main className="detail-page">
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
            <div className="detail-actions" aria-label="Artist links">
              {artist.links.map((link) => (
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
            <p className="section-label">profile</p>
            <p className="detail-copy" style={{ whiteSpace: "pre-line" }}>{artist.profile}</p>
          </article>

          <dl className="detail-meta" data-reveal>
            <div>
              <dt>based in</dt>
              <dd>{artist.basedIn}</dd>
            </div>
            <div>
              <dt>genres</dt>
              <dd>{artist.genres}</dd>
            </div>
            <div>
              <dt>activity</dt>
              <dd>{artist.activity}</dd>
            </div>
          </dl>
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

      <section className="related wrap">
        <p className="section-label" data-reveal>selected releases</p>
        <div className="card-grid detail-card-grid">
          {artistReleases.map((release) => (
            <ReleaseCard key={release.slug} release={release} showDate />
          ))}
        </div>
      </section>
    </main>
  );
}
