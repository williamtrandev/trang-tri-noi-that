import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { getService, getServices, getProjectsFor } from "@/lib/content";
import { routes } from "@/config/routes";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Icon } from "@/components/ui/icon";
import { ButtonLink } from "@/components/ui/button";
import { ProcessSteps } from "@/components/sections/process-steps";
import { FaqSection } from "@/components/sections/faq-section";
import { ProjectCard } from "@/components/cards/project-card";
import { CtaBand } from "@/components/sections/cta-band";
import { formatVnd } from "@/lib/utils";

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = await getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.seo?.title ?? service.title,
    description: service.seo?.description ?? service.shortDescription,
    path: routes.service(slug),
    image: service.heroImage,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await getService(slug);
  if (!service) notFound();

  const relatedProjects = await getProjectsFor(service.relatedProjectSlugs);

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: service.title,
          description: service.shortDescription,
          path: routes.service(slug),
        })}
      />
      <PageHero
        title={service.title}
        description={service.shortDescription}
        image={service.heroImage}
        imageAlt={service.title}
      />
      <Breadcrumb
        items={[
          { name: "Dịch vụ", path: routes.services },
          { name: service.title, path: routes.service(slug) },
        ]}
        flush
      />

      {/* Intro + price sidebar */}
      <section className="py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Tổng quan" title={`Về dịch vụ ${service.title.toLowerCase()}`} />
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">{service.intro}</p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {service.benefits.map((b, i) => (
                <Reveal key={b.title} delay={i * 0.05} className="flex flex-col gap-3 rounded-[14px] border border-line bg-surface p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-[10px] bg-brand-soft text-brand">
                    <Icon name={b.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-ink">{b.title}</h3>
                  <p className="text-[15px] leading-relaxed text-ink-muted">{b.description}</p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Sticky quote card */}
          <div className="lg:pt-4">
            <div className="sticky top-24 flex flex-col gap-5 rounded-[18px] border border-line bg-surface-2 p-7">
              {service.priceFrom ? (
                <div>
                  <span className="text-sm text-ink-muted">Chi phí tham khảo từ</span>
                  <div className="mt-1 text-3xl font-semibold text-brand">
                    {formatVnd(service.priceFrom)}
                    {service.priceUnit ? <span className="text-lg text-ink-muted">/{service.priceUnit}</span> : null}
                  </div>
                </div>
              ) : (
                <div className="text-2xl font-semibold text-ink">Báo giá theo yêu cầu</div>
              )}
              <p className="text-[15px] leading-relaxed text-ink-muted">
                Khảo sát và tư vấn miễn phí. Nhận báo giá chi tiết trong vòng 24 giờ.
              </p>
              <ul className="flex flex-col gap-2.5">
                {["Khảo sát tận nơi miễn phí", "Báo giá minh bạch, không phát sinh", "Bảo hành dài hạn"].map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-[15px] text-ink">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> {t}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-2.5">
                <ButtonLink href={routes.quote} size="lg">
                  Nhận báo giá miễn phí
                </ButtonLink>
                <ButtonLink href={routes.pricing} variant="outline">
                  Xem bảng giá tham khảo
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ProcessSteps steps={service.processSteps} />

      {relatedProjects.length > 0 && (
        <section className="py-20 lg:py-28">
          <Container>
            <SectionHeading eyebrow="Dự án liên quan" title="Công trình tiêu biểu" className="mb-12" />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.06}>
                  <ProjectCard project={p} className="h-full" />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      <FaqSection faqs={service.faqs} />
      <CtaBand />
    </>
  );
}
