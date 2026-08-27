import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Radio",
  "SLPのラジオ・ポッドキャスト「SLP Radio」。Spotifyで配信中のエピソード一覧。",
  "/radio/",
);

const SHOW_ID = "75CG31p8yjV8XDsAHtbq4u";

export default function RadioPage() {
  return (
    <main>
      <PageHeader title="Radio" />
      <section className="radio wrap">
        <div className="radio-list" data-reveal>
          <iframe
            src={`https://open.spotify.com/embed/show/${SHOW_ID}?utm_source=generator`}
            width="100%"
            height="352"
            frameBorder="0"
            loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            title="SLP Radio — Spotify"
          />
        </div>
      </section>
    </main>
  );
}
