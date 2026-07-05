import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Check, Phone } from "lucide-react";
import {
  getAllProducts,
  getProduct,
  getProductCategory,
  getProductsByCategory,
} from "@/lib/content";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { productSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { ProductCard } from "@/components/cards/product-card";
import { CtaBand } from "@/components/sections/cta-band";
import { formatVnd } from "@/lib/utils";

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((p) => ({ category: p.categorySlug, slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const product = await getProduct(category, slug);
  if (!product) return {};
  return buildMetadata({
    title: product.seo?.title ?? product.title,
    description: product.seo?.description ?? product.description.slice(0, 160),
    path: routes.product(category, slug),
    image: product.images[0]?.src,
  });
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const product = await getProduct(category, slug);
  if (!product) notFound();
  const cat = await getProductCategory(category);
  const related = (await getProductsByCategory(category)).filter((p) => p.slug !== slug).slice(0, 4);

  return (
    <>
      <JsonLd
        data={productSchema({
          name: product.title,
          description: product.description,
          image: product.images.map((i) => i.src),
          priceFrom: product.priceFrom,
          material: product.materials,
        })}
      />
      <Breadcrumb
        items={[
          { name: "Sản phẩm", path: routes.products },
          ...(cat ? [{ name: cat.title, path: routes.productCategory(category) }] : []),
          { name: product.title, path: routes.product(category, slug) },
        ]}
      />

      <section className="py-8 lg:py-12">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Gallery */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[16px] border border-line">
              <Image
                src={product.images[0].src}
                alt={product.images[0].alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.slice(1).map((img) => (
                  <div key={img.src} className="relative aspect-square overflow-hidden rounded-[10px] border border-line">
                    <Image src={img.src} alt={img.alt} fill sizes="120px" className="object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-3xl font-semibold text-ink lg:text-4xl">{product.title}</h1>
              {product.priceFrom && (
                <div className="mt-4 text-3xl font-semibold text-brand">Từ {formatVnd(product.priceFrom)}</div>
              )}
            </div>
            <p className="text-lg leading-relaxed text-ink-muted">{product.description}</p>

            <dl className="grid gap-3 rounded-[14px] border border-line bg-surface-2 p-6">
              {product.dimensions && (
                <div className="flex justify-between gap-4 text-[15px]">
                  <dt className="text-ink-muted">Kích thước tham khảo</dt>
                  <dd className="font-medium text-ink">{product.dimensions}</dd>
                </div>
              )}
              <div className="flex justify-between gap-4 text-[15px]">
                <dt className="shrink-0 text-ink-muted">Vật liệu</dt>
                <dd className="text-right font-medium text-ink">{product.materials.join(", ")}</dd>
              </div>
            </dl>

            <ul className="flex flex-col gap-2.5">
              {["Sản xuất theo đúng kích thước không gian", "Tùy chọn vật liệu và màu sắc", "Bảo hành dài hạn"].map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-[15px] text-ink">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> {t}
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={routes.quote} size="lg" className="flex-1">
                Nhận báo giá sản phẩm này
              </ButtonLink>
              <ButtonLink href={siteConfig.phoneHref} variant="outline" size="lg">
                <Phone className="h-5 w-5" /> Tư vấn
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="py-16 lg:py-24">
          <Container>
            <SectionHeading eyebrow="Có thể bạn thích" title="Sản phẩm cùng danh mục" className="mb-10" />
            <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 4) * 0.05}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBand />
    </>
  );
}
