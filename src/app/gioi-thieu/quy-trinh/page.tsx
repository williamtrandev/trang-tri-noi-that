import type { Metadata } from "next";
import { routes } from "@/config/routes";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/sections/page-hero";
import { ProcessSteps } from "@/components/sections/process-steps";
import { CtaBand } from "@/components/sections/cta-band";
import { photo } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Quy trình làm việc",
  description:
    "Quy trình làm việc chuyên nghiệp của Nhà Mộc: khảo sát, thiết kế, sản xuất tại xưởng, thi công và bàn giao. Minh bạch, đúng tiến độ ở mọi bước.",
  path: routes.process,
});

const fullProcess = [
  { title: "Tiếp nhận & khảo sát", description: "Lắng nghe nhu cầu, đo đạc hiện trạng và thống nhất ngân sách ban đầu." },
  { title: "Thiết kế & phối cảnh 3D", description: "Đề xuất concept, bố trí công năng và dựng phối cảnh 3D chân thực." },
  { title: "Báo giá & ký hợp đồng", description: "Bóc tách chi tiết, thống nhất vật liệu, tiến độ và ký hợp đồng minh bạch." },
  { title: "Sản xuất tại xưởng", description: "Gia công nội thất và nghiệm thu nội bộ trước khi vận chuyển." },
  { title: "Thi công & lắp đặt", description: "Thi công hoàn thiện tại công trình, lắp đặt nội thất đúng bản vẽ." },
  { title: "Nghiệm thu & bảo hành", description: "Vệ sinh, nghiệm thu cùng khách và kích hoạt chế độ bảo hành dài hạn." },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        title="Quy trình làm việc minh bạch"
        description="Sáu bước rõ ràng đưa ý tưởng của bạn thành không gian hoàn thiện, kiểm soát chất lượng và tiến độ ở từng giai đoạn."
        image={photo("interior-design-process-blueprint", 2000, 1100)}
        imageAlt="Quy trình làm việc của Nhà Mộc"
      />
      <Breadcrumb
        items={[
          { name: "Giới thiệu", path: routes.about },
          { name: "Quy trình", path: routes.process },
        ]}
        flush
      />
      <ProcessSteps steps={fullProcess} onSurface eyebrow="Sáu bước" title="Từ ý tưởng đến bàn giao" />
      <CtaBand />
    </>
  );
}
