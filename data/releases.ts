export type ReleaseLink = {
  label: string;
  href: string;
};

export type Track = {
  title: string;
  duration: string;
};

export type Release = {
  slug: string;
  title: string;
  artist: string;
  artistSlug: string;
  href: string;
  legacyUrl: string;
  image: string;
  tag: "NEW" | "EP" | "SINGLE" | "LP";
  lead?: string;
  tracklist: Track[];
  releasedAt: string;
  format: string;
  credits: string;
  links: ReleaseLink[];
};

export const releases: Release[] = [
  {
    slug: "impressionists-impressionists",
    title: "impressionists",
    artist: "impressionists",
    artistSlug: "impressionists",
    href: "/catalog/impressionists-impressionists/",
    legacyUrl: "/catalog/impressionists-impressionists/",
    image: "/images/releases/impressionists.jpg",
    tag: "NEW",
    lead:
      "山口県を拠点に活動する橋本崇広を中心としたプロジェクトimpressionistsが放つ、2025年リリースのセルフタイトル2ndアルバム。ジャンルの枠を軽やかに飛び越え、バンドとしてのポテンシャルを余すことなく示した全12曲。ボーカルを前面に押し出した楽曲が多数収録されている。",
    tracklist: [
      { title: "opener", duration: "04:31" },
      { title: "from here", duration: "03:51" },
      { title: "tape A", duration: "03:14" },
      { title: "football", duration: "04:08" },
      { title: "polyloop", duration: "02:24" },
      { title: "bass phrase", duration: "03:31" },
      { title: "inside reflection", duration: "04:30" },
      { title: "minimal", duration: "02:45" },
      { title: "old cartoon", duration: "03:26" },
      { title: "moonlight reflection", duration: "02:00" },
      { title: "stay with me", duration: "05:18" },
      { title: "meet next life", duration: "05:52" },
    ],
    releasedAt: "2025.11.01",
    format: "Digital",
    credits: "℗ 2025 SLP\nEngineered by 奥雄祐",
    links: [
      { label: "Spotify", href: "https://open.spotify.com/intl-ja/album/34VpMev4iPnctoQt7ZMPxU" },
      { label: "Apple Music", href: "https://music.apple.com/jp/album/impressionists/1845996556" },
      { label: "Bandcamp", href: "https://slprecordings.bandcamp.com/" },
    ],
  },
  {
    slug: "from-here_impressionists",
    title: "from here",
    artist: "impressionists",
    artistSlug: "impressionists",
    href: "/from-here_impressionists/",
    legacyUrl: "/from-here_impressionists/",
    image: "/images/releases/from-here.jpg",
    tag: "EP",
    lead:
      "2ndアルバムに先駆けて放たれた1stシングル。前作『余白』から表現の幅を広げ、静謐なアンビエント曲「daytime moon」に始まり、impressionists初のボーカル曲「from here」、Droneのような重厚さを持つ「tape B」へと続く全3曲。",
    tracklist: [
      { title: "daytime moon", duration: "03:08" },
      { title: "from here", duration: "03:51" },
      { title: "tape B", duration: "04:01" },
    ],
    releasedAt: "2025.10.05",
    format: "Digital",
    credits: "℗ 2025 SLP",
    links: [
      { label: "Spotify", href: "https://open.spotify.com/intl-ja/album/4bM4wZQmjF9xFcij4AAyhF" },
      { label: "Apple Music", href: "https://music.apple.com/jp/album/from-here-single/1840076586" },
      { label: "Bandcamp", href: "https://slprecordings.bandcamp.com/" },
    ],
  },
  {
    slug: "avt_",
    title: "avt_",
    artist: "swmcps",
    artistSlug: "swmcps",
    href: "/catalog/avt_/",
    legacyUrl: "/catalog/avt_/",
    image: "/images/releases/avt.jpg",
    tag: "SINGLE",
    tracklist: [
      { title: "avt_001", duration: "02:08" },
      { title: "avt_002", duration: "01:39" },
      { title: "avt_003", duration: "01:59" },
      { title: "avt_004", duration: "02:05" },
      { title: "avt_005", duration: "02:00" },
      { title: "avt_006", duration: "02:00" },
      { title: "avt_007", duration: "02:13" },
      { title: "avt_008", duration: "02:05" },
      { title: "avt_009", duration: "02:12" },
      { title: "avt_010", duration: "02:12" },
      { title: "avt_011", duration: "02:08" },
      { title: "avt_012", duration: "02:08" },
      { title: "avt_013", duration: "02:12" },
      { title: "avt_014", duration: "02:12" },
      { title: "avt_015", duration: "02:12" },
    ],
    releasedAt: "2022.04.24",
    format: "Digital",
    credits: "℗ 2024 SLP",
    links: [
      { label: "Spotify", href: "https://open.spotify.com/intl-ja/album/4ngcDNxTDEwXUmirhjBUxm" },
      { label: "Apple Music", href: "https://music.apple.com/jp/album/avt/1722200698" },
      { label: "Amazon Music", href: "https://music.amazon.co.jp/albums/B0CQNHNQPN" },
      { label: "YouTube Music", href: "https://music.youtube.com/playlist?list=OLAK5uy_kz2RfdF62a-Zka2hHXswhTToCCDGuDncI" },
      { label: "LINE MUSIC", href: "https://music.line.me/webapp/album/mb000000000349557c" },
    ],
  },
  {
    slug: "ordinarysingle_keimabass",
    title: "Ordinary Single (Waves)",
    artist: "KEIMABASS",
    artistSlug: "keimabass",
    href: "/catalog/ordinarysingle_keimabass/",
    legacyUrl: "/catalog/ordinarysingle_keimabass/",
    image: "/images/releases/ordinary-single.jpg",
    tag: "SINGLE",
    tracklist: [
      { title: "avt_001", duration: "02:08" },
      { title: "avt_002", duration: "01:39" },
      { title: "avt_003", duration: "01:59" },
      { title: "avt_004", duration: "02:05" },
      { title: "avt_005", duration: "02:00" },
      { title: "avt_006", duration: "02:00" },
      { title: "avt_007", duration: "02:13" },
      { title: "avt_008", duration: "02:05" },
      { title: "avt_009", duration: "02:12" },
      { title: "avt_010", duration: "02:12" },
      { title: "avt_011", duration: "02:08" },
      { title: "avt_012", duration: "02:08" },
      { title: "avt_013", duration: "02:12" },
      { title: "avt_014", duration: "02:12" },
      { title: "avt_015", duration: "02:12" },
    ],
    releasedAt: "2016.08.23",
    format: "Digital",
    credits: "℗ 2024 SLP",
    links: [
      { label: "Spotify", href: "https://open.spotify.com/intl-ja/album/5l9N3p9ipgm6KBwXdi1Clg" },
      { label: "Apple Music", href: "https://music.apple.com/jp/album/ordinary-single-waves-single/1758297006" },
      { label: "YouTube Music", href: "https://music.youtube.com/playlist?list=OLAK5uy_lsn4AMeKu7gdeL6hv8IcKReSm7zZvwZTQ" },
      { label: "LINE MUSIC", href: "https://music.line.me/webapp/album/mb0000000003c0f84f" },
    ],
  },
  {
    slug: "cc_keimabass",
    title: "CC",
    artist: "KEIMABASS",
    artistSlug: "keimabass",
    href: "/catalog/cc_keimabass/",
    legacyUrl: "/catalog/cc_keimabass/",
    image: "/images/releases/cc.jpg",
    tag: "SINGLE",
    tracklist: [
      { title: "Netemo Sametemo", duration: "07:35" },
      { title: "SHUT UP AND PLAY THE PIANO", duration: "05:48" },
      { title: "The Insult", duration: "07:17" },
      { title: "El ultimo traje", duration: "06:57" },
      { title: "Woman at war", duration: "05:41" },
      { title: "Ai ga Nanda", duration: "04:12" },
      { title: "First Reformed", duration: "06:22" },
      { title: "Time Remembered Life & Music of Bill Evans", duration: "04:52" },
      { title: "In den Gängen", duration: "05:26" },
      { title: "Une année polaire", duration: "06:05" },
      { title: "Where are you, João Gilberto?", duration: "06:09" },
      { title: "The Old Man & the Gun", duration: "05:03" },
    ],
    releasedAt: "2024.07.14",
    format: "Digital",
    credits: "℗ 2024 SLP",
    links: [
      { label: "Spotify", href: "https://open.spotify.com/intl-ja/album/2WsGctFplOCMHN1JxRVUpC" },
      { label: "Apple Music", href: "https://music.apple.com/jp/album/cc/1757589440" },
      { label: "Amazon Music", href: "https://music.amazon.co.jp/albums/B0D9K5G1NP" },
      { label: "YouTube Music", href: "https://music.youtube.com/playlist?list=OLAK5uy_k4-CVxy0IbVGksM2dXu6H5k79CKc2eCNw" },
      { label: "LINE MUSIC", href: "https://music.line.me/webapp/album/mb0000000003bf463e" },
    ],
  },
  {
    slug: "rwotnc-a_keimabass",
    title: "rwotnc a",
    artist: "KEIMABASS",
    artistSlug: "keimabass",
    href: "/catalog/rwotnc-a_keimabass/",
    legacyUrl: "/catalog/rwotnc-a_keimabass/",
    image: "/images/releases/rwotnc-a.jpg",
    tag: "SINGLE",
    tracklist: [
      { title: "rwotnc-01", duration: "03:52" },
      { title: "rwotnc-02", duration: "04:12" },
      { title: "rwotnc-03", duration: "03:16" },
      { title: "rwotnc-04", duration: "03:22" },
    ],
    releasedAt: "2016.04.03",
    format: "Digital",
    credits: "℗ 2024 SLP",
    links: [
      { label: "Spotify", href: "https://open.spotify.com/intl-ja/album/36S4XYihen4k5x13wcoEci" },
      { label: "Apple Music", href: "https://music.apple.com/jp/album/rwotnc-a-ep/1756268160" },
      { label: "Amazon Music", href: "https://music.amazon.co.jp/albums/B0D946ZP3B" },
      { label: "YouTube Music", href: "https://music.youtube.com/playlist?list=OLAK5uy_lywwBLDmnOK_F6GB41OqwJHPJTT1ZgeVM" },
      { label: "LINE MUSIC", href: "https://music.line.me/webapp/album/mb0000000003bbdd08" },
    ],
  },
  {
    slug: "matatakukokyuu_keimabass",
    title: "瞬く呼吸",
    artist: "KEIMABASS",
    artistSlug: "keimabass",
    href: "/catalog/matatakukokyuu_keimabass/",
    legacyUrl: "/catalog/matatakukokyuu_keimabass/",
    image: "/images/releases/matatakukokyuu.jpg",
    tag: "SINGLE",
    tracklist: [
      { title: "明", duration: "07:25" },
      { title: "バースデイ", duration: "04:13" },
      { title: "風景", duration: "04:23" },
      { title: "あなたと寄り添うこと", duration: "06:22" },
      { title: "最期の夜泳", duration: "05:26" },
    ],
    releasedAt: "2013.08.25",
    format: "Digital",
    credits: "℗ 2024 SLP",
    links: [
      { label: "Spotify", href: "https://open.spotify.com/intl-ja/album/0bQQ37wZ7vCnn3cI980S67" },
      { label: "Apple Music", href: "https://music.apple.com/jp/album/%E7%9E%AC%E3%81%8F%E5%91%BC%E5%90%B8-ep/1756274986" },
      { label: "Amazon Music", href: "https://music.amazon.co.jp/albums/B0D948B9DJ" },
      { label: "YouTube Music", href: "https://music.youtube.com/playlist?list=OLAK5uy_n3GsxMBSBe28rijrBuHXYopjoWobSfdf4" },
      { label: "LINE MUSIC", href: "https://music.line.me/webapp/album/mb0000000003bbdd09" },
    ],
  },
  {
    slug: "yohaku_impressionists",
    title: "余白",
    artist: "impressionists",
    artistSlug: "impressionists",
    href: "/catalog/yohaku_impressionists/",
    legacyUrl: "/catalog/yohaku_impressionists/",
    image: "/images/releases/yohaku.webp",
    tag: "LP",
    lead:
      "山口市を拠点とする5人組ポストロックバンドlittle phraseの橋本崇広を中心としたプロジェクトの、2024年リリースの1stアルバム。フィールドレコーディングを多用したアンビエントを基調に、橋本の美しく心地よいメロディーセンスが光る全10曲。impressionistsの始まりを告げる作品。",
    tracklist: [
      { title: "monorail", duration: "05:23" },
      { title: "間", duration: "07:42" },
      { title: "mist", duration: "03:00" },
      { title: "寺", duration: "03:09" },
      { title: "penguin eggs", duration: "02:51" },
      { title: "雨音", duration: "04:12" },
      { title: "wave", duration: "04:55" },
      { title: "soak up the rays", duration: "09:16" },
      { title: "波止場", duration: "03:50" },
      { title: "meet next life", duration: "04:06" },
    ],
    releasedAt: "2024.05.05",
    format: "Digital",
    credits: "℗ 2024 SLP",
    links: [
      { label: "Spotify", href: "https://open.spotify.com/intl-ja/album/7sozDJDAPE9EJOYYYVwhz0" },
      { label: "Apple Music", href: "https://music.apple.com/jp/album/%E4%BD%99%E7%99%BD/1745666201" },
      { label: "Amazon Music", href: "https://music.amazon.co.jp/albums/B0D3V6XJN2" },
      { label: "YouTube Music", href: "https://music.youtube.com/playlist?list=OLAK5uy_l_eHVxG5vp04IhZ8_GLl_9oavkUe237nE" },
      { label: "LINE MUSIC", href: "https://music.line.me/webapp/album/mb00000000039eba2f" },
      { label: "その他の配信サービス", href: "https://linkcloud.mu/bfb90061" },
    ],
  },
];

export function getReleaseBySlug(slug: string): Release | undefined {
  return releases.find((release) => release.slug === slug);
}
