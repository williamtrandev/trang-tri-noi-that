import type { Metadata } from "next";
import Image from "next/image";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { CtaBand } from "@/components/sections/cta-band";
import { photo } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Xưởng sản xuất nội thất",
  description: `Tham quan xưởng sản xuất nội thất ${siteConfig.stats.workshopArea}m² của ${siteConfig.name} với hệ thống máy CNC hiện đại, quy trình kiểm soát chất lượng nghiêm ngặt.`,
  path: routes.workshop,
});

const gallery = [
  { seed: "cnc-machine-woodwork", alt: "Máy CNC cắt gỗ chính xác tại xưởng" },
  { seed: "wood-drying-storage", alt: "Khu vực sấy và lưu trữ gỗ đạt chuẩn độ ẩm" },
  { seed: "furniture-assembly-line", alt: "Dây chuyền lắp ráp nội thất" },
  { seed: "quality-control-furniture", alt: "Kiểm tra chất lượng sản phẩm trước khi giao" },
  { seed: "wood-finishing-paint", alt: "Công đoạn hoàn thiện sơn phủ bề mặt" },
  { seed: "workshop-warehouse-wood", alt: "Kho vật liệu gỗ tự nhiên và công nghiệp" },
];

export default function WorkshopPage() {
  return (
    <>
      <PageHero
        title="Xưởng sản xuất trực tiếp"
        description={`Nhà máy ${siteConfig.stats.workshopArea}m² tại Bình Dương với máy móc hiện đại và đội ngũ thợ lành nghề — nơi mọi sản phẩm được tạo ra.`}
        image={photo("large-furniture-factory-interior", 2000, 1100)}
        imageAlt="Xưởng sản xuất nội thất Nhà Mộc"
      />
      <Breadcrumb
        items={[
          { name: "Giới thiệu", path: routes.about },
          { name: "Xưởng sản xuất", path: routes.workshop },
        ]}
        flush
      />

      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Năng lực sản xuất"
            title="Kiểm soát chất lượng từ gốc"
            description="Là xưởng sản xuất trực tiếp, chúng tôi chủ động từ khâu chọn gỗ, gia công đến hoàn thiện, đảm bảo chất lượng đồng đều cho cả đơn lẻ lẫn dự án số lượng lớn."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-3">
            {gallery.map((g, i) => (
              <Reveal
                key={g.seed}
                delay={(i % 3) * 0.05}
                className={i === 0 ? "col-span-2 lg:col-span-2 lg:row-span-2" : ""}
              >
                <div className={`relative overflow-hidden rounded-[14px] border border-line ${i === 0 ? "aspect-[16/10] lg:h-full" : "aspect-square"}`}>
                  <Image src={photo(g.seed, 1000, 800)} alt={g.alt} fill sizes="(max-width: 1024px) 50vw, 33vw" className="object-cover" />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand title="Cần đối tác gia công nội thất?" description="Chúng tôi nhận gia công theo bản vẽ cho kiến trúc sư, nhà thầu và dự án số lượng lớn." />
    </>
  );
}
