export const SITE_URL = "https://www.slprecordings.com";

export const navItems = [
  { href: "/", label: "home", key: "home" },
  { href: "/catalog", label: "catalog", key: "catalog" },
  { href: "/artists", label: "artists", key: "artists" },
  { href: "/movie", label: "movie", key: "movie" },
  { href: "/radio", label: "radio", key: "radio" },
  { href: "/about", label: "about", key: "about" },
  { href: "/contact", label: "contact", key: "contact" },
  { href: "/202608interview", label: "dialogue", key: "dialogue" },
] as const;

export const socialLinks = [
  { href: "https://x.com/slprecordings", label: "X" },
  { href: "https://www.instagram.com/slprcrdngs/", label: "Instagram" },
  { href: "https://www.facebook.com/profile.php?id=61559549063760", label: "Facebook" },
  { href: "https://slprecordings.bandcamp.com/", label: "Bandcamp" },
  { href: "https://www.youtube.com/@slprecordings", label: "YouTube" },
  { href: "https://suzuri.jp/SLP", label: "SUZURI" },
] as const;
