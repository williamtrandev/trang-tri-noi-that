"use client";

import Image from "next/image";
import { ArrowRight, Phone, Star } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/ui/button";
import { photo } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

const lines = [
  <>Thiết kế &amp; thi công</>,
  <>nội thất cho</>,
  <>
    không gian <span className="text-brand">đáng sống</span>
  </>,
];

export function HeroHome() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-surface pt-[72px]">
      {/* Ảnh tràn mép phải (chỉ desktop) — phá khung, tạo cảm giác editorial */}
      <div className="absolute right-0 top-0 hidden h-full w-[42vw] xl:w-[38vw] lg:block">
        <Image
          src={photo("vietnam-luxury-livingroom-wood-warm", 1200, 1600)}
          alt="Không gian nội thất do Nhà Mộc thiết kế và thi công"
          fill
          priority
          sizes="42vw"
          className="object-cover"
        />
        {/* thẻ số liệu nổi đè mép trái ảnh */}
        <div className="absolute -left-6 bottom-16 flex items-center gap-4 rounded-[16px] bg-surface p-5 shadow-[var(--shadow-lg)]">
          <span className="font-display tabular text-4xl font-bold text-brand">
            {siteConfig.stats.years}+
          </span>
          <span className="max-w-[120px] text-sm leading-snug text-ink-muted">
            năm thiết kế &amp; thi công nội thất
          </span>
        </div>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1320px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_42vw] lg:px-10 lg:py-0 xl:grid-cols-[1fr_38vw]">
        <div className="max-w-2xl lg:pr-8">
          <h1 className="text-display text-[2.75rem] text-ink sm:text-6xl lg:text-[4.75rem]">
            {lines.map((ln, i) => (
              <span key={i} className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  className="block"
                  initial={reduce ? false : { y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.85, delay: 0.1 + i * 0.09, ease }}
                >
                  {ln}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease }}
            className="mt-7 max-w-lg text-lg leading-relaxed text-ink-muted"
          >
            Đơn vị thiết kế và thi công nội thất trọn gói cho căn hộ, biệt thự, văn phòng và không gian thương mại. Báo giá minh bạch, bảo hành đến 5 năm.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.62, ease }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <ButtonLink href={routes.quote} size="lg">
              Nhận báo giá miễn phí <ArrowRight className="h-5 w-5" />
            </ButtonLink>
            <ButtonLink href={siteConfig.phoneHref} variant="outline" size="lg">
              <Phone className="h-5 w-5" /> {siteConfig.phone}
            </ButtonLink>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <div className="flex items-center gap-2.5">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[color:var(--gold)] text-[color:var(--gold)]" />
                ))}
              </div>
              <span className="text-sm font-semibold text-ink">4.9/5</span>
              <span className="text-sm text-ink-muted">(800+ đánh giá)</span>
            </div>
            <p className="text-sm text-ink-muted">
              <span className="tabular font-semibold text-ink">
                {siteConfig.stats.projects.toLocaleString("vi-VN")}+
              </span>{" "}
              công trình đã bàn giao
            </p>
          </motion.div>
        </div>

        {/* Ảnh mobile (khi không có cột tràn mép) */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] shadow-[var(--shadow-lg)] lg:hidden">
          <Image
            src={photo("vietnam-luxury-livingroom-wood-warm", 1200, 900)}
            alt="Không gian nội thất do Nhà Mộc thiết kế và thi công"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
