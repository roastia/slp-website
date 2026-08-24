import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { releases, getReleaseBySlug } from "@/data/releases";
import { pageMetadata } from "@/lib/metadata";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return releases
    .filter((release) => release.legacyUrl.startsWith("/catalog/"))
    .map((release) => ({ slug: release.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const release = getReleaseBySlug(slug);
  if (!release) return {};
  return pageMetadata(
    `${release.title} — ${release.artist}`,
    `${release.artist}による『${release.title}』の作品情報、収録曲、配信リンクを紹介します。`,
    release.legacyUrl,
    { url: release.image, alt: `${release.title} ジャケット` },
  );
}

export default async function CatalogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const release = getReleaseBySlug(slug);
  if (!release || !release.legacyUrl.startsWith("/catalog/")) notFound();

  const related = releases.filter(
    (item) => item.artistSlug === release.artistSlug && item.slug !== release.slug,
  );

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
            <p className="detail-artist">{release.artist}</p>
            {release.lead ? <p className="detail-lead">{release.lead}</p> : null}
            {release.links.length > 0 ? (
              <div className="detail-actions" aria-label="Release links">
                {release.links.map((link) => (
                  <Button key={link.label} asChild variant="ghost" className="detail-action">
                    <a href={link.href}>{link.label} ↗</a>
                  </Button>
                ))}
              </div>
            ) : null}
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
              <Link key={item.slug} className="card" href={item.href} data-reveal>
                <div className="frame">
                  <Image
                    src={item.image}
                    alt={`${item.title} ジャケット`}
                    width={1024}
                    height={1024}
                    sizes="(max-width: 560px) 50vw, 20vw"
                    loading="lazy"
                  />
                </div>
                <span className="title">{item.title}</span>
                <div className="artist">{item.artist}</div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
