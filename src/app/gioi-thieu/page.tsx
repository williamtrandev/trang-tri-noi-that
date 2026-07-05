import type { Metadata } from "next";
import Image from "next/image";
import { Award, Heart, Target, Users } from "lucide-react";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { StatsBand } from "@/components/sections/stats-band";
import { CtaBand } from "@/components/sections/cta-band";
import { photo } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Giới thiệu",
  description: `${siteConfig.legalName} — xưởng sản xuất và nhà thầu nội thất với hơn ${siteConfig.stats.years} năm kinh nghiệm, hơn ${siteConfig.stats.projects} công trình bàn giao trên toàn quốc.`,
  path: routes.about,
});

const values = [
  { icon: Heart, title: "Tận tâm", desc: "Xem không gian của khách như của chính mình, chăm chút từng chi tiết nhỏ." },
  { icon: Award, title: "Chất lượng", desc: "Vật liệu tuyển chọn, tay nghề vững, kiểm soát chất lượng nghiêm ngặt." },
  { icon: Target, title: "Minh bạch", desc: "Báo giá rõ ràng, cam kết tiến độ bằng hợp đồng, không phát sinh mập mờ." },
  { icon: Users, title: "Đồng hành", desc: "Bảo hành dài hạn và bảo trì trọn đời, luôn sẵn sàng khi khách cần." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Kiến tạo không gian, vun đắp niềm tin"
        description={`Hơn ${siteConfig.stats.years} năm đồng hành cùng hàng nghìn gia đình và doanh nghiệp Việt trong hành trình hoàn thiện không gian sống và làm việc.`}
        image={photo("furniture-company-team-workshop", 2000, 1100)}
        imageAlt="Đội ngũ và xưởng sản xuất Nhà Mộc"
      />
      <Breadcrumb items={[{ name: "Giới thiệu", path: routes.about }]} flush />

      <StatsBand />

      <section className="py-20 lg:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-line">
              <Image
                src={photo("woodworking-craft-detail-vn", 1200, 900)}
                alt="Chi tiết gia công gỗ tại xưởng Nhà Mộc"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading eyebrow="Câu chuyện của chúng tôi" title="Từ một xưởng mộc nhỏ đến nhà thầu nội thất tin cậy" />
            <div className="mt-6 flex flex-col gap-4 text-lg leading-relaxed text-ink-muted">
              <p>
                {siteConfig.name} khởi đầu từ năm {siteConfig.foundedYear} với một xưởng mộc nhỏ và niềm tin rằng
                mỗi món đồ gỗ đều mang một câu chuyện. Qua hơn một thập kỷ, chúng tôi phát triển thành xưởng sản xuất
                quy mô {siteConfig.stats.workshopArea}m² cùng đội ngũ thiết kế và thi công chuyên nghiệp.
              </p>
              <p>
                Chúng tôi tự hào là đối tác trực tiếp, không qua trung gian, mang đến cho khách hàng mức giá tận xưởng
                và sự kiểm soát chất lượng trọn vẹn từ bản vẽ đến khi bàn giao.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface-2 py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="Giá trị cốt lõi" title="Điều làm nên Nhà Mộc" align="center" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05} className="flex flex-col gap-3 rounded-[14px] border border-line bg-surface p-6">
                <span className="grid h-12 w-12 place-items-center rounded-[10px] bg-brand-soft text-brand">
                  <v.icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="text-lg font-semibold text-ink">{v.title}</h3>
                <p className="text-[15px] leading-relaxed text-ink-muted">{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
