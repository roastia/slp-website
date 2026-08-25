import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { pageMetadata } from "@/lib/metadata";

const fileName = "old cartoon(Oku Yusuke Remix).wav";
const fileUrl = "/downloads/old-cartoon-oku-yusuke-remix.wav";

export const metadata: Metadata = pageMetadata(
  "Download — old cartoon(Oku Yusuke Remix)",
  "old cartoon(Oku Yusuke Remix).wav を無料でダウンロードできます。",
  "/baddgfct2ida8gj4/",
);

export default function OldCartoonRemixDownloadPage() {
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
