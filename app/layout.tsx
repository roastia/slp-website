import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { MotionSystem } from "@/components/motion-system";
import { SITE_URL } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "SLP | Record Label, Fukuoka", template: "%s | SLP" },
  description: "SLPは福岡を拠点とするレコードレーベル。テクノ、アンビエント、ポストロックなどジャンルを横断しながら作品をリリースしています。",
  applicationName: "SLP",
  openGraph: { siteName: "SLP", locale: "ja_JP", type: "website" },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap"
        />
      </head>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <MotionSystem />
      </body>
    </html>
  );
}
