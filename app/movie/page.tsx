import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Movie",
  "SLPアーティストによるミュージックビデオ・ライブ映像などの動画一覧。",
  "/movie/",
);

const videos = [
  "IH989p_Rb5s", "PAFjYYLhPpU", "iN3cmVDWYJM", "E92zwCAFDmw", "NwiFhLoAojI",
  "gRi5bCFDJkE", "uZXy2fCa77E", "vOKfqQlNacI", "TJVtEklOD4s", "WZe1mlLNkRg",
  "uFz_lrXhdd8", "o1AQk-s-oo4", "H_J4qReTecY", "uGS7PY2u52w", "hMsuhM2qwXI",
  "3I5tzkTsFKk", "6cDzYDPDjcY", "22Dzwe3Ifa4", "g17OACOA3Nk", "LD-HHU7x1kE",
];

export default function MoviePage() {
  return (
    <main>
      <PageHeader title="Movie" />
      <section className="movie wrap">
        <div className="movie-grid">
          {videos.map((id, index) => (
            <div className="movie-item" key={id} data-reveal>
              <div className="frame">
                <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  title={`SLP movie ${index + 1}`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
