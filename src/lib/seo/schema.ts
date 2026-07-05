import { siteConfig } from "@/config/site";
import { absoluteUrl } from "./url";
import type { FaqItem } from "@/lib/content/types";

type Json = Record<string, unknown>;

export function organizationSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl("/logo.png"),
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    foundingDate: String(siteConfig.foundedYear),
    sameAs: Object.values(siteConfig.socials),
  };
}

export function localBusinessSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": ["FurnitureStore", "GeneralContractor"],
    "@id": absoluteUrl("/#localbusiness"),
    name: siteConfig.name,
    image: absoluteUrl("/og-default.jpg"),
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressCountry: "VN",
    },
    openingHours: "Mo-Su 08:00-19:00",
    areaServed: ["TP.HCM", "Bình Dương", "Đồng Nai", "Cần Thơ", "Lâm Đồng"].map(
      (name) => ({ "@type": "AdministrativeArea", name }),
    ),
  };
}

export function serviceSchema(args: {
  name: string;
  description: string;
  path: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: args.name,
    description: args.description,
    url: absoluteUrl(args.path),
    provider: { "@id": absoluteUrl("/#organization") },
    areaServed: { "@type": "Country", name: "Việt Nam" },
    serviceType: "Nội thất",
  };
}

export function productSchema(args: {
  name: string;
  description: string;
  image: string[];
  priceFrom?: number;
  material?: string[];
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: args.name,
    description: args.description,
    image: args.image,
    material: args.material,
    brand: { "@type": "Brand", name: siteConfig.name },
    ...(args.priceFrom
      ? {
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "VND",
            lowPrice: args.priceFrom,
            availability: "https://schema.org/InStock",
            seller: { "@id": absoluteUrl("/#organization") },
          },
        }
      : {}),
  };
}

export function faqSchema(faqs: FaqItem[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

export function articleSchema(args: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  author: string;
  path: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: args.title,
    description: args.description,
    image: args.image,
    datePublished: args.datePublished,
    author: { "@type": "Person", name: args.author },
    publisher: { "@id": absoluteUrl("/#organization") },
    mainEntityOfPage: absoluteUrl(args.path),
  };
}
