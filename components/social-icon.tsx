import type { ReactNode } from "react";

const ICONS: Record<string, ReactNode> = {
  X: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 4.2 19 19.8M19 4.2 5 19.8" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.6" y="3.6" width="16.8" height="16.8" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.1" cy="6.9" r="1.05" fill="currentColor" />
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14.6 8.4h1.9V5.3c-.33-.05-1.46-.15-2.78-.15-2.75 0-4.64 1.7-4.64 4.83v2.53H6.1v3.5h2.98V21.9h3.6v-5.9h2.86l.45-3.5h-3.31v-2.2c0-1.01.27-1.9 1.92-1.9Z"
        fill="currentColor"
      />
    </svg>
  ),
  Bandcamp: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <text x="12" y="16.5" textAnchor="middle" fontSize="12" fontWeight="700" fill="currentColor">
        b
      </text>
    </svg>
  ),
  YouTube: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="6" width="18" height="12" rx="3.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M10.4 9.4 15.2 12l-4.8 2.6Z" fill="currentColor" />
    </svg>
  ),
  SUZURI: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <text x="12" y="16.5" textAnchor="middle" fontSize="11" fontWeight="700" fill="currentColor">
        S
      </text>
    </svg>
  ),
};

export function SocialIcon({ label }: { label: string }) {
  const icon = ICONS[label];
  if (!icon) return null;
  return <span className="social-icon">{icon}</span>;
}
