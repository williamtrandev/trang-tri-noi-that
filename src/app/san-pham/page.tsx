import type { Metadata } from "next";
import { getProductCategories } from "@/lib/content";
import { routes } from "@/config/routes";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/sections/page-hero";
import { ProductCategoriesSection } from "@/components/sections/product-categories";
import { CtaBand } from "@/components/sections/cta-band";
import { photo } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Sản phẩm nội thất — Tủ bếp, bàn ăn, giường, tủ áo",
  description:
    "Danh mục sản phẩm nội thất đóng mới theo yêu cầu: tủ bếp, bàn ăn, ghế, giường ngủ, tủ quần áo, kệ tivi, nội thất văn phòng và nội thất gỗ tự nhiên cao cấp.",
  path: routes.products,
});

export default async function ProductsPage() {
  const categories = await getProductCategories();
  return (
    <>
      <PageHero
        title="Sản phẩm nội thất"
        description="Mọi sản phẩm đều được sản xuất tại xưởng theo đúng kích thước và phong cách không gian của bạn."
        image={photo("furniture-products-collection-wood", 2000, 1100)}
        imageAlt="Bộ sưu tập sản phẩm nội thất Nhà Mộc"
      />
      <Breadcrumb items={[{ name: "Sản phẩm", path: routes.products }]} flush />
      <ProductCategoriesSection categories={categories} />
      <CtaBand />
    </>
  );
}
