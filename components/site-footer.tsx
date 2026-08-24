import Link from "next/link";
import { socialLinks } from "@/data/site";
import { NewsletterForm } from "@/components/newsletter-form";
import { SocialIcon } from "@/components/social-icon";

export function SiteFooter() {
  return (
    <footer className="site">
      <div className="wrap">
        <div>
          {socialLinks.map((item) => (
            <Link key={item.label} href={item.href} target="_blank" rel="noreferrer">
              <SocialIcon label={item.label} />
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
