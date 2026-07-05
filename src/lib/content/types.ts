/** Data model — không ràng buộc DB. Mọi truy cập đi qua ContentProvider. */

export interface SeoOverride {
  title?: string;
  description?: string;
  ogImage?: string;
  noindex?: boolean;
}

export interface ImageAsset {
  src: string;
  alt: string; // bắt buộc — build fail nếu thiếu
  caption?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string; // tên lucide icon
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  heroImage: string;
  intro: string;
  benefits: Benefit[];
  processSteps: ProcessStep[];
  priceFrom?: number;
  priceUnit?: string;
  faqs: FaqItem[];
  relatedProjectSlugs: string[];
  seo?: SeoOverride;
}

export interface ProductCategory {
  slug: string;
  title: string;
  shortDescription: string;
  heroImage: string;
  intro: string;
  faqs: FaqItem[];
  seo?: SeoOverride;
}

export interface Product {
  slug: string;
  categorySlug: string;
  title: string;
  images: ImageAsset[];
  materials: string[];
  dimensions?: string;
  priceFrom?: number;
  description: string;
  seo?: SeoOverride;
}

export interface Solution {
  slug: string;
  title: string;
  audience: "B2C" | "B2B";
  shortDescription: string;
  heroImage: string;
  intro: string;
  highlights: string[];
  faqs: FaqItem[];
  relatedProjectSlugs: string[];
  seo?: SeoOverride;
}

export interface Project {
  slug: string;
  title: string;
  solutionSlug: string;
  provinceSlug: string;
  provinceName: string;
  area?: string;
  durationDays?: number;
  cover: string;
  gallery: ImageAsset[];
  summary: string;
  scope: string[];
  featured: boolean;
  testimonialId?: string;
  seo?: SeoOverride;
}

export interface Location {
  slug: string;
  name: string;
  region: string;
  serviceAreaNote: string;
  publishable: boolean;
  seo?: SeoOverride;
}

export interface Testimonial {
  id: string;
  author: string;
  role?: string;
  quote: string;
  provinceName?: string;
  rating?: number;
}

export interface Post {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  cover: string;
  author: string;
  publishedAt: string;
  readingMinutes: number;
  body: string; // markdown-lite
  seo?: SeoOverride;
}
