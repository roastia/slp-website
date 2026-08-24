import Link from "next/link";
import { socialLinks } from "@/data/site";
import { NewsletterForm } from "@/components/newsletter-form";

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
        <NewsletterForm />
        <div className="copyright">© SLP</div>
      </div>
    </footer>
  );
}
