import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Catalog Detail Template",
  description: "SLP catalog detail page template.",
  robots: { index: false, follow: false },
};

export default function CatalogDetailTemplate() {
  return (
    <main className="detail-page">
      <section className="detail-hero wrap">
        <Link className="detail-back" href="/catalog" data-reveal>← catalog</Link>
        <div className="detail-grid">
          <figure className="detail-media" data-reveal>
            <Image
              src="https://www.slprecordings.com/wp-content/uploads/2025/10/impressionists-1024x1024.jpeg"
              alt="[Release Title] ジャケット"
              width={1024}
              height={1024}
              sizes="(max-width: 820px) 100vw, 50vw"
              priority
            />
          </figure>
          <div className="detail-intro" data-reveal>
            <p className="detail-kicker">release</p>
            <h1>[Release Title]</h1>
            <p className="detail-artist">[Artist Name]</p>
            <p className="detail-lead">[要確認：既存公式サイトから作品紹介を移行]</p>
            <div className="detail-actions" aria-label="Release links">
              <span className="detail-action">[要確認：listen / buy]</span>
            </div>
          </div>
        </div>
      </section>
      <section className="detail-panel">
        <div className="wrap detail-content-grid">
          <article data-reveal>
            <p className="section-label">tracklist</p>
            <ol className="tracklist">
              <li><span>[要確認：Track Title]</span><span>00:00</span></li>
            </ol>
          </article>
          <dl className="detail-meta" data-reveal>
            <div><dt>released</dt><dd>[要確認]</dd></div>
            <div><dt>format</dt><dd>[要確認]</dd></div>
            <div><dt>credits</dt><dd>[要確認]</dd></div>
          </dl>
        </div>
      </section>
      <section className="related wrap">
        <p className="section-label" data-reveal>more from slp</p>
        <p className="detail-note" data-reveal>[要確認：関連作品を表示]</p>
      </section>
    </main>
  );
}
