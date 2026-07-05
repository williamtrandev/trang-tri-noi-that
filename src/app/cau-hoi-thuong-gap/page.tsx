import type { Metadata } from "next";
import { getServices, getSolutions } from "@/lib/content";
import { routes } from "@/config/routes";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema } from "@/lib/seo/schema";
import { CtaBand } from "@/components/sections/cta-band";
import { photo } from "@/lib/utils";
import type { FaqItem } from "@/lib/content/types";

export const metadata: Metadata = buildMetadata({
  title: "Câu hỏi thường gặp",
  description:
    "Giải đáp các câu hỏi thường gặp về thiết kế, thi công, sản xuất nội thất, chi phí, thời gian, bảo hành và quy trình làm việc tại Nhà Mộc.",
  path: routes.faq,
});

const general: FaqItem[] = [
  {
    question: "Nhà Mộc có nhận thi công ở tỉnh xa không?",
    answer:
      "Có. Chúng tôi phục vụ TP.HCM và các tỉnh lân cận như Bình Dương, Đồng Nai, Cần Thơ, Lâm Đồng. Với dự án lớn, chúng tôi nhận thi công trên toàn quốc.",
  },
  {
    question: "Tôi cần chuẩn bị gì trước khi liên hệ báo giá?",
    answer:
      "Bạn chỉ cần cung cấp thông tin cơ bản: loại công trình, diện tích, địa chỉ và ngân sách dự kiến. Nếu có mặt bằng hoặc bản vẽ sẵn thì càng tốt để chúng tôi tư vấn chính xác hơn.",
  },
  {
    question: "Chế độ bảo hành như thế nào?",
    answer:
      "Tùy gói dịch vụ, chúng tôi bảo hành từ 24 đến 60 tháng cho kết cấu gỗ và phụ kiện, kèm bảo trì trọn đời với chi phí ưu đãi.",
  },
];

export default async function FaqPage() {
  const [services, solutions] = await Promise.all([getServices(), getSolutions()]);
  const all: FaqItem[] = [
    ...general,
    ...services.flatMap((s) => s.faqs),
    ...solutions.flatMap((s) => s.faqs),
  ];

  return (
    <>
      <JsonLd data={faqSchema(all)} />
      <PageHero
        title="Câu hỏi thường gặp"
        description="Những thắc mắc phổ biến nhất về dịch vụ nội thất của chúng tôi, được giải đáp rõ ràng."
        image={photo("interior-faq-consultation-wood", 2000, 1100)}
        imageAlt="Câu hỏi thường gặp về nội thất"
      />
      <Breadcrumb items={[{ name: "Câu hỏi thường gặp", path: routes.faq }]} flush />

      <section className="py-16 lg:py-24">
        <Container className="max-w-3xl">
          <FaqAccordion faqs={all} />
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
