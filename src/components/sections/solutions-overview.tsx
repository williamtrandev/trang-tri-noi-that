import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Solution } from "@/lib/content/types";
import { routes } from "@/config/routes";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function SolutionsOverview({ solutions }: { solutions: Solution[] }) {
  return (
    <section className="bg-surface-2 py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Giải pháp theo không gian"
          title="Mỗi loại công trình một giải pháp riêng"
          description="Từ căn hộ nhỏ đến khách sạn quy mô lớn, chúng tôi có kinh nghiệm chuyên biệt cho từng loại hình."
        />

        <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 lg:grid lg:grid-cols-3 lg:overflow-visible">
          {solutions.map((s, i) => (
            <Reveal
              key={s.slug}
              delay={(i % 3) * 0.05}
              className="min-w-[80%] snap-start sm:min-w-[45%] lg:min-w-0"
            >
              <Link
                href={routes.solution(s.slug)}
                className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/25 hover:shadow-[var(--shadow-lg)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={s.heroImage}
                    alt={s.title}
                    fill
                    sizes="(max-width: 1024px) 80vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-surface/95 px-3 py-1 text-xs font-medium text-ink shadow-[var(--shadow-sm)] backdrop-blur-sm">
                    {s.audience === "B2B" ? "Doanh nghiệp" : "Gia đình"}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <h3 className="text-lg font-semibold text-ink transition-colors group-hover:text-brand">
                    {s.title}
                  </h3>
                  <p className="line-clamp-2 flex-1 text-[15px] text-ink-muted">{s.shortDescription}</p>
                  <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                    Chi tiết giải pháp <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
