import type { ProcessStep } from "@/lib/content/types";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function ProcessSteps({
  steps,
  eyebrow = "Quy trình làm việc",
  title = "Bốn bước đơn giản đến không gian mơ ước",
  onSurface = false,
}: {
  steps: ProcessStep[];
  eyebrow?: string;
  title?: string;
  onSurface?: boolean;
}) {
  return (
    <section className={onSurface ? "py-20 lg:py-28" : "bg-surface-2 py-20 lg:py-28"}>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} align="center" />
        <ol className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06} as="li" className="relative flex flex-col gap-3">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-soft text-lg font-semibold text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-1 text-lg font-semibold text-ink">{s.title}</h3>
              <p className="text-[15px] leading-relaxed text-ink-muted">{s.description}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
