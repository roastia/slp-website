import Image from "next/image";
import Link from "next/link";
import type { Release } from "@/data/releases";

export function ReleaseCard({ release }: { release: Release }) {
  return (
    <Link className="card" href={release.href} data-reveal>
      <div className="frame">
        <Image src={release.image} alt={`${release.title} ジャケット`} width={1024} height={1024} sizes="(max-width: 560px) 50vw, 20vw" />
        <span className="tag">{release.tag}</span>
      </div>
      <span className="title">{release.title}</span>
      <div className="artist">{release.artist}</div>
    </Link>
  );
}
