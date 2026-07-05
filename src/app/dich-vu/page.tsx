import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getServices } from "@/lib/content";
import { routes } from "@/config/routes";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { CtaBand } from "@/components/sections/cta-band";
import { photo } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Dịch vụ thiết kế, thi công và sản xuất nội thất",
  description:
    "Ba nhóm dịch vụ trọn gói: thiết kế nội thất, thi công nội thất trọn gói và sản xuất nội thất theo yêu cầu tại xưởng. Báo giá minh bạch, bảo hành dài hạn.",
  path: routes.services,
});

export default async function ServicesPage() {
  const services = await getServices();
  return (
    <>
      <PageHero
        title="Dịch vụ nội thất trọn gói"
        description="Một đối tác duy nhất cho toàn bộ hành trình: thiết kế, thi công và sản xuất nội thất theo yêu cầu."
        image={photo("interior-services-showcase-wood", 2000, 1100)}
        imageAlt="Dịch vụ nội thất trọn gói của Nhà Mộc"
      />
      <Breadcrumb items={[{ name: "Dịch vụ", path: routes.services }]} flush />

      <section className="py-16 lg:py-24">
        <Container className="flex flex-col gap-8">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <Link
                href={routes.service(s.slug)}
                className="group grid overflow-hidden rounded-[14px] border border-line bg-surface md:grid-cols-[1fr_1.2fr]"
              >
                <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[300px]">
                  <Image
                    src={s.heroImage}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center gap-4 p-7 lg:p-10">
                  <h2 className="text-2xl font-semibold text-ink transition-colors group-hover:text-brand lg:text-3xl">
                    {s.title}
                  </h2>
                  <p className="max-w-xl text-[15px] leading-relaxed text-ink-muted">{s.intro}</p>
                  <span className="mt-1 inline-flex items-center gap-2 font-medium text-brand">
                    Xem chi tiết dịch vụ
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
