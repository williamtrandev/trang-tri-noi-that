import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { getSolution, getSolutions, getProjectsFor } from "@/lib/content";
import { routes } from "@/config/routes";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/cards/project-card";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaBand } from "@/components/sections/cta-band";

export async function generateStaticParams() {
  const solutions = await getSolutions();
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = await getSolution(slug);
  if (!solution) return {};
  return buildMetadata({
    title: solution.seo?.title ?? solution.title,
    description: solution.seo?.description ?? solution.shortDescription,
    path: routes.solution(slug),
    image: solution.heroImage,
  });
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = await getSolution(slug);
  if (!solution) notFound();
  const projects = await getProjectsFor(solution.relatedProjectSlugs);

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: solution.title,
          description: solution.shortDescription,
          path: routes.solution(slug),
        })}
      />
      <PageHero title={solution.title} description={solution.shortDescription} image={solution.heroImage} imageAlt={solution.title} />
      <Breadcrumb
        items={[
          { name: "Giải pháp", path: routes.solutions },
          { name: solution.title, path: routes.solution(slug) },
        ]}
        flush
      />

      <section className="py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Tổng quan" title={`Giải pháp cho ${solution.title.toLowerCase()}`} />
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">{solution.intro}</p>
          </div>
          <div className="rounded-[18px] border border-line bg-surface-2 p-7">
            <h3 className="text-lg font-semibold text-ink">Điểm nổi bật</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {solution.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-[15px] text-ink">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> {h}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {projects.length > 0 && (
        <section className="bg-surface-2 py-20 lg:py-28">
          <Container>
            <SectionHeading eyebrow="Dự án thực tế" title="Chúng tôi đã thực hiện" className="mb-12" />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.06}>
                  <ProjectCard project={p} className="h-full" />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      <FaqSection faqs={solution.faqs} />
      <CtaBand />
    </>
  );
}
