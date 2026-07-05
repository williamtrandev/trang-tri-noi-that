import Image from "next/image";
import { PencilRuler, HardHat, ShieldCheck, Wallet } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { photo } from "@/lib/utils";

const reasons = [
  {
    icon: PencilRuler,
    title: "Thiết kế theo nhu cầu riêng",
    desc: "Kiến trúc sư lắng nghe thói quen sống của bạn, đưa ra phương án công năng và thẩm mỹ riêng.",
  },
  {
    icon: HardHat,
    title: "Thi công trọn gói, đúng tiến độ",
    desc: "Một đầu mối từ thiết kế đến hoàn thiện. Cam kết tiến độ ràng buộc trong hợp đồng.",
  },
  {
    icon: ShieldCheck,
    title: "Bảo hành đến 5 năm",
    desc: "Cam kết bằng hợp đồng, bảo trì dài hạn với chi phí ưu đãi cho khách hàng.",
  },
  {
    icon: Wallet,
    title: "Báo giá minh bạch",
    desc: "Bóc tách chi tiết từng hạng mục, không phát sinh mập mờ trong quá trình thi công.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-ink py-20 text-surface lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              light
              eyebrow="Vì sao chọn chúng tôi"
              title="Uy tín được xây dựng từ chất lượng thật"
              description="Chúng tôi tin rằng một không gian đẹp bắt đầu từ vật liệu tốt, tay nghề vững và sự minh bạch."
            />
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {reasons.map((r, i) => (
                <Reveal key={r.title} delay={i * 0.05} className="flex flex-col gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-[10px] bg-brand/20 text-brand-foreground">
                    <r.icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <h3 className="text-lg font-semibold text-surface">{r.title}</h3>
                  <p className="text-[15px] leading-relaxed text-surface/70">{r.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] lg:aspect-[3/4]">
              <Image
                src={photo("craftsman-woodworking-workshop-vn", 900, 1100)}
                alt="Người thợ tại xưởng sản xuất nội thất Nhà Mộc"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
