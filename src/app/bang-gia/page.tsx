import type { Metadata } from "next";
import { Check } from "lucide-react";
import { routes } from "@/config/routes";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaBand } from "@/components/sections/cta-band";
import { photo } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Bảng giá nội thất tham khảo 2026",
  description:
    "Bảng giá thiết kế, thi công và sản xuất nội thất tham khảo mới nhất. Đơn giá theo m² và theo gói hoàn thiện, minh bạch và cập nhật.",
  path: routes.pricing,
});

const tiers = [
  {
    name: "Gói Cơ Bản",
    price: "3.500.000đ",
    unit: "/m²",
    desc: "Phù hợp căn hộ cho thuê, tối ưu chi phí.",
    features: ["Gỗ công nghiệp phủ Melamine", "Phụ kiện tiêu chuẩn", "Bảo hành 24 tháng", "Thi công 20-30 ngày"],
  },
  {
    name: "Gói Cao Cấp",
    price: "5.500.000đ",
    unit: "/m²",
    desc: "Cân bằng thẩm mỹ và độ bền cho gia đình.",
    features: ["Gỗ phủ Acrylic / Laminate", "Phụ kiện Blum, Hafele", "Bảo hành 36 tháng", "Thiết kế 3D miễn phí"],
    featured: true,
  },
  {
    name: "Gói Sang Trọng",
    price: "Liên hệ",
    unit: "",
    desc: "Gỗ tự nhiên cao cấp cho biệt thự, penthouse.",
    features: ["Gỗ óc chó, sồi tự nhiên", "Phụ kiện nhập khẩu cao cấp", "Bảo hành 60 tháng", "Giám sát thi công riêng"],
  },
];

const faqs = [
  {
    question: "Đơn giá trên đã bao gồm những gì?",
    answer:
      "Đơn giá theo m² bao gồm vật liệu, gia công tại xưởng, vận chuyển và lắp đặt. Báo giá chi tiết sẽ được bóc tách theo từng hạng mục sau khảo sát thực tế.",
  },
  {
    question: "Bảng giá này có phải giá cuối cùng không?",
    answer:
      "Đây là đơn giá tham khảo. Chi phí thực tế phụ thuộc diện tích, vật liệu và mức độ hoàn thiện cụ thể. Chúng tôi cam kết không phát sinh nếu không thay đổi thiết kế.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        title="Bảng giá nội thất tham khảo"
        description="Minh bạch là cam kết của chúng tôi. Dưới đây là đơn giá tham khảo để bạn dễ dàng dự trù ngân sách."
        image={photo("interior-pricing-materials-wood", 2000, 1100)}
        imageAlt="Bảng giá nội thất tham khảo"
      />
      <Breadcrumb items={[{ name: "Bảng giá", path: routes.pricing }]} flush />

      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Gói thi công trọn gói"
            title="Ba mức hoàn thiện cho mọi nhu cầu"
            align="center"
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {tiers.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.06}>
                <div
                  className={`flex h-full flex-col gap-6 rounded-[18px] border p-8 ${
                    t.featured
                      ? "border-brand bg-ink text-surface shadow-[0_30px_70px_-30px_rgba(31,77,58,0.5)]"
                      : "border-line bg-surface"
                  }`}
                >
                  <div>
                    {t.featured && (
                      <span className="mb-3 inline-block rounded-full bg-brand px-3 py-1 text-xs font-semibold text-brand-foreground">
                        Được chọn nhiều nhất
                      </span>
                    )}
                    <h3 className={`text-xl font-semibold ${t.featured ? "text-surface" : "text-ink"}`}>{t.name}</h3>
                    <div className="mt-3 flex items-baseline gap-1">
                      <span className={`text-4xl font-semibold ${t.featured ? "text-surface" : "text-brand"}`}>
                        {t.price}
                      </span>
                      <span className={t.featured ? "text-surface/60" : "text-ink-muted"}>{t.unit}</span>
                    </div>
                    <p className={`mt-2 text-[15px] ${t.featured ? "text-surface/70" : "text-ink-muted"}`}>{t.desc}</p>
                  </div>
                  <ul className="flex flex-1 flex-col gap-3">
                    {t.features.map((f) => (
                      <li key={f} className={`flex items-start gap-2.5 text-[15px] ${t.featured ? "text-surface/90" : "text-ink"}`}>
                        <Check className={`mt-0.5 h-4 w-4 shrink-0 ${t.featured ? "text-brand-foreground" : "text-brand"}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <ButtonLink href={routes.quote} variant={t.featured ? "light" : "primary"} size="lg">
                    Nhận báo giá chi tiết
                  </ButtonLink>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-ink-muted">
            * Đơn giá tham khảo, cập nhật 2026. Giá thực tế theo khảo sát và hạng mục cụ thể.
          </p>
        </Container>
      </section>

      <FaqSection faqs={faqs} />
      <CtaBand />
    </>
  );
}
