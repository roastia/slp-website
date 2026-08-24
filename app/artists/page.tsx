import type { Metadata } from "next";
import { ArtistCard } from "@/components/artist-card";
import { PageHeader } from "@/components/page-header";
import { artists } from "@/data/artists";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Artists",
  "SLP所属アーティスト一覧。impressionists、KEIMABASS、swmcpsを紹介しています。",
  "/artists/",
);

export default function ArtistsPage() {
  return (
    <main>
      <PageHeader title="Artists" description="SLPに所属するアーティスト" />
      <section className="artists wrap">
        <p className="section-label" data-reveal>artists</p>
        <div className="card-grid">
          {artists.map((artist) => <ArtistCard key={artist.slug} artist={artist} />)}
        </div>
      </section>
    </main>
  );
}
