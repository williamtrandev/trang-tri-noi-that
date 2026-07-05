import Image from "next/image";
import { HardHat, PencilRuler, ShieldCheck, Wallet } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { photo } from "@/lib/utils";

const features = [
  {
    icon: PencilRuler,
    title: "Thiết kế theo nhu cầu riêng",
    desc: "Kiến trúc sư lắng nghe cách bạn sống, đưa ra phương án công năng và thẩm mỹ riêng.",
  },
  {
    icon: HardHat,
    title: "Thi công trọn gói, đúng tiến độ",
    desc: "Một đầu mối từ thiết kế đến hoàn thiện, cam kết tiến độ trong hợp đồng.",
  },
  {
    icon: ShieldCheck,
    title: "Bảo hành đến 5 năm",
    desc: "Cam kết bằng hợp đồng, bảo trì dài hạn với chi phí ưu đãi.",
  },
];

export function WhyUsBento() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="grid gap-4 md:grid-cols-3">
          {/* A — statement lớn (tối), 2x2 */}
          <Reveal className="md:col-span-2 md:row-span-2">
            <div className="relative flex h-full min-h-[340px] flex-col justify-between overflow-hidden rounded-[20px] bg-ink p-8 lg:p-10">
              <Image
                src={photo("interior-design-craft-detail-vn", 1200, 900)}
                alt=""
                aria-hidden
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover opacity-20"
              />
              <div className="relative">
                <span className="text-sm font-medium text-[color:var(--gold)]">Vì sao chọn Nhà Mộc</span>
                <h2 className="mt-4 max-w-lg text-3xl font-semibold text-surface lg:text-[2.75rem]">
                  Uy tín được xây dựng từ chất lượng thật
                </h2>
              </div>
              <p className="relative mt-8 max-w-md text-lg leading-relaxed text-surface/70">
                Một không gian đẹp bắt đầu từ phương án đúng, tay nghề vững và sự minh bạch trong từng con số.
              </p>
            </div>
          </Reveal>

          {/* B — ưu đãi nổi bật (brand) */}
          <Reveal delay={0.05}>
            <div className="flex h-full flex-col justify-center gap-2 rounded-[20px] bg-brand p-8 text-brand-foreground">
              <span className="text-2xl font-semibold leading-snug lg:text-[1.75rem]">Miễn phí thiết kế</span>
              <span className="text-[15px] text-brand-foreground/85">khi thi công trọn gói tại Nhà Mộc</span>
            </div>
          </Reveal>

          {/* C — báo giá minh bạch (surface-2) */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-3 rounded-[20px] bg-surface-2 p-8">
              <Wallet className="h-7 w-7 text-brand" strokeWidth={1.75} />
              <h3 className="text-lg font-semibold text-ink">Báo giá minh bạch</h3>
              <p className="text-[15px] leading-relaxed text-ink-muted">
                Bóc tách chi tiết từng hạng mục, không phát sinh mập mờ.
              </p>
            </div>
          </Reveal>

          {/* D,E,F — 3 lý do */}
          {features.map((f, i) => (
            <Reveal key={f.title} delay={0.15 + i * 0.05}>
              <div className="flex h-full flex-col gap-3 rounded-[20px] bg-surface-2 p-8">
                <f.icon className="h-7 w-7 text-brand" strokeWidth={1.75} />
                <h3 className="text-lg font-semibold text-ink">{f.title}</h3>
                <p className="text-[15px] leading-relaxed text-ink-muted">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
