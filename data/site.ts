export const SITE_URL = "https://www.slprecordings.com";

export const navItems = [
  { href: "/", label: "Home", key: "home" },
  { href: "/catalog", label: "Catalog", key: "catalog" },
  { href: "/artists", label: "Artists", key: "artists" },
  { href: "/movie", label: "Movie", key: "movie" },
  { href: "/radio", label: "Radio", key: "radio" },
  { href: "/about", label: "About", key: "about" },
  { href: "/contact", label: "Contact", key: "contact" },
  { href: "/202608interview", label: "Dialogue", key: "dialogue" },
] as const;

export const socialLinks = [
  { href: "https://x.com/slprecordings", label: "X" },
  { href: "https://www.instagram.com/slprcrdngs/", label: "Instagram" },
  { href: "https://www.facebook.com/profile.php?id=61559549063760", label: "Facebook" },
  { href: "https://slprecordings.bandcamp.com/", label: "Bandcamp" },
  { href: "https://www.youtube.com/@slprecordings", label: "YouTube" },
  { href: "https://suzuri.jp/SLP", label: "SUZURI" },
] as const;
