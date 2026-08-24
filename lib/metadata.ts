import type { Metadata } from "next";
import { SITE_URL } from "@/data/site";
import { releases } from "@/data/releases";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  image?: { url: string; alt: string },
): Metadata {
  const url = new URL(path, SITE_URL).toString();
  const ogImage = image ?? { url: releases[0].image, alt: "impressionists ジャケット" };
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "SLP",
      locale: "ja_JP",
      type: "website",
      images: [{ url: ogImage.url, width: 1024, height: 1024, alt: ogImage.alt }],
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImage.url] },
  };
}
