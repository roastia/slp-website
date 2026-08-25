"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/data/site";

const MOTION_KEY = "slp-motion";

function activeKey(pathname: string) {
  if (pathname === "/") return "home";
  if (pathname.startsWith("/catalog") || pathname.startsWith("/from-here")) return "catalog";
  if (pathname.startsWith("/artists") || pathname.startsWith("/impressionists")) return "artists";
  return navItems.find((item) => pathname.startsWith(item.href) && item.href !== "/")?.key;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [motionEnabled, setMotionEnabled] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const current = activeKey(pathname);
  const isHome = pathname === "/";

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const stored = window.localStorage.getItem(MOTION_KEY);
    const enabled = stored === "on" ? true : stored === "off" ? false : !media.matches;
    const frame = window.requestAnimationFrame(() => {
      setMotionEnabled(enabled);
      document.documentElement.dataset.motion = enabled ? "on" : "off";
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 820px)");
    const sync = () => {
      setIsMobile(media.matches);
      if (!media.matches) setMenuOpen(false);
    };
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        document.querySelector<HTMLButtonElement>(".menu-toggle")?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  function toggleMotion() {
    const enabled = !motionEnabled;
    setMotionEnabled(enabled);
    document.documentElement.dataset.motion = enabled ? "on" : "off";
    window.localStorage.setItem(MOTION_KEY, enabled ? "on" : "off");
    window.dispatchEvent(new CustomEvent("slp:motion", { detail: enabled }));
  }

  return (
    <div id="site-header">
      <div className="topstrip">
        <div className="wrap">
          <span>FUKUOKA, JP</span>
          <span className="signal">TECHNO / AMBIENT / MINIMAL / ELECTRONICA</span>
          <span className="top-controls">
            <Button
              type="button"
              variant="inverse"
              className="motion-toggle min-h-[30px] px-2 py-1 text-[0.62rem]"
              aria-pressed={motionEnabled}
              onClick={toggleMotion}
            >
              MOTION {motionEnabled ? "ON" : "OFF"}
            </Button>
          </span>
        </div>
      </div>

      <header className="site">
        <div className="wrap">
          {isHome ? (
            <span className="logo" aria-hidden="true" style={{ visibility: "hidden" }}>SLP</span>
          ) : (
            <Link className="logo" href="/" aria-label="SLP home" onClick={() => setMenuOpen(false)}>SLP</Link>
          )}
          <Button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "CLOSE" : "MENU"}
          </Button>
          <nav
            className="site"
            id="site-navigation"
            aria-label="Main navigation"
            aria-hidden={isMobile && !menuOpen ? true : undefined}
            inert={isMobile && !menuOpen}
          >
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={current === item.key ? "current" : undefined}
                aria-current={current === item.key ? "page" : undefined}
                tabIndex={isMobile && !menuOpen ? -1 : 0}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </div>
  );
}
