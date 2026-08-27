"use client";

import { useState } from "react";

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14.6 8.4h1.9V5.3c-.33-.05-1.46-.15-2.78-.15-2.75 0-4.64 1.7-4.64 4.83v2.53H6.1v3.5h2.98V21.9h3.6v-5.9h2.86l.45-3.5h-3.31v-2.2c0-1.01.27-1.9 1.92-1.9Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LineIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="12" rx="4" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 17v3l4-3" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="12" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M8.5 16v1.5A2.5 2.5 0 0 0 11 20h6.5A2.5 2.5 0 0 0 20 17.5V11a2.5 2.5 0 0 0-2.5-2.5H16"
        stroke="currentColor"
        strokeWidth="1.7"
        fill="none"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12.5 10 17.5 19 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable (e.g. insecure context) — fail silently.
    }
  }

  return (
    <div className="share-buttons">
      <span className="share-label">Share</span>
      <a
        className="share-button"
        href={`https://x.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Xで共有"
      >
        <XIcon />
      </a>
      <a
        className="share-button"
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebookで共有"
      >
        <FacebookIcon />
      </a>
      <a
        className="share-button"
        href={`https://social-plugins.line.me/lineit/share?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LINEで共有"
      >
        <LineIcon />
      </a>
      <button type="button" className="share-button" onClick={handleCopy} aria-label="URLをコピー">
        {copied ? <CheckIcon /> : <CopyIcon />}
      </button>
      <span className="share-status" role="status" aria-live="polite">
        {copied ? "コピーしました" : ""}
      </span>
    </div>
  );
}
