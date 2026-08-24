import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Artist Detail Template",
  description: "SLP artist detail page template.",
  robots: { index: false, follow: false },
};

export default function ArtistDetailTemplate() {
  return (
    <main className="detail-page">
      <section className="detail-hero wrap">
        <Link className="detail-back" href="/artists" data-reveal>← artists</Link>
        <div className="detail-grid">
          <figure className="detail-media" data-reveal>
            <Image
              src="https://www.slprecordings.com/wp-content/uploads/2025/10/impresshionists3000_%E6%A8%AA202507-1024x1024.jpg"
              alt="[Artist Name]"
              width={1024}
              height={1024}
              sizes="(max-width: 820px) 100vw, 50vw"
              priority
            />
          </figure>
          <div className="detail-intro" data-reveal>
            <p className="detail-kicker">artist</p>
            <h1>[Artist Name]</h1>
            <p className="detail-lead">[要確認：既存公式サイトから短い紹介文を移行]</p>
            <div className="detail-actions" aria-label="Artist links">
              <span className="detail-action">[要確認：official link]</span>
            </div>
          </div>
        </div>
      </section>
      <section className="detail-panel">
        <div className="wrap detail-content-grid">
          <article data-reveal>
            <p className="section-label">profile</p>
            <p className="detail-copy">[要確認：既存公式サイトからプロフィール本文を移行]</p>
          </article>
          <dl className="detail-meta" data-reveal>
            <div><dt>based in</dt><dd>[要確認]</dd></div>
            <div><dt>genres</dt><dd>[要確認]</dd></div>
            <div><dt>activity</dt><dd>[要確認]</dd></div>
          </dl>
        </div>
      </section>
      <section className="related wrap">
        <p className="section-label" data-reveal>selected releases</p>
        <p className="detail-note" data-reveal>[要確認：当該アーティストの作品を表示]</p>
      </section>
    </main>
  );
}
