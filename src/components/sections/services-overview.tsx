import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/content/types";
import { routes } from "@/config/routes";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function ServicesOverview({ services }: { services: Service[] }) {
  const [lead, ...rest] = services;
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Dịch vụ của chúng tôi"
            title="Một đầu mối, trọn vẹn hành trình nội thất"
            description="Từ ý tưởng ban đầu đến sản phẩm hoàn thiện, chúng tôi đồng hành cùng bạn ở mọi bước."
            className="max-w-2xl"
          />
          <Link
            href={routes.services}
            className="inline-flex shrink-0 items-center gap-2 font-medium text-brand hover:gap-3 transition-all"
          >
            Xem tất cả dịch vụ <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {/* Lead service — large */}
          {lead && (
            <Reveal className="lg:row-span-2">
              <Link
                href={routes.service(lead.slug)}
                className="group relative flex h-full min-h-[420px] flex-col justify-end overflow-hidden rounded-card border border-line shadow-[var(--shadow-sm)] transition-shadow duration-300 hover:shadow-[var(--shadow-lg)]"
              >
                <Image
                  src={lead.heroImage}
                  alt={lead.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                />
                <div className="absolute inset-0 scrim-ink-strong" />
                <div className="relative z-10 p-8">
                  <h3 className="text-2xl font-semibold text-surface">{lead.title}</h3>
                  <p className="mt-2 max-w-md text-[15px] leading-relaxed text-surface/80">
                    {lead.shortDescription}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 font-medium text-surface">
                    Tìm hiểu thêm <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          )}

          {/* Other services — stacked with image thumb */}
          {rest.map((s, i) => (
            <Reveal key={s.slug} delay={0.05 * (i + 1)}>
              <Link
                href={routes.service(s.slug)}
                className={cn(
                  "group flex gap-5 overflow-hidden rounded-card border border-line bg-surface p-4 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/25 hover:shadow-[var(--shadow-md)]",
                )}
              >
                <div className="relative h-28 w-32 shrink-0 overflow-hidden rounded-[10px]">
                  <Image
                    src={s.heroImage}
                    alt={s.title}
                    fill
                    sizes="128px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-lg font-semibold text-ink transition-colors group-hover:text-brand">
                    {s.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm text-ink-muted">{s.shortDescription}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
