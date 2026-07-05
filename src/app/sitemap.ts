import type { MetadataRoute } from "next";
import { routes } from "@/config/routes";
import { absoluteUrl } from "@/lib/seo/url";
import {
  getAllProducts,
  getLocations,
  getPosts,
  getProductCategories,
  getProjects,
  getServices,
  getSolutions,
} from "@/lib/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const [services, categories, products, solutions, projects, locations, posts] =
    await Promise.all([
      getServices(),
      getProductCategories(),
      getAllProducts(),
      getSolutions(),
      getProjects(),
      getLocations(),
      getPosts(),
    ]);

  const staticPaths = [
    routes.home,
    routes.about,
    routes.workshop,
    routes.process,
    routes.services,
    routes.products,
    routes.solutions,
    routes.projects,
    routes.locations,
    routes.pricing,
    routes.blog,
    routes.faq,
    routes.contact,
  ];

  const entry = (path: string, priority = 0.7): MetadataRoute.Sitemap[number] => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: "weekly",
    priority,
  });

  return [
    entry(routes.home, 1),
    ...staticPaths.slice(1).map((p) => entry(p, 0.8)),
    ...services.map((s) => entry(routes.service(s.slug), 0.9)),
    ...categories.map((c) => entry(routes.productCategory(c.slug), 0.8)),
    ...products.map((p) => entry(routes.product(p.categorySlug, p.slug), 0.7)),
    ...solutions.map((s) => entry(routes.solution(s.slug), 0.8)),
    ...projects.map((p) => entry(routes.project(p.slug), 0.6)),
    ...locations.map((l) => entry(routes.location(l.slug), 0.7)),
    ...posts.map((p) => entry(routes.post(p.slug), 0.6)),
  ];
}
