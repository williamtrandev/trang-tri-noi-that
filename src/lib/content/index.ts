import { cache } from "react";
import {
  locations,
  posts,
  productCategories,
  products,
  projects,
  services,
  solutions,
  testimonials,
} from "./data";

/**
 * ContentProvider — repository pattern.
 * Hiện đọc từ dữ liệu TS tĩnh; có thể thay bằng CMS adapter mà không sửa page.
 * Bọc React.cache để dedupe trong 1 request.
 */

export const getServices = cache(async () => services);
export const getService = cache(async (slug: string) =>
  services.find((s) => s.slug === slug),
);

export const getProductCategories = cache(async () => productCategories);
export const getProductCategory = cache(async (slug: string) =>
  productCategories.find((c) => c.slug === slug),
);
export const getProductsByCategory = cache(async (categorySlug: string) =>
  products.filter((p) => p.categorySlug === categorySlug),
);
export const getProduct = cache(async (categorySlug: string, slug: string) =>
  products.find((p) => p.categorySlug === categorySlug && p.slug === slug),
);
export const getAllProducts = cache(async () => products);

export const getSolutions = cache(async () => solutions);
export const getSolution = cache(async (slug: string) =>
  solutions.find((s) => s.slug === slug),
);

export const getProjects = cache(async () => projects);
export const getFeaturedProjects = cache(async () =>
  projects.filter((p) => p.featured),
);
export const getProject = cache(async (slug: string) =>
  projects.find((p) => p.slug === slug),
);
export const getProjectsBySolution = cache(async (solutionSlug: string) =>
  projects.filter((p) => p.solutionSlug === solutionSlug),
);
export const getProjectsByProvince = cache(async (provinceSlug: string) =>
  projects.filter((p) => p.provinceSlug === provinceSlug),
);

export const getLocations = cache(async () =>
  locations.filter((l) => l.publishable),
);
export const getLocation = cache(async (slug: string) =>
  locations.find((l) => l.slug === slug && l.publishable),
);

export const getTestimonials = cache(async () => testimonials);
export const getTestimonial = cache(async (id?: string) =>
  id ? testimonials.find((t) => t.id === id) : undefined,
);

export const getPosts = cache(async () =>
  [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)),
);
export const getPost = cache(async (slug: string) =>
  posts.find((p) => p.slug === slug),
);

export const getProjectsFor = cache(async (slugs: string[]) =>
  projects.filter((p) => slugs.includes(p.slug)),
);
