"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { Service } from "@/lib/content/types";
import { routes } from "@/config/routes";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const ease = [0.16, 1, 0.3, 1] as const;

export function ServicesInteractive({ services }: { services: Service[] }) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const current = services[active];

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            title="Một đầu mối, trọn vẹn hành trình nội thất"
            description="Từ ý tưởng ban đầu đến khi bàn giao, chúng tôi đồng hành cùng bạn ở mọi bước."
            className="max-w-2xl"
          />
          <Link
            href={routes.services}
            className="group inline-flex shrink-0 items-center gap-2 font-medium text-brand"
          >
            Xem tất cả dịch vụ
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Desktop: list + image reveal */}
        <div className="mt-12 hidden gap-10 lg:grid lg:grid-cols-[1.1fr_0.9fr]">
          <ul>
            {services.map((s, i) => {
              const isActive = i === active;
              return (
                <li key={s.slug} onMouseEnter={() => setActive(i)}>
                  <Link
                    href={routes.service(s.slug)}
                    className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 border-b border-line py-8 transition-colors"
                  >
                    <span
                      className={`font-display tabular text-2xl font-semibold transition-colors ${
                        isActive ? "text-brand" : "text-ink-muted/50"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3
                        className={`text-2xl font-semibold transition-colors lg:text-[1.75rem] ${
                          isActive ? "text-brand" : "text-ink"
                        }`}
                      >
                        {s.title}
                      </h3>
                      <p
                        className={`mt-2 max-w-md text-[15px] leading-relaxed text-ink-muted transition-all duration-300 ${
                          isActive ? "max-h-20 opacity-100" : "max-h-0 overflow-hidden opacity-0"
                        }`}
                      >
                        {s.shortDescription}
                      </p>
                    </div>
                    <ArrowUpRight
                      className={`h-6 w-6 transition-all ${
                        isActive ? "translate-x-0 text-brand opacity-100" : "-translate-x-2 opacity-0"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] bg-surface-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.slug}
                initial={reduce ? false : { opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduce ? undefined : { opacity: 0 }}
                transition={{ duration: 0.5, ease }}
                className="absolute inset-0"
              >
                <Image
                  src={current.heroImage}
                  alt={current.title}
                  fill
                  sizes="45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 scrim-ink" />
                <div className="absolute bottom-0 p-7">
                  <span className="font-display text-3xl font-semibold text-surface">{current.title}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile: stacked cards */}
        <div className="mt-10 flex flex-col gap-5 lg:hidden">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={routes.service(s.slug)}
              className="group overflow-hidden rounded-[--radius-card] border border-line bg-surface shadow-[var(--shadow-sm)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={s.heroImage} alt={s.title} fill sizes="100vw" className="object-cover" />
              </div>
              <div className="flex flex-col gap-2 p-5">
                <h3 className="text-lg font-semibold text-ink">{s.title}</h3>
                <p className="text-[15px] leading-relaxed text-ink-muted">{s.shortDescription}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
