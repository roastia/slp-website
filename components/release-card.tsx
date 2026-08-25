import Image from "next/image";
import Link from "next/link";
import type { Release } from "@/data/releases";

export function ReleaseCard({ release, showDate = false }: { release: Release; showDate?: boolean }) {
  return (
    <Link className="card" href={release.href} data-reveal>
      <div className="frame">
        <Image src={release.image} alt={`${release.title} ジャケット`} width={1024} height={1024} sizes="(max-width: 560px) 50vw, 20vw" />
        <span className={`tag tag-${release.tag.toLowerCase()}`}>{release.tag}</span>
      </div>
      <h2 className="title">{release.title}</h2>
      <div className="artist">{release.artist}</div>
      {showDate ? <div className="released">{release.releasedAt}</div> : null}
    </Link>
  );
}
