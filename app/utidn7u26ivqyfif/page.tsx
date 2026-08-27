import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { pageMetadata } from "@/lib/metadata";

const fileName = "improvisation 1.wav";
const fileUrl = "/downloads/improvisation-1.wav";

export const metadata: Metadata = {
  ...pageMetadata(
    "Download — improvisation 1",
    "improvisation 1.wav を無料でダウンロードできます。",
    "/utidn7u26ivqyfif/",
  ),
  robots: { index: false, follow: false },
};

export default function ImprovisationDownloadPage() {
  return (
    <main>
      <PageHeader title="Download" />
      <section className="download wrap">
        <p className="download-instruction" data-reveal>タイトルをクリックしてダウンロード</p>
        <a className="download-title" href={fileUrl} download data-reveal>
          {fileName}
        </a>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <audio className="download-player" controls preload="none" data-reveal>
          <source src={fileUrl} type="audio/wav" />
        </audio>
      </section>
    </main>
  );
}
