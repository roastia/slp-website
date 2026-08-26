"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { socialLinks } from "@/data/site";
import { NewsletterForm } from "@/components/newsletter-form";
import { SocialIcon } from "@/components/social-icon";

export function SiteFooter() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const sync = () => {
      document.documentElement.style.setProperty("--footer-space", `${footer.offsetHeight}px`);
    };
    sync();

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", sync);
      return () => window.removeEventListener("resize", sync);
    }
    const observer = new ResizeObserver(sync);
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="site" ref={footerRef}>
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
