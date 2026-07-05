import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getProductCategories,
  getProductCategory,
  getProductsByCategory,
} from "@/lib/content";
import { routes } from "@/config/routes";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ProductCard } from "@/components/cards/product-card";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaBand } from "@/components/sections/cta-band";

export async function generateStaticParams() {
  const cats = await getProductCategories();
  return cats.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = await getProductCategory(category);
  if (!cat) return {};
  return buildMetadata({
    title: cat.seo?.title ?? cat.title,
    description: cat.seo?.description ?? cat.shortDescription,
    path: routes.productCategory(category),
    image: cat.heroImage,
  });
}

export default async function ProductCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = await getProductCategory(category);
  if (!cat) notFound();
  const products = await getProductsByCategory(category);

  return (
    <>
      <PageHero title={cat.title} description={cat.shortDescription} image={cat.heroImage} imageAlt={cat.title} />
      <Breadcrumb
        items={[
          { name: "Sản phẩm", path: routes.products },
          { name: cat.title, path: routes.productCategory(category) },
        ]}
        flush
      />

      <section className="py-14 lg:py-20">
        <Container>
          <p className="max-w-3xl text-lg leading-relaxed text-ink-muted">{cat.intro}</p>

          {products.length > 0 ? (
            <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
              {products.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 4) * 0.05}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-12 rounded-[14px] border border-dashed border-line-strong bg-surface-2 p-12 text-center">
              <p className="text-lg font-medium text-ink">Đang cập nhật mẫu sản phẩm</p>
              <p className="mt-2 text-ink-muted">
                Liên hệ để được tư vấn và báo giá {cat.title.toLowerCase()} theo yêu cầu riêng của bạn.
              </p>
            </div>
          )}
        </Container>
      </section>

      <FaqSection faqs={cat.faqs} />
      <CtaBand />
    </>
  );
}
