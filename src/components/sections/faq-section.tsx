import type { FaqItem } from "@/lib/content/types";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaqAccordion } from "./faq-accordion";
import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema } from "@/lib/seo/schema";

export function FaqSection({
  faqs,
  title = "Câu hỏi thường gặp",
  eyebrow = "Giải đáp",
}: {
  faqs: FaqItem[];
  title?: string;
  eyebrow?: string;
}) {
  if (!faqs.length) return null;
  return (
    <section className="py-20 lg:py-28">
      <JsonLd data={faqSchema(faqs)} />
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading eyebrow={eyebrow} title={title} />
          <FaqAccordion faqs={faqs} />
        </div>
      </Container>
    </section>
  );
}
