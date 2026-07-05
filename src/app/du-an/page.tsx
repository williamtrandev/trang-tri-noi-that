import type { Metadata } from "next";
import { getProjects, getSolutions } from "@/lib/content";
import { routes } from "@/config/routes";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { ProjectsGallery } from "@/components/projects/projects-gallery";
import { CtaBand } from "@/components/sections/cta-band";
import { photo } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Dự án nội thất đã thực hiện",
  description:
    "Thư viện dự án nội thất Nhà Mộc đã hoàn thiện: căn hộ, biệt thự, văn phòng, khách sạn, nhà hàng trên khắp cả nước. Lọc theo loại công trình và khu vực.",
  path: routes.projects,
});

export default async function ProjectsPage() {
  const [projects, solutions] = await Promise.all([getProjects(), getSolutions()]);

  const usedProvinces = new Set(projects.map((p) => p.provinceSlug));

  return (
    <>
      <PageHero
        title="Dự án đã thực hiện"
        description="Hàng nghìn không gian đã được chúng tôi kiến tạo. Đây là một vài công trình tiêu biểu."
        image={photo("interior-portfolio-projects-vn", 2000, 1100)}
        imageAlt="Dự án nội thất đã thực hiện"
      />
      <Breadcrumb items={[{ name: "Dự án", path: routes.projects }]} flush />

      <section className="py-14 lg:py-20">
        <Container>
          <ProjectsGallery
            projects={projects}
            solutionFilters={solutions.map((s) => ({ slug: s.slug, name: s.title }))}
            provinceFilters={[
              ...new Map(
                projects.map((p) => [p.provinceSlug, { slug: p.provinceSlug, name: p.provinceName }]),
              ).values(),
            ].filter((f) => usedProvinces.has(f.slug))}
          />
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
