import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { StatCounter } from "./stat-counter";

const stats = [
  { value: siteConfig.stats.years, suffix: "+", label: "Năm kinh nghiệm" },
  { value: siteConfig.stats.projects, suffix: "+", label: "Công trình bàn giao" },
  { value: siteConfig.stats.provinces, suffix: "", label: "Tỉnh thành phục vụ" },
  { value: 98, suffix: "%", label: "Khách hàng hài lòng" },
];

export function StatsBand() {
  return (
    <section className="bg-surface-2">
      <Container className="py-16 lg:py-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.06}
              className="flex flex-col gap-2 text-center lg:text-left"
            >
              <span className="font-display tabular whitespace-nowrap text-[2.75rem] font-medium text-ink lg:text-6xl">
                <StatCounter value={s.value} suffix={s.suffix} />
              </span>
              <span className="text-sm text-ink-muted lg:text-[15px]">{s.label}</span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
