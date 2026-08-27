import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ReleaseCard } from "@/components/release-card";
import { releases } from "@/data/releases";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Catalog",
  "SLPのリリース一覧。impressionists、KEIMABASS、swmcpsによる作品をまとめて掲載しています。",
  "/catalog/",
);

export default function CatalogPage() {
  return (
    <main>
      <PageHeader title="Catalog" />
      <section className="catalog wrap">
        <p className="section-label" data-reveal>releases</p>
        <div className="card-grid">
          {releases.map((release) => <ReleaseCard key={release.slug} release={release} showDate />)}
        </div>
      </section>
    </main>
  );
}
