import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getPost, getPosts } from "@/lib/content";
import { routes } from "@/config/routes";
import { buildMetadata } from "@/lib/seo/metadata";
import { articleSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { Container } from "@/components/ui/container";
import { CtaBand } from "@/components/sections/cta-band";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.seo?.title ?? post.title,
    description: post.seo?.description ?? post.excerpt,
    path: routes.post(slug),
    image: post.cover,
    type: "article",
  });
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const date = new Date(post.publishedAt).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.excerpt,
          image: post.cover,
          datePublished: post.publishedAt,
          author: post.author,
          path: routes.post(slug),
        })}
      />
      <Breadcrumb
        items={[
          { name: "Cẩm nang", path: routes.blog },
          { name: post.title, path: routes.post(slug) },
        ]}
      />

      <article className="py-8 lg:py-12">
        <Container className="max-w-3xl">
          <h1 className="text-balance text-3xl font-semibold leading-tight text-ink lg:text-[2.75rem]">
            {post.title}
          </h1>
          <div className="mt-5 text-sm text-ink-muted">
            {post.author} · {date} · {post.readingMinutes} phút đọc
          </div>
          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-[16px] border border-line">
            <Image src={post.cover} alt={post.title} fill priority sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
          </div>

          <div className="mt-10 flex flex-col gap-5 text-lg leading-relaxed text-ink/90">
            <p className="text-xl font-medium text-ink">{post.excerpt}</p>
            {post.body.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </Container>
      </article>

      <CtaBand />
    </>
  );
}
