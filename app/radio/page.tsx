import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Radio",
  "SLPのラジオ・ポッドキャスト。Spotifyで配信中のエピソード一覧。",
  "/radio/",
);

const episodes = [
  "1Oal54W3lQyEKmosVuzXmK",
  "17PeJWmtCfN6bW5X2VsffN",
  "74qCxniovsD2EIse9Qz6p8",
  "4bx9GyhxkC1k7OI0H29AWY",
  "2F5X6VmPJL24w64hbYfhKw",
  "6jWgzWLWWluP2z0mh4y2rg",
  "6iVwSf6eQVx1jJVdoJqfIo",
  "10br90tp7mFRSqImcaX1Vg",
];

export default function RadioPage() {
  return (
    <main>
      <PageHeader title="Radio" />
      <section className="radio wrap">
        <div className="radio-list">
          {episodes.map((id, index) => (
            <div key={id} data-reveal>
              <iframe
                src={`https://open.spotify.com/embed/episode/${id}?utm_source=generator`}
                width="100%"
                height="152"
                frameBorder="0"
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                title={`SLP radio episode ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
