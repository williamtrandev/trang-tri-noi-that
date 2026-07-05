"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/lib/content/types";
import { ProjectCard } from "@/components/cards/project-card";
import { cn } from "@/lib/utils";

interface Filter {
  slug: string;
  name: string;
}

export function ProjectsGallery({
  projects,
  solutionFilters,
  provinceFilters,
}: {
  projects: Project[];
  solutionFilters: Filter[];
  provinceFilters: Filter[];
}) {
  const [solution, setSolution] = useState("all");
  const [province, setProvince] = useState("all");

  const filtered = useMemo(
    () =>
      projects.filter(
        (p) =>
          (solution === "all" || p.solutionSlug === solution) &&
          (province === "all" || p.provinceSlug === province),
      ),
    [projects, solution, province],
  );

  return (
    <div>
      <div className="flex flex-col gap-4">
        <FilterRow
          label="Loại công trình"
          value={solution}
          onChange={setSolution}
          options={[{ slug: "all", name: "Tất cả" }, ...solutionFilters]}
        />
        <FilterRow
          label="Khu vực"
          value={province}
          onChange={setProvince}
          options={[{ slug: "all", name: "Toàn quốc" }, ...provinceFilters]}
        />
      </div>

      {filtered.length > 0 ? (
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} project={p} className="h-full" />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-ink-muted">
          Chưa có dự án phù hợp bộ lọc. Vui lòng chọn tiêu chí khác.
        </p>
      )}
    </div>
  );
}

function FilterRow({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: Filter[];
}) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
      <span className="shrink-0 text-sm font-medium text-ink-muted">{label}</span>
      <div className="no-scrollbar flex gap-2 overflow-x-auto">
        {options.map((o) => (
          <button
            key={o.slug}
            onClick={() => onChange(o.slug)}
            className={cn(
              "shrink-0 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              value === o.slug
                ? "border-brand bg-brand text-brand-foreground"
                : "border-line-strong text-ink hover:border-brand/40",
            )}
          >
            {o.name}
          </button>
        ))}
      </div>
    </div>
  );
}
