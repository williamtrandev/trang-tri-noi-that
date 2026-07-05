import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPosts } from "@/lib/content";
import { routes } from "@/config/routes";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { photo } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Cẩm nang nội thất",
  description:
    "Kiến thức, kinh nghiệm và xu hướng thiết kế nội thất mới nhất từ đội ngũ chuyên gia của Nhà Mộc. Chọn gỗ, dự toán chi phí và nhiều hơn nữa.",
  path: routes.blog,
});

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("vi-VN", { day: "2-digit", month: "long", year: "numeric" });
}

export default async function BlogPage() {
  const posts = await getPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        title="Cẩm nang nội thất"
        description="Kiến thức và cảm hứng giúp bạn đưa ra quyết định đúng đắn cho không gian của mình."
        image={photo("interior-blog-magazine-wood", 2000, 1100)}
        imageAlt="Cẩm nang nội thất Nhà Mộc"
      />
      <Breadcrumb items={[{ name: "Cẩm nang", path: routes.blog }]} flush />

      <section className="py-14 lg:py-20">
        <Container>
          {featured && (
            <Reveal>
              <Link
                href={routes.post(featured.slug)}
                className="group grid overflow-hidden rounded-[16px] border border-line bg-surface lg:grid-cols-2"
              >
                <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
                  <Image
                    src={featured.cover}
                    alt={featured.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center gap-4 p-8 lg:p-12">
                  <span className="text-sm font-medium text-brand">Bài viết nổi bật</span>
                  <h2 className="text-2xl font-semibold text-ink transition-colors group-hover:text-brand lg:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="text-[15px] leading-relaxed text-ink-muted">{featured.excerpt}</p>
                  <div className="text-sm text-ink-muted">
                    {featured.author} · {formatDate(featured.publishedAt)} · {featured.readingMinutes} phút đọc
                  </div>
                </div>
              </Link>
            </Reveal>
          )}

          {rest.length > 0 && (
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.06}>
                  <Link href={routes.post(p.slug)} className="group flex h-full flex-col overflow-hidden rounded-[14px] border border-line bg-surface">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image src={p.cover} alt={p.title} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="flex flex-1 flex-col gap-2 p-5">
                      <h3 className="text-lg font-semibold text-ink transition-colors group-hover:text-brand">{p.title}</h3>
                      <p className="line-clamp-2 flex-1 text-[15px] text-ink-muted">{p.excerpt}</p>
                      <div className="mt-1 text-sm text-ink-muted">{formatDate(p.publishedAt)} · {p.readingMinutes} phút đọc</div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
