import Link from "next/link";
import { socialLinks } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site">
      <div className="wrap">
        <div>
          {socialLinks.map((item) => (
            <Link key={item.label} href={item.href} target="_blank" rel="noreferrer">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="copyright">© SLP</div>
      </div>
    </footer>
  );
}
