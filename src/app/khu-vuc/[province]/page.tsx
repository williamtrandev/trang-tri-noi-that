import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import {
  getLocation,
  getLocations,
  getProjectsByProvince,
  getServices,
} from "@/lib/content";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { localBusinessSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { ProjectCard } from "@/components/cards/project-card";
import { CtaBand } from "@/components/sections/cta-band";
import { photo } from "@/lib/utils";

export async function generateStaticParams() {
  const locations = await getLocations();
  return locations.map((l) => ({ province: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ province: string }>;
}): Promise<Metadata> {
  const { province } = await params;
  const loc = await getLocation(province);
  if (!loc) return {};
  const year = new Date().getFullYear();
  return buildMetadata({
    title: `Thiết kế thi công nội thất tại ${loc.name} — Báo giá ${year}`,
    description: `Dịch vụ thiết kế, thi công và đóng nội thất trọn gói tại ${loc.name}. ${loc.serviceAreaNote} Khảo sát miễn phí, báo giá minh bạch.`,
    path: routes.location(province),
  });
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ province: string }>;
}) {
  const { province } = await params;
  const loc = await getLocation(province);
  if (!loc) notFound();

  const [projects, services] = await Promise.all([
    getProjectsByProvince(province),
    getServices(),
  ]);

  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <PageHero
        title={`Nội thất tại ${loc.name}`}
        description={loc.serviceAreaNote}
        image={photo(`vietnam-city-${province}`, 2000, 1100)}
        imageAlt={`Dịch vụ nội thất tại ${loc.name}`}
      />
      <Breadcrumb
        items={[
          { name: "Khu vực", path: routes.locations },
          { name: loc.name, path: routes.location(province) },
        ]}
        flush
      />

      <section className="py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow={loc.region}
              title={`Đối tác nội thất uy tín tại ${loc.name}`}
            />
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              Với hơn {siteConfig.stats.years} năm kinh nghiệm, Nhà Mộc đã đồng hành cùng nhiều gia đình và
              doanh nghiệp tại {loc.name}. {loc.serviceAreaNote} Chúng tôi cam kết khảo sát tận nơi miễn phí,
              tư vấn giải pháp phù hợp và báo giá minh bạch.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {services.map((s) => (
                <div key={s.slug} className="flex items-start gap-2.5 rounded-[12px] border border-line bg-surface p-4">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span className="text-[15px] font-medium text-ink">{s.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pt-4">
            <div className="sticky top-24 flex flex-col gap-5 rounded-[18px] border border-line bg-surface-2 p-7">
              <h3 className="text-xl font-semibold text-ink">Nhận báo giá tại {loc.name}</h3>
              <p className="text-[15px] leading-relaxed text-ink-muted">
                Để lại thông tin, kiến trúc sư khu vực {loc.name} sẽ liên hệ khảo sát và tư vấn miễn phí.
              </p>
              <ButtonLink href={routes.quote} size="lg">
                Nhận báo giá miễn phí
              </ButtonLink>
              <ButtonLink href={siteConfig.phoneHref} variant="outline">
                Gọi {siteConfig.phone}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {projects.length > 0 && (
        <section className="bg-surface-2 py-20 lg:py-28">
          <Container>
            <SectionHeading eyebrow="Dự án tại địa phương" title={`Công trình tại ${loc.name}`} className="mb-12" />
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

      <CtaBand />
    </>
  );
}
