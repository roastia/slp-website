import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { MotionSystem } from "@/components/motion-system";
import { JsonLd } from "@/components/json-ld";
import { organizationJsonLd } from "@/lib/structured-data";
import { SITE_URL } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "SLP | Record Label, Fukuoka", template: "%s | SLP" },
  description: "SLPは福岡を拠点とするレコードレーベル。テクノ、アンビエント、ポストロックなどジャンルを横断しながら作品をリリースしています。",
  applicationName: "SLP",
  openGraph: { siteName: "SLP", locale: "ja_JP", type: "website" },
  twitter: { card: "summary_large_image" },
  verification: {
    // Google Search Consoleの「所有権の確認」→「HTMLタグ」で発行される
    // content="xxxxx" の xxxxx 部分だけをここに貼り付けてください。
    google: "8wiFbZrJpF5UOYGQfavVn9rAZiyoOkJv09s-pvE6Fts",
  },
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
        {/*
          Fontshareはself-host（next/font/local化）ができれば理想だが、
          このプロジェクトの作業環境からapi.fontshare.comへのネットワークアクセスが
          できず、フォントファイルを取得できないため断念。preloadでCSS取得の
          優先度を上げることで、体感速度への影響を軽減している。
        */}
        <link
          rel="preload"
          as="style"
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap"
        />
      </head>
      <body>
        <JsonLd data={organizationJsonLd()} />
        <SiteHeader />
        {children}
        <SiteFooter />
        <MotionSystem />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
