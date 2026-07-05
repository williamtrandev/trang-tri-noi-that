import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { Project } from "@/lib/content/types";
import { routes } from "@/config/routes";
import { cn } from "@/lib/utils";

export function ProjectCard({ project, className }: { project: Project; className?: string }) {
  return (
    <Link
      href={routes.project(project.slug)}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-card border border-line bg-surface shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/25 hover:shadow-[var(--shadow-lg)]",
        className,
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.cover}
          alt={`${project.title} — dự án nội thất tại ${project.provinceName}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
        />
        <span className="absolute right-4 top-4 grid h-10 w-10 translate-y-2 place-items-center rounded-full bg-surface text-ink opacity-0 shadow-[var(--shadow-md)] transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-center gap-3 text-sm text-ink-muted">
          <span className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" /> {project.provinceName}
          </span>
          {project.area && <span>· {project.area}</span>}
        </div>
        <h3 className="text-lg font-semibold text-ink transition-colors group-hover:text-brand">
          {project.title}
        </h3>
        <p className="line-clamp-2 text-[15px] text-ink-muted">{project.summary}</p>
      </div>
    </Link>
  );
}
