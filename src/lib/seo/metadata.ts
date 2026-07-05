import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "./url";

interface BuildMetaArgs {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
  type?: "website" | "article";
}

/** Tạo Metadata nhất quán cho mọi trang. Canonical tự tham chiếu. */
export function buildMetadata({
  title,
  description,
  path,
  image,
  noindex,
  type = "website",
}: BuildMetaArgs): Metadata {
  const url = absoluteUrl(path);
  const ogImage = image ?? siteConfig.url + "/og-default.jpg";
  const fullTitle =
    path === "/" ? `${siteConfig.name} — ${siteConfig.tagline}` : `${title} | ${siteConfig.name}`;

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true, "max-image-preview": "large" },
    openGraph: {
      type,
      locale: "vi_VN",
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}
