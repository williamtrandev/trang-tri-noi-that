import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MapPin, Maximize, Star } from "lucide-react";
import {
  getProject,
  getProjects,
  getProjectsBySolution,
  getSolution,
  getTestimonial,
} from "@/lib/content";
import { routes } from "@/config/routes";
import { buildMetadata } from "@/lib/seo/metadata";
import { articleSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/cards/project-card";
import { CtaBand } from "@/components/sections/cta-band";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return {};
  return buildMetadata({
    title: project.seo?.title ?? project.title,
    description: project.seo?.description ?? project.summary,
    path: routes.project(slug),
    image: project.cover,
    type: "article",
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();

  const [solution, testimonial, siblings] = await Promise.all([
    getSolution(project.solutionSlug),
    getTestimonial(project.testimonialId),
    getProjectsBySolution(project.solutionSlug),
  ]);
  const related = siblings.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: project.title,
          description: project.summary,
          image: project.cover,
          datePublished: "2026-01-01",
          author: "Nhà Mộc",
          path: routes.project(slug),
        })}
      />
      <PageHero title={project.title} description={project.summary} image={project.cover} imageAlt={project.title} />
      <Breadcrumb
        items={[
          { name: "Dự án", path: routes.projects },
          { name: project.title, path: routes.project(slug) },
        ]}
        flush
      />

      {/* Meta strip */}
      <section className="py-10 lg:py-14">
        <Container>
          <div className="grid gap-6 rounded-[16px] border border-line bg-surface-2 p-6 sm:grid-cols-2 lg:grid-cols-4 lg:p-8">
            <Meta icon={<MapPin className="h-5 w-5" />} label="Khu vực" value={project.provinceName} />
            {project.area && <Meta icon={<Maximize className="h-5 w-5" />} label="Diện tích" value={project.area} />}
            {project.durationDays && (
              <Meta icon={<CalendarDays className="h-5 w-5" />} label="Thời gian" value={`${project.durationDays} ngày`} />
            )}
            {solution && (
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-brand">
                  <Star className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm text-ink-muted">Loại công trình</div>
                  <Link href={routes.solution(solution.slug)} className="font-medium text-ink hover:text-brand">
                    {solution.title}
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Scope */}
          <div className="mt-8 flex flex-wrap gap-2.5">
            {project.scope.map((s) => (
              <span key={s} className="rounded-full border border-line-strong bg-surface px-4 py-1.5 text-sm text-ink">
                {s}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="pb-16 lg:pb-24">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            {project.gallery.map((img, i) => (
              <Reveal
                key={img.src}
                delay={(i % 2) * 0.05}
                className={i === 0 ? "md:col-span-2" : ""}
              >
                <div className={`relative overflow-hidden rounded-[14px] border border-line ${i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes={i === 0 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                    className="object-cover"
                  />
                </div>
                {img.caption && <p className="mt-2 text-sm text-ink-muted">{img.caption}</p>}
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonial */}
      {testimonial && (
        <section className="bg-surface-2 py-16 lg:py-24">
          <Container>
            <figure className="mx-auto max-w-3xl text-center">
              <div className="mb-5 flex justify-center gap-0.5">
                {Array.from({ length: testimonial.rating ?? 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="text-2xl font-medium leading-relaxed text-ink">“{testimonial.quote}”</blockquote>
              <figcaption className="mt-6 text-ink-muted">
                <span className="font-semibold text-ink">{testimonial.author}</span> · {testimonial.role}
              </figcaption>
            </figure>
          </Container>
        </section>
      )}

      {related.length > 0 && (
        <section className="py-20 lg:py-28">
          <Container>
            <SectionHeading eyebrow="Cùng loại công trình" title="Dự án liên quan" className="mb-12" />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.06}>
                  <ProjectCard project={p} className="h-full" />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBand />
    </>
  );
}

function Meta({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-brand">{icon}</span>
      <div>
        <div className="text-sm text-ink-muted">{label}</div>
        <div className="font-medium text-ink">{value}</div>
      </div>
    </div>
  );
}
