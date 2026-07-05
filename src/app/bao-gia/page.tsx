import type { Metadata } from "next";
import { Clock, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { Container } from "@/components/ui/container";
import { QuoteForm } from "@/features/quote/quote-form";

export const metadata: Metadata = buildMetadata({
  title: "Nhận báo giá nội thất miễn phí",
  description:
    "Gửi yêu cầu để nhận tư vấn và báo giá nội thất chi tiết miễn phí trong vòng 24 giờ. Khảo sát tận nơi không mất phí.",
  path: routes.quote,
});

const perks = [
  { icon: Sparkles, text: "Tư vấn & khảo sát miễn phí" },
  { icon: Clock, text: "Phản hồi trong 24 giờ" },
  { icon: ShieldCheck, text: "Báo giá minh bạch, không phát sinh" },
];

export default function QuotePage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Nhận báo giá", path: routes.quote }]} />

      <section className="py-10 lg:py-16">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          {/* Left: value */}
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-4xl font-semibold leading-tight text-ink lg:text-5xl">
                Nhận báo giá nội thất miễn phí
              </h1>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-muted">
                Chỉ mất 1 phút để gửi thông tin. Đội ngũ kiến trúc sư sẽ liên hệ tư vấn và gửi báo giá chi tiết cho bạn.
              </p>
            </div>

            <ul className="flex flex-col gap-4">
              {perks.map((p) => (
                <li key={p.text} className="flex items-center gap-3.5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[10px] bg-brand-soft text-brand">
                    <p.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="text-[15px] font-medium text-ink">{p.text}</span>
                </li>
              ))}
            </ul>

            <div className="rounded-[16px] border border-line bg-surface-2 p-6">
              <p className="text-sm text-ink-muted">Cần hỗ trợ ngay?</p>
              <a href={siteConfig.phoneHref} className="mt-1 flex items-center gap-2 text-xl font-semibold text-brand">
                <Phone className="h-5 w-5" /> {siteConfig.phone}
              </a>
              <p className="mt-1 text-sm text-ink-muted">{siteConfig.openingHours}</p>
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-[20px] border border-line bg-surface p-6 shadow-[0_20px_60px_-30px_rgba(16,22,19,0.3)] lg:p-9">
            <QuoteForm />
          </div>
        </Container>
      </section>
    </>
  );
}
