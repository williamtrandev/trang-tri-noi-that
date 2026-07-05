import type { Metadata } from "next";
import { CheckCircle2, Phone } from "lucide-react";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = buildMetadata({
  title: "Đã gửi yêu cầu báo giá thành công",
  description: "Cảm ơn bạn đã gửi yêu cầu. Chúng tôi sẽ liên hệ trong thời gian sớm nhất.",
  path: routes.quoteThanks,
  noindex: true,
});

export default function QuoteThanksPage() {
  return (
    <section className="grid min-h-[70vh] place-items-center py-24">
      <Container className="max-w-xl text-center">
        <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-brand-soft text-brand">
          <CheckCircle2 className="h-10 w-10" />
        </span>
        <h1 className="mt-8 text-3xl font-semibold text-ink lg:text-4xl">Cảm ơn bạn đã liên hệ!</h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">
          Yêu cầu của bạn đã được gửi thành công. Đội ngũ Nhà Mộc sẽ liên hệ tư vấn và gửi báo giá chi tiết trong vòng 24 giờ làm việc.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href={routes.home} variant="outline" size="lg">
            Về trang chủ
          </ButtonLink>
          <ButtonLink href={siteConfig.phoneHref} size="lg">
            <Phone className="h-5 w-5" /> Gọi ngay {siteConfig.phone}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
