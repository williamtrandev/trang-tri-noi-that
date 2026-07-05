import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

/** Hero cho trang con: nền ảnh + scrim, tiêu đề + mô tả. */
export function PageHero({
  title,
  description,
  image,
  imageAlt,
}: {
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative flex min-h-[52vh] items-end overflow-hidden bg-ink pt-24 lg:min-h-[58vh]">
      <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 scrim-ink-strong" />
      <Container className="relative z-10 pb-14 lg:pb-20">
        <div className="max-w-3xl">
          <Reveal>
            <h1 className="text-display text-balance text-4xl font-semibold text-surface sm:text-5xl lg:text-[3.75rem]">
              {title}
            </h1>
          </Reveal>
          {description && (
            <Reveal delay={0.08}>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-surface/80">{description}</p>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
