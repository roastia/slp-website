import Image from "next/image";
import Link from "next/link";
import type { Artist } from "@/data/artists";

export function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <Link className="card" href={artist.href} data-reveal>
      <div className="frame">
        <Image src={artist.image} alt={artist.name} width={1024} height={1024} sizes="(max-width: 560px) 50vw, 20vw" />
      </div>
      <h2>{artist.name}</h2>
    </Link>
  );
}
