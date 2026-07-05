import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ProductCategory } from "@/lib/content/types";
import { routes } from "@/config/routes";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function ProductCategoriesSection({ categories }: { categories: ProductCategory[] }) {
  return (
    <section className="bg-surface-2 py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Sản phẩm nội thất"
          title="Đóng mới theo yêu cầu, đúng từng centimet"
          description="Mọi sản phẩm đều được sản xuất tại xưởng theo kích thước không gian thực tế của bạn."
          align="center"
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 4) * 0.05}>
              <Link
                href={routes.productCategory(c.slug)}
                className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-card border border-line shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]"
              >
                <Image
                  src={c.heroImage}
                  alt={c.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                />
                <div className="absolute inset-0 scrim-ink transition-colors duration-300 group-hover:bg-[color:color-mix(in_srgb,var(--brand)_45%,transparent)]" />
                <div className="relative z-10 flex items-center justify-between p-4">
                  <h3 className="text-base font-semibold text-surface drop-shadow-[0_1px_8px_rgba(16,22,19,0.5)] lg:text-lg">
                    {c.title}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 -translate-x-1 text-surface opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
