import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { photo } from "@/lib/utils";

export function CtaBand({
  title = "Sẵn sàng kiến tạo không gian của bạn?",
  description = "Nhận tư vấn và báo giá chi tiết miễn phí từ đội ngũ kiến trúc sư. Khảo sát tận nơi, không mất phí.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="relative isolate overflow-hidden rounded-[28px] border border-ink/60 bg-ink px-6 py-16 text-center sm:px-12 lg:py-24">
          {/* Ảnh nền thật, phủ mờ đặc — không dùng gradient */}
          <Image
            src={photo("dark-wood-texture-interior", 1600, 700)}
            alt=""
            fill
            aria-hidden
            sizes="100vw"
            className="-z-10 object-cover opacity-[0.14]"
          />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
            <Reveal>
              <h2 className="text-display text-balance text-3xl font-semibold text-surface sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-lg leading-relaxed text-surface/70">{description}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={routes.quote} size="lg">
                  Nhận báo giá miễn phí <ArrowRight className="h-5 w-5" />
                </ButtonLink>
                <ButtonLink href={siteConfig.phoneHref} variant="light" size="lg">
                  <Phone className="h-5 w-5" /> {siteConfig.phone}
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
