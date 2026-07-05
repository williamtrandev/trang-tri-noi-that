"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import type { Testimonial } from "@/lib/content/types";

export function Testimonials({ items }: { items: Testimonial[] }) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla?.scrollNext(), [embla]);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla]);

  return (
    <div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {items.map((t) => (
            <figure
              key={t.id}
              className="mr-5 min-w-0 flex-[0_0_100%] rounded-[14px] border border-line bg-surface p-7 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: t.rating ?? 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="text-[15px] leading-relaxed text-ink">“{t.quote}”</blockquote>
              <figcaption className="mt-5 pt-1">
                <div className="font-semibold text-ink">{t.author}</div>
                <div className="text-sm text-ink-muted">
                  {t.role}
                  {t.provinceName ? ` · ${t.provinceName}` : ""}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center gap-3">
        <button
          onClick={scrollPrev}
          aria-label="Đánh giá trước"
          className="grid h-11 w-11 place-items-center rounded-full border border-line-strong text-ink transition-colors hover:border-brand hover:text-brand"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <button
          onClick={scrollNext}
          aria-label="Đánh giá tiếp theo"
          className="grid h-11 w-11 place-items-center rounded-full border border-line-strong text-ink transition-colors hover:border-brand hover:text-brand"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
        <span className="ml-2 text-sm text-ink-muted">
          {selected + 1} / {items.length}
        </span>
      </div>
    </div>
  );
}
