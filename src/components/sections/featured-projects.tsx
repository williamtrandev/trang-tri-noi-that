import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/content/types";
import { routes } from "@/config/routes";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/cards/project-card";

export function FeaturedProjects({ projects }: { projects: Project[] }) {
  const shown = projects.slice(0, 3);
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Dự án tiêu biểu"
            title="Bằng chứng nằm ở công trình thực tế"
            description="Hàng nghìn không gian đã được chúng tôi hoàn thiện trên khắp cả nước."
            className="max-w-2xl"
          />
          <Link
            href={routes.projects}
            className="inline-flex shrink-0 items-center gap-2 font-medium text-brand transition-all hover:gap-3"
          >
            Xem tất cả dự án <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <ProjectCard project={p} className="h-full" />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
