import type { Metadata } from "next";
import { getSolutions } from "@/lib/content";
import { routes } from "@/config/routes";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/sections/page-hero";
import { SolutionsOverview } from "@/components/sections/solutions-overview";
import { CtaBand } from "@/components/sections/cta-band";
import { photo } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Giải pháp nội thất theo không gian",
  description:
    "Giải pháp nội thất chuyên biệt cho từng loại công trình: chung cư, biệt thự, văn phòng, khách sạn, nhà hàng và quán cà phê.",
  path: routes.solutions,
});

export default async function SolutionsPage() {
  const solutions = await getSolutions();
  return (
    <>
      <PageHero
        title="Giải pháp theo không gian"
        description="Mỗi loại công trình có bài toán riêng. Chúng tôi mang đến giải pháp được đúc kết từ hàng nghìn dự án thực tế."
        image={photo("interior-solutions-spaces-vn", 2000, 1100)}
        imageAlt="Giải pháp nội thất theo không gian"
      />
      <Breadcrumb items={[{ name: "Giải pháp", path: routes.solutions }]} flush />
      <SolutionsOverview solutions={solutions} />
      <CtaBand />
    </>
  );
}
