"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

function motionIsEnabled() {
  return document.documentElement.dataset.motion !== "off";
}

export function MotionSystem() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    document.body.classList.remove("is-leaving");
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    items.forEach((item, index) => {
      item.classList.add("reveal");
      item.style.setProperty("--reveal-delay", `${(index % 5) * 45}ms`);
    });

    if (!motionIsEnabled() || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }),
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    const onMotion = (event: Event) => {
      const enabled = (event as CustomEvent<boolean>).detail;
      if (!enabled) document.querySelectorAll(".reveal").forEach((item) => item.classList.add("is-visible"));
    };
    window.addEventListener("slp:motion", onMotion);
    return () => window.removeEventListener("slp:motion", onMotion);
  }, []);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as Element).closest<HTMLAnchorElement>("a[href]");
      if (!link || link.target === "_blank" || link.hasAttribute("download") || !motionIsEnabled()) return;
      const destination = new URL(link.href, window.location.href);
      if (destination.origin !== window.location.origin || destination.pathname === window.location.pathname) return;
      event.preventDefault();
      document.body.classList.add("is-leaving");
      window.setTimeout(() => router.push(`${destination.pathname}${destination.search}${destination.hash}`), 220);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [router]);

  useEffect(() => {
    const sync = () => document.body.classList.toggle("scrolled", window.scrollY > 24);
    sync();
    window.addEventListener("scroll", sync, { passive: true });
    return () => window.removeEventListener("scroll", sync);
  }, []);

  return null;
}
