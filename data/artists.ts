export type ArtistLink = {
  label: string;
  href: string;
  date?: string;
};

export type Artist = {
  slug: string;
  name: string;
  href: string;
  legacyUrl: string;
  image: string;
  lead: string;
  profile: string;
  links: ArtistLink[];
  basedIn: string;
  genres: string;
  activity: string;
  releaseSlugs: string[];
  dialogues?: ArtistLink[];
};

export const artists: Artist[] = [
  {
    slug: "impressionists",
    name: "impressionists",
    href: "/impressionists/",
    legacyUrl: "/impressionists/",
    image: "/images/artists/impressionists.jpg",
    lead:
      "山口県山口市を拠点としている5人組ポストロックバンドlittle phraseの橋本崇広を中心に、2024年から動き出したプロジェクト。アンビエントを基調としつつ、ビート、歌を取り入れるなど作風は多岐に渡る。制作、ライブにおいて柔軟かつ変則的なメンバー編成で活動中。",
    profile:
      "guitar, vocal, etc：橋本 崇広 / Takahiro Hashimoto（写真右・right）\ndrums, (super guitar)：津波 拓樹 / Hiroki Tsunami（写真中央・center）\nguitar, keyboard：西牟田 翔 / Sho Nishimuta（写真左・left）",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/impressionists2024/" },
      { label: "Lit.Link", href: "https://lit.link/impressionists" },
    ],
    basedIn: "Yamaguchi, Japan",
    genres: "Ambient / Band / Post Rock",
    activity: "Band / Live act",
    releaseSlugs: ["impressionists-impressionists", "from-here_impressionists", "yohaku_impressionists"],
    dialogues: [
      {
        label: '山口発、ジャンルを越境するプロジェクト"impressionists"',
        href: "/202608interview/",
        date: "2026.08.16",
      },
    ],
  },
  {
    slug: "keimabass",
    name: "KEIMABASS",
    href: "/artists/keimabass/",
    legacyUrl: "/artists/keimabass/",
    image: "/images/artists/keimabass.jpg",
    lead:
      "エレクトロニカを主とするトラックメイカー。長いバンド活動にて培った演奏力を軸に電子音を中心とした楽曲製作、ライブ演奏を展開。実験的でありながら温かみをもった音を追求する。ライブイベントにも多数出演し、映像作品への楽曲提供も行う。現在は活動を終了している。",
    profile: "これまでAlbum『瞬く呼吸』『Ordinary Single (Waves)』『rwotnc a』『CC』をリリース。",
    links: [],
    basedIn: "Fukuoka, Japan",
    genres: "Electronica",
    activity: "Producer（活動終了）",
    releaseSlugs: ["cc_keimabass", "ordinarysingle_keimabass", "rwotnc-a_keimabass", "matatakukokyuu_keimabass"],
  },
  {
    slug: "swmcps",
    name: "swmcps",
    href: "/artists/swmcps/",
    legacyUrl: "/artists/swmcps/",
    image: "/images/artists/swmcps.jpg",
    lead:
      "ミニマルビートメイカー。シンプルに繰り返されるビートに金属音や機械音が重なるIDMを制作する。曲調のジャンルは多岐に渡るが、全てはビート遊びをいかに曲に落とし込むか、というコンセプトのうえに制作されており、短時間の曲が多い。",
    profile: "これまでAlbum『avt_』をリリース。",
    links: [],
    basedIn: "Fukuoka, Japan",
    genres: "IDM / Minimal",
    activity: "Producer",
    releaseSlugs: ["avt_"],
  },
];

export function getArtistBySlug(slug: string): Artist | undefined {
  return artists.find((artist) => artist.slug === slug);
}
