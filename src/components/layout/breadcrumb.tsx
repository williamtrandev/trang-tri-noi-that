import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { routes } from "@/config/routes";
import { Container } from "@/components/ui/container";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/seo/schema";

export interface Crumb {
  name: string;
  path: string;
}

export function Breadcrumb({ items, flush = false }: { items: Crumb[]; flush?: boolean }) {
  const full: Crumb[] = [{ name: "Trang chủ", path: routes.home }, ...items];
  return (
    <Container className={flush ? "" : "pt-[96px]"}>
      <JsonLd data={breadcrumbSchema(full)} />
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink-muted">
          {full.map((c, i) => {
            const last = i === full.length - 1;
            return (
              <li key={c.path} className="flex items-center gap-1.5">
                {last ? (
                  <span className="font-medium text-ink" aria-current="page">
                    {c.name}
                  </span>
                ) : (
                  <>
                    <Link href={c.path} className="transition-colors hover:text-brand">
                      {c.name}
                    </Link>
                    <ChevronRight className="h-3.5 w-3.5 opacity-50" />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </Container>
  );
}
