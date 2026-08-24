import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { releases } from "@/data/releases";
import { SITE_URL } from "@/data/site";

const description = "SLPは福岡を拠点とするレコードレーベル。テクノ、アンビエント、ポストロックなどジャンルを横断しながら作品をリリースしています。";

export const metadata: Metadata = {
  title: { absolute: "SLP | Record Label, Fukuoka" },
  description,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "SLP | Record Label, Fukuoka",
    description,
    url: SITE_URL,
    siteName: "SLP",
    locale: "ja_JP",
    type: "website",
    images: [{ url: releases[0].image, width: 1024, height: 1024, alt: "impressionists ジャケット" }],
  },
  twitter: { card: "summary_large_image", title: "SLP | Record Label, Fukuoka", description, images: [releases[0].image] },
};

export default function HomePage() {
  const latest = releases[0];
  return (
    <main>
      <Hero />
      <section className="latest">
        <div className="wrap">
          <p className="eyebrow" data-reveal>NEW RELEASE — 2025/11/01</p>
          <div className="latest-grid">
            <Image
              src={latest.image}
              alt={`${latest.title} ジャケット`}
              width={1024}
              height={1024}
              sizes="(max-width: 560px) 270px, 280px"
              priority
              data-reveal
            />
            <div data-reveal>
              <h2>{latest.title}</h2>
              <p className="artist">{latest.artist}</p>
              <Link className="cta" href="/catalog">catalogを見る →</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
