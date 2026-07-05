import type { Metadata } from "next";
import { Clock, Factory, Mail, MapPin, Phone } from "lucide-react";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { Container } from "@/components/ui/container";
import { QuoteForm } from "@/features/quote/quote-form";

export const metadata: Metadata = buildMetadata({
  title: "Liên hệ",
  description: `Liên hệ ${siteConfig.name}: ${siteConfig.phone}. Showroom tại TP.HCM, xưởng sản xuất tại Bình Dương. Tư vấn thiết kế và thi công nội thất trên toàn quốc.`,
  path: routes.contact,
});

const info = [
  { icon: Phone, label: "Hotline", value: siteConfig.phone, href: siteConfig.phoneHref },
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: MapPin, label: "Showroom", value: siteConfig.address },
  { icon: Factory, label: "Xưởng sản xuất", value: siteConfig.workshop },
  { icon: Clock, label: "Giờ làm việc", value: siteConfig.openingHours },
];

export default function ContactPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Liên hệ", path: routes.contact }]} />

      <section className="py-10 lg:py-16">
        <Container>
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold text-ink lg:text-5xl">Liên hệ với chúng tôi</h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              Ghé showroom, gọi hotline hoặc để lại thông tin. Chúng tôi luôn sẵn sàng tư vấn cho không gian của bạn.
            </p>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div className="flex flex-col gap-6">
              <ul className="flex flex-col gap-5">
                {info.map((it) => (
                  <li key={it.label} className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[10px] bg-brand-soft text-brand">
                      <it.icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <div>
                      <div className="text-sm text-ink-muted">{it.label}</div>
                      {it.href ? (
                        <a href={it.href} className="text-lg font-medium text-ink hover:text-brand">
                          {it.value}
                        </a>
                      ) : (
                        <div className="text-lg font-medium text-ink">{it.value}</div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="relative mt-2 aspect-[16/10] overflow-hidden rounded-[16px] border border-line">
                <iframe
                  title="Bản đồ showroom Nhà Mộc"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=106.72%2C10.80%2C106.78%2C10.86&layer=mapnik"
                  className="h-full w-full"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="rounded-[20px] border border-line bg-surface p-6 shadow-[0_20px_60px_-30px_rgba(16,22,19,0.3)] lg:p-9">
              <h2 className="text-2xl font-semibold text-ink">Gửi yêu cầu tư vấn</h2>
              <p className="mt-2 text-[15px] text-ink-muted">Điền thông tin, chúng tôi sẽ liên hệ trong 24 giờ.</p>
              <div className="mt-6">
                <QuoteForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
