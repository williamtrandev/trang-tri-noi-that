import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { routes } from "@/config/routes";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { photo } from "@/lib/utils";

/** Dải không gian nội thất full-bleed — điểm nhấn interior, tách section mạnh. */
export function ShowcaseBand() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-ink">
      <Image
        src={photo("luxury-living-room-interior-showcase", 2000, 1200)}
        alt="Không gian phòng khách hoàn thiện do Nhà Mộc thiết kế và thi công"
        fill
        sizes="100vw"
        className="object-cover opacity-70"
      />
      <div className="absolute inset-0 scrim-ink-strong" />
      <Container className="relative z-10 py-24">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[color:var(--gold)]">
            Không gian tiêu biểu
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-5 max-w-2xl text-3xl font-semibold text-surface sm:text-4xl lg:text-[3.25rem]">
            Chúng tôi biến ý tưởng thành không gian sống có thật
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-surface/75">
            Từng đường nét, chất liệu và ánh sáng được chăm chút để mỗi căn phòng vừa đẹp, vừa tiện nghi cho cách sống của bạn.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <Link
            href={routes.projects}
            className="group mt-8 inline-flex items-center gap-2 text-lg font-medium text-surface"
          >
            Khám phá dự án của chúng tôi
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
