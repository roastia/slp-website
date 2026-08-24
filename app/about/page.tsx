import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "About",
  "SLPは福岡を拠点とするレコードレーベル。テクノ、アンビエント、ポストロックなどジャンルを横断して作品をリリースしています。",
  "/about/",
);

export default function AboutPage() {
  return (
    <main className="about">
      <div className="wrap about-grid">
        <div data-reveal><p className="section-label">about</p></div>
        <div data-reveal>
          <h1 className="sr-only">About SLP</h1>
          <p>SLPは福岡を拠点とするレコードレーベル。テクノからアンビエント、ポストロックまでジャンルを横断しながら、鳴らすべき信号だけを届ける。</p>
          <p className="meta">
            LOCATION — FUKUOKA, JAPAN<br />
            GENRES — TECHNO / AMBIENT / POST ROCK / MINIMAL / POP / ELECTRO / ELECTRONICA / DANCE / WORLD<br />
            FOUNDED — 2024
          </p>
        </div>
      </div>
    </main>
  );
}
