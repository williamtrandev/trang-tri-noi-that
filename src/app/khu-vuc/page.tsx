import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { getLocations } from "@/lib/content";
import { routes } from "@/config/routes";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { CtaBand } from "@/components/sections/cta-band";
import { photo } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Khu vực phục vụ",
  description:
    "Nhà Mộc phục vụ thiết kế, thi công và sản xuất nội thất tại TP.HCM, Bình Dương, Đồng Nai, Cần Thơ và nhiều tỉnh thành khác.",
  path: routes.locations,
});

export default async function LocationsPage() {
  const locations = await getLocations();
  return (
    <>
      <PageHero
        title="Khu vực phục vụ"
        description="Đội thi công và hệ thống vận chuyển của chúng tôi phủ khắp các tỉnh thành trọng điểm phía Nam."
        image={photo("vietnam-map-service-area", 2000, 1100)}
        imageAlt="Khu vực phục vụ của Nhà Mộc"
      />
      <Breadcrumb items={[{ name: "Khu vực", path: routes.locations }]} flush />

      <section className="py-14 lg:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
            {locations.map((l, i) => (
              <Reveal key={l.slug} delay={(i % 2) * 0.05}>
                <Link
                  href={routes.location(l.slug)}
                  className="group flex items-start justify-between gap-4 rounded-[14px] border border-line bg-surface p-6 transition-colors hover:border-brand/40 hover:bg-surface-2"
                >
                  <div className="flex gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[10px] bg-brand-soft text-brand">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <h2 className="text-lg font-semibold text-ink transition-colors group-hover:text-brand">
                        {l.name}
                      </h2>
                      <p className="mt-1 text-sm text-ink-muted">{l.serviceAreaNote}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-ink-muted transition-colors group-hover:text-brand" />
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
